import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Corpo, FORTE, NumeroHeroi, Proxima } from '../components/Sala';
import { noticiaPorId, todas } from '../data/news';
import NotFound from './NotFound';

/*
 * A matéria. Abre em díptico (a manchete na névoa; a fotoilustração sangrando até a borda), segue com o número da
 * notícia ocupando a parede inteira, o corpo em coluna de jornal e, no fim, a etiqueta das fontes: a redação escreve,
 * e diz de onde vêm os fatos.
 */

/** O número na parede: tão grande quanto a largura permite, pelos caracteres (cqw do contenedor). */
const tamanhoParede = (texto: string) => Math.min(24, 92 / (0.74 * texto.length));

const Materia: React.FC = () => {
  const { id } = useParams();
  const n = noticiaPorId(id);
  if (!n) return <NotFound />;
  const proxima = todas[(todas.indexOf(n) + 1) % todas.length];
  const numero = (n.figure.outline ?? '') + n.figure.solid;

  return (
    <main className="bg-nevoa">
      <article>
        <header className="grid overflow-hidden lg:min-h-[calc(100svh-var(--topo))] lg:grid-cols-2">
          <div className="flex flex-col justify-center py-14 pl-[var(--borda)] pr-[var(--margem)] lg:py-[clamp(32px,6svh,72px)] lg:pr-14">
            <Link to="/noticias" className="olho self-start text-ardosia hover:text-marinho">
              ← Notícias
            </Link>
            <p className="olho mt-[clamp(28px,6svh,56px)] flex items-center gap-3 text-ardosia">
              <span className="inline-block h-2.5 w-2.5 bg-verde ring-1 ring-marinho/20" aria-hidden="true" />
              {n.section} · <time dateTime={n.date}>{n.dateLabel}</time>
            </p>
            <h1 className="manchete mt-5 text-[clamp(36px,min(4.2vw,8.2svh),66px)]">{n.title}</h1>
            {n.dek && <p className="mt-6 text-pretty font-serif text-[clamp(19px,min(1.6vw,3.5svh),24px)] italic leading-snug text-ardosia">{n.dek}</p>}
            <p className="olho mt-8 border-t border-marinho/20 pt-4 text-ardosia">
              Redação BVM12{n.minutos ? ` · ${n.minutos} min de leitura` : ''}
            </p>
          </div>
          <figure className="relative aspect-[4/3] bg-marinho lg:aspect-auto">
            <img src={n.image} alt={n.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 right-0 bg-marinho px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/80">
              Ilustração BVM12
            </figcaption>
          </figure>
        </header>

        {/* O número da notícia, em contorno e cheio, na parede inteira. */}
        <section className={n.field === 'marinho' ? 'campo-marinho bg-marinho text-white' : 'bg-verde text-marinho'}>
          <div className="contenedor py-[clamp(40px,9svh,96px)] [container-type:inline-size]">
            <NumeroHeroi
              contorno={n.figure.outline}
              cheio={n.figure.solid}
              cor={FORTE[n.field]}
              className="block leading-[0.9]"
              style={{ fontSize: `${tamanhoParede(numero)}cqw` }}
            />
            <p className="mt-6 max-w-[56ch] font-mono text-[13px] uppercase leading-relaxed tracking-[0.08em] opacity-80">{n.figure.caption}</p>
          </div>
        </section>

        <div className="py-[var(--sala-y)]">
          <div className="contenedor">
            {n.corpo ? <Corpo blocos={n.corpo} /> : <p className="leitura mx-auto max-w-[40rem] text-ardosia">{n.summary}</p>}

            {/* A etiqueta das fontes, como a de um museu: de onde vêm os fatos. */}
            <aside className="mx-auto mt-16 max-w-[40rem] bg-white p-6 text-marinho">
              <p className="olho">Fontes</p>
              <p className="mt-3 font-serif text-[16px] leading-snug text-ardosia">
                Matéria da Redação BVM12, com informações de:
              </p>
              <ul className="mt-3 space-y-1.5 font-mono text-[12px] uppercase tracking-[0.08em]">
                {n.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="sublinhado">
                      {s.name}
                      <span aria-hidden="true">{' '}↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-ardosia/80">
                Imagem: fotoilustração conceitual da BVM12, não é foto do fato.
              </p>
            </aside>
          </div>
        </div>
      </article>

      <Proxima to={`/noticias/${proxima.id}`} rotulo="Próxima matéria" titulo={proxima.title} detalhe={`${proxima.section} · ${proxima.dateLabel}`} campo="marinho" />
    </main>
  );
};

export default Materia;
