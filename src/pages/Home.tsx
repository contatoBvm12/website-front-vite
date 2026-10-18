import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import NewsCard from '../components/NewsCard';
import { NewsArtwork, RoomHeader, ScrollArrows, WallLabel } from '../components/Gallery';
import Encontro from '../marca/Encontro';
import { archive, featured, news } from '../data/news';
import { titulos } from '../data/assistir';
import { receitas } from '../data/receitas';

/*
 * A home é uma galeria: a entrada (díptico: o título na parede verde, o encontro das águas no painel marinho) e cinco salas numeradas,
 * alternando campos chapados de marinho e verde com a névoa para ler. Cada obra tem a sua etiqueta de parede.
 */

// Valores fixos, os mesmos do site anterior.
const marketStats = [
  { label: 'Taxa DI 14/11', value: '14,90%' },
  { label: 'Índice DI 17/11', value: '53.363,71' },
  { label: 'S&P/B3 IBO VIX', value: '17,67', change: '+0,4%' },
];
const staticMovers = [{ code: 'MPA', label: 'Árvores Plantadas (MPA)', value: '2.345.890', change: '+3,1%', positive: true }];

type Day = { date: string; usd: number; eur: number; plf: number };

// Índice PLF = 0,5 × dólar + 0,35 × euro + 0,15 × crédito de carbono VE (dólar × 12) — a mesma conta do site anterior.
const plfOf = (usd: number, eur: number) => 0.5 * usd + 0.35 * eur + 0.15 * (usd * 12);
// A AwesomeAPI do site anterior passou a recusar (cota esgotada, sem CORS); a Frankfurter dá a referência diária do BCE.
const RATES_URL = 'https://api.frankfurter.dev/v1';

const brl = (v: number) => `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const pct = (v: number) =>
  `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;
const ddmm = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;

/**
 * O gráfico do Índice Palafita: a linha em verde e, embaixo dela, as hastes da palafita — o gráfico é a marca.
 * Estica para preencher o quadro (a altura acompanha a coluna de dados ao lado); o traço não engrossa com isso.
 */
const PalafitaChart: React.FC<{ days: Day[] }> = ({ days }) => {
  const W = 640, H = 300, top = 8, foot = 2, plot = H - top - foot;
  const values = days.map((d) => d.plf);
  const max = values.length ? Math.max(...values) : 0;
  const min = values.length ? Math.min(...values) : 0;
  const range = max - min || Math.max(max * 0.001, 0.01);
  const pts = days.map((d, i) => [(i / Math.max(1, days.length - 1)) * W, top + (1 - (d.plf - min) / range) * plot]);
  const flat = days.length < 2;
  const line = flat ? `M0 ${top + plot / 2} H${W}` : pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="absolute inset-0 block h-full w-full"
      role="img"
      aria-label="Gráfico do Índice Palafita nos últimos 30 dias úteis"
    >
      <line x1="0" x2={W} y1={top + plot} y2={top + plot} stroke="rgba(255,255,255,.18)" vectorEffect="non-scaling-stroke" />
      <g fill="#4ADE80">
        {!flat && pts.map(([x, y], i) => <rect key={i} x={Math.min(W - 4, Math.max(0, x - 2))} y={y} width={4} height={top + plot - y} />)}
      </g>
      <path
        d={line}
        fill="none"
        stroke="#4ADE80"
        strokeWidth={flat ? 2 : 4}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={flat ? 0.4 : 1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const Home: React.FC = () => {
  const [days, setDays] = useState<Day[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    const from = new Date(Date.now() - 50 * 864e5).toISOString().slice(0, 10);
    fetch(`${RATES_URL}/${from}..?base=BRL&symbols=USD,EUR`, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((data: { rates: Record<string, { USD: number; EUR: number }> }) => {
        const series = Object.keys(data.rates)
          .sort()
          .map((date) => {
            const usd = 1 / data.rates[date].USD;
            const eur = 1 / data.rates[date].EUR;
            return { date, usd, eur, plf: plfOf(usd, eur) };
          });
        setDays(series.slice(-30));
      })
      .catch((e) => {
        if (e.name !== 'AbortError') setFailed(true);
      });
    return () => ctrl.abort();
  }, []);

  const last = days[days.length - 1];
  const prev = days[days.length - 2];
  const change = (k: 'usd' | 'eur' | 'plf') => (last && prev ? (last[k] / prev[k] - 1) * 100 : null);
  const plfChange = change('plf');
  const usdPct = change('usd');
  const eurPct = change('eur');
  const waiting = failed ? 'Indisponível' : 'Carregando…';
  const movers = [
    { code: 'USD', label: 'Dólar', value: last ? brl(last.usd) : waiting, change: usdPct !== null ? pct(usdPct) : '—', positive: (usdPct ?? 0) >= 0 },
    { code: 'EUR', label: 'Euro', value: last ? brl(last.eur) : waiting, change: eurPct !== null ? pct(eurPct) : '—', positive: (eurPct ?? 0) >= 0 },
    { code: 'VE', label: 'Crédito de Carbono VE', value: last ? brl(last.usd * 12) : waiting, change: usdPct !== null ? pct(usdPct) : '—', positive: (usdPct ?? 0) >= 0 },
    ...staticMovers,
  ];

  const today = useMemo(
    () => new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Manaus' }).format(new Date()),
    [],
  );

  return (
    <main>
      <Ticker />

      {/*
        Entrada: díptico — o título na parede verde; à direita, o encontro das águas enorme, sangrando pelas bordas.
        Cabe na tela abaixo do cabeçalho e das cotações (106 px). No notebook o título é medido também pela altura, e a
        parede verde fica mais larga (7/5) para as três frases caberem numa linha cada.
      */}
      <section className="grid overflow-hidden bg-verde text-marinho [container-type:inline-size] lg:min-h-[calc(100svh-106px)] lg:grid-cols-2 notebook:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div className="flex flex-col justify-center py-16 pl-[var(--borda)] pr-[var(--margem)] lg:py-[clamp(32px,5.5svh,72px)] lg:pr-14">
          <p className="olho">Manaus, {today}</p>
          <h1 className="titulo mt-[clamp(16px,3svh,24px)] text-[clamp(44px,min(5.2vw,10.4svh),92px)]">
            <span className="block">Futuro sustentável</span>{' '}
            <span className="block">não é discurso.</span>{' '}
            <span className="block">É classe de ativo.</span>
          </h1>
          <p className="mt-[clamp(20px,4svh,32px)] max-w-[30ch] font-serif text-[clamp(18px,min(1.6vw,3.6svh),25px)] leading-snug">
            Mercado, notícias e índices da economia verde, a partir de Manaus.
          </p>
          <a href="#destaque" className="olho mt-[clamp(24px,5svh,40px)] inline-flex items-center gap-3 self-start border-b-2 border-marinho pb-1.5">
            Comece a visita <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="campo-marinho relative aspect-[4/5] bg-marinho sm:aspect-[5/4] lg:aspect-auto">
          <Encontro
            largura={800}
            altura={1000}
            x={-60}
            y={140}
            s={4.4}
            t={26}
            P={18}
            enquadrar="xMidYMax slice"
            className="absolute inset-0 block h-full w-full"
            rotulo="O encontro das águas: o Rio Negro e o Solimões se tocam e seguem como o Amazonas"
          />
          <figcaption className="absolute left-[var(--margem)] top-10 lg:left-12 lg:top-14">
            <WallLabel tone="escuro" title="Encontro das Águas" year="2026" lines={['Rio Negro · Solimões · Amazonas']} collection="Acervo BVM12" />
          </figcaption>
        </figure>
      </section>

      {/*
        Sala 01 · Em destaque. As salas não levam scroll-mt: o scroll-padding-top do html já desconta o cabeçalho.
        A obra sobe até o nome da sala (o lado direito do título ficava vazio) e tem teto pela altura da tela: no
        notebook, foto e faixa do número cabem inteiras; em tela alta, acompanham o texto e terminam com ele.
      */}
      <section id="destaque" className="bg-nevoa py-[var(--sala-y)]">
        <div className="contenedor">
          <div className="grid gap-x-14 gap-y-10 border-t border-marinho/25 pt-5 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <RoomHeader number="01" title="Em destaque" rule={false} />
              <article className="mt-[var(--sala-vao)]">
                <p className="olho text-ardosia">
                  {featured.section} · <time dateTime={featured.date}>{featured.dateLabel}</time>
                </p>
                <h3 className="manchete mt-5 text-[clamp(34px,min(3.9vw,7.4svh),58px)]">
                  <Link to={`/noticias/${featured.id}`} className="hover:underline hover:decoration-2 hover:underline-offset-[6px]">
                    {featured.title}
                  </Link>
                </h3>
                <p className="leitura mt-6 text-ardosia">{featured.summary}</p>
                {featured.aside && <p className="leitura mt-4 italic text-ardosia">{featured.aside}</p>}
                <Link to={`/noticias/${featured.id}`} className="olho mt-8 inline-flex items-center gap-3 border-b-2 border-marinho pb-1.5">
                  Ler a matéria <span aria-hidden="true">→</span>
                </Link>
              </article>
            </div>
            <div className="lg:col-span-6 lg:max-h-[calc(100svh_-_var(--topo)_-_3rem)]">
              <NewsArtwork
                image={featured.image}
                alt={featured.imageAlt}
                outline={featured.figure.outline}
                solid={featured.figure.solid}
                caption={featured.figure.caption}
                field={featured.field}
                stretch
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sala 02 · O índice */}
      {/*
        O número e as estatísticas ao lado do gráfico; as moedas numa faixa embaixo. Antes a tabela de moedas ficava na
        coluna do número, o gráfico esticava até a altura dela e passava da tela no notebook.
      */}
      <section id="indice" className="campo-marinho bg-marinho py-[var(--sala-y)] text-white">
        <div className="contenedor">
          <RoomHeader number="02" title="O índice" tone="escuro">
            <p className="olho text-white/60">{last ? `Referência de ${ddmm(last.date)}` : 'Referência diária'}</p>
          </RoomHeader>
          <div className="mt-[var(--sala-vao)] grid gap-x-16 gap-y-12 lg:grid-cols-12">
            {/* O número herói mede a própria coluna (cqw), não a janela: em tela larga ele não invade o gráfico. */}
            <div className="[container-type:inline-size] lg:col-span-6 xl:col-span-5">
              <p className="olho text-verde">Índice PLF · Palafita</p>
              <p className="titulo-largo mt-[clamp(12px,2.4svh,20px)] whitespace-nowrap text-[min(19cqw,132px,16svh)] tabular-nums">
                {last ? (
                  <>
                    <span className="contorno" style={{ WebkitTextStrokeColor: '#fff' }}>R$ </span>
                    {brl(last.plf).replace('R$ ', '')}
                  </>
                ) : (
                  waiting
                )}
              </p>
              {plfChange !== null && (
                <p className={`mt-4 font-mono text-[15px] ${plfChange < 0 ? 'text-queda' : 'text-verde'}`}>
                  {plfChange < 0 ? '▼' : '▲'} {pct(plfChange)} no dia
                </p>
              )}
              <dl className="mt-[clamp(24px,4.5svh,40px)] border-t border-white/15 font-mono text-[14px]">
                {marketStats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-white/15 py-3.5 notebook:py-3">
                    <dt className="text-white/65">{s.label}</dt>
                    <dd className="tabular-nums">
                      {s.value} {s.change && <span className="ml-1 text-verde">▲ {s.change}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            {/* O gráfico acompanha a altura da coluna do número (com piso), nunca a ultrapassa. */}
            <figure className="flex flex-col lg:col-span-6 xl:col-span-7">
              {days.length > 1 && (
                <p className="mb-3 text-right font-mono text-[12px] text-white/60">
                  máx. {brl(Math.max(...days.map((d) => d.plf)))} · mín. {brl(Math.min(...days.map((d) => d.plf)))}
                </p>
              )}
              <div className="relative h-[240px] lg:h-auto lg:min-h-[200px] lg:flex-1">
                <PalafitaChart days={days} />
              </div>
              {days.length > 1 && (
                <p className="mt-2 flex justify-between font-mono text-[12px] text-white/60">
                  <span>{ddmm(days[0].date)}</span>
                  <span>{ddmm(days[days.length - 1].date)}</span>
                </p>
              )}
              <figcaption className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.06em] text-white/55">
                Últimos 30 dias úteis · referência do BCE (Frankfurter)
              </figcaption>
            </figure>
            {/* As moedas e ativos verdes, numa faixa: um quadro por ativo, lado a lado no desktop. */}
            <ul aria-label="Moedas e ativos verdes" className="grid gap-x-8 font-mono text-[14px] sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
              {movers.map((m) => (
                <li key={m.code} className="border-t border-white/15 py-4">
                  <p className="flex items-baseline gap-3">
                    <span className="text-verde">{m.code}</span>
                    <span className="font-sans text-[15px] text-white/80">{m.label}</span>
                  </p>
                  <p className="mt-2 flex items-baseline justify-between gap-4 tabular-nums">
                    <span className="text-[19px]">{m.value}</span>
                    <span className={m.positive ? 'text-verde' : 'text-queda'}>{m.change}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sala 03 · Notícias */}
      <section id="noticias" className="bg-nevoa py-[var(--sala-y)]">
        <div className="contenedor">
          <RoomHeader number="03" title="Notícias">
            <div>
              <p className="max-w-[38ch] font-serif text-[18px] leading-snug text-ardosia">O que move a economia verde, nas matérias da redação.</p>
              <Link to="/noticias" className="olho mt-5 inline-flex items-center gap-3 border-b-2 border-marinho pb-1.5">
              Todas as notícias <span aria-hidden="true">→</span>
            </Link>
            </div>
          </RoomHeader>
          <div className="mt-[var(--sala-vao)] grid gap-x-10 gap-y-16 md:grid-cols-6">
            {news.map((item, i) => (
              <div key={item.id} className={i < 2 ? 'md:col-span-3' : 'md:col-span-3 lg:col-span-2'}>
                <NewsCard
                  item={item}
                  size={i < 2 ? 'grande' : 'pequena'}
                  ratio={i < 2 ? '16 / 9' : '4 / 3'}
                  bandClass={i < 2 ? 'min-h-[25cqw]' : 'md:min-h-[32cqw]'}
                />
              </div>
            ))}
          </div>
          <div className="mt-20 border-t border-marinho/25 pt-5">
            <p className="olho text-ardosia">Do arquivo</p>
            <ul className="mt-4 divide-y divide-marinho/15">
              {archive.map((a) => (
                <li key={a.to}>
                  <Link to={a.to} className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                    <span className="manchete text-[21px] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">{a.title}</span>
                    <span className="olho text-ardosia">{a.dateLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sala 04 · Para assistir */}
      <section className="campo-marinho fileira bg-marinho py-[var(--sala-y)] text-white">
        <div className="contenedor">
          <RoomHeader number="04" title="Para assistir" tone="escuro">
            <ScrollArrows target="projecao" label="Filmes e séries" />
          </RoomHeader>
          <p className="mt-[clamp(16px,3svh,24px)] max-w-[46ch] text-pretty font-serif text-[19px] leading-snug text-white/80">
            Filmes e séries sobre clima, floresta e o que fazemos com eles.
          </p>
          <Link to="/series-e-filmes" className="olho mt-5 inline-flex items-center gap-3 border-b-2 border-verde pb-1.5">
              Toda a programação <span aria-hidden="true">→</span>
            </Link>
        </div>
        <div id="projecao" className="fileira-trilho sem-barra mt-[var(--sala-vao)] flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2">
          {titulos.map((item) => (
            <Link key={item.id} to={`/series-e-filmes/${item.id}`} className="fileira-obra ficha group block shrink-0 snap-start">
              <figure>
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img src={item.image} alt={`Arte de divulgação de ${item.title}`} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-2 text-right font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/50">
                  Divulgação {item.platform}
                </figcaption>
              </figure>
              <p className="olho mt-3 text-verde">
                {item.platform} · {item.type}
              </p>
              <h3 className="mt-2 whitespace-nowrap text-[5.2cqw] font-bold leading-tight group-hover:underline group-hover:underline-offset-4">{item.title}</h3>
              <p className="ficha-serifa mt-2 font-serif text-[4.8cqw] leading-snug text-white/75">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sala 05 · Para cozinhar */}
      <section className="bg-verde py-[var(--sala-y)] text-marinho">
        <div className="contenedor">
          <RoomHeader number="05" title="Para cozinhar">
            <div>
              <p className="max-w-[36ch] font-serif text-[19px] leading-snug">
                Pratos de cozinhas que vivem da floresta em pé: Amazônia, Bacia do Congo e a milpa mexicana.
              </p>
              <Link to="/receitas" className="olho mt-5 inline-flex items-center gap-3 border-b-2 border-marinho pb-1.5">
              Todas as receitas <span aria-hidden="true">→</span>
            </Link>
            </div>
          </RoomHeader>
          <div className="mt-[var(--sala-vao)] grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {receitas.map((r) => (
              <Link key={r.id} to={`/receitas/${r.id}`} className="ficha group block">
                <div className="moldura">
                  <img src={r.image} alt={`${r.title}, prato da ${r.place}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
                <p className="olho mt-6">{r.place}</p>
                <h3 className="mt-2 whitespace-nowrap text-[23px] font-bold leading-tight group-hover:underline group-hover:underline-offset-4 lg:text-[7.6cqw]">
                  {r.title}
                </h3>
                <p className="ficha-serifa mt-2 font-serif text-[17px] leading-snug md:text-[4.6cqw] lg:text-[6.4cqw]">{r.description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.08em] text-marinho/70">Imagens: ilustrações BVM12</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
