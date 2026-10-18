import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NumeroHeroi, Proxima } from '../components/Sala';
import { receitaPorId, receitas } from '../data/receitas';
import NotFound from './NotFound';

/*
 * A receita. Abre em díptico (o nome no verde; o prato emoldurado, pendurado na parede marinho), segue com a ficha em
 * números grandes, os ingredientes como lista de catálogo ao lado do preparo em passos numerados em contorno e cheio,
 * a história do prato e, na parede marinho, por que ele é comida da floresta em pé.
 */

const doisDigitos = (n: number) => String(n).padStart(2, '0');

const Receita: React.FC = () => {
  const { id } = useParams();
  const r = receitaPorId(id);
  if (!r) return <NotFound />;
  const proxima = receitas[(receitas.indexOf(r) + 1) % receitas.length];
  const totalIngredientes = r.ingredientes.reduce((n, g) => n + g.itens.length, 0);
  const ficha = [
    r.rende && { rotulo: 'Rende', valor: r.rende },
    r.tempo && { rotulo: 'Tempo total', valor: r.tempo },
    totalIngredientes > 0 && { rotulo: 'Ingredientes', valor: String(totalIngredientes) },
  ].filter(Boolean) as Array<{ rotulo: string; valor: string }>;

  return (
    <main className="bg-nevoa text-marinho">
      <article>
        <header className="grid overflow-hidden lg:min-h-[calc(100svh-var(--topo))] lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-verde py-14 pl-[var(--borda)] pr-[var(--margem)] lg:py-[clamp(32px,6svh,72px)] lg:pr-14">
            <Link to="/receitas" className="olho self-start opacity-80 hover:opacity-100">
              ← Receitas sustentáveis
            </Link>
            <p className="olho mt-[clamp(28px,6svh,56px)]">
              Obra {doisDigitos(receitas.indexOf(r) + 1)} · {r.place}
            </p>
            <h1 className="titulo mt-4 text-[clamp(52px,min(7vw,13svh),120px)]">{r.title}</h1>
            <p className="mt-6 max-w-[34ch] text-pretty font-serif text-[clamp(19px,min(1.7vw,3.6svh),25px)] leading-snug">{r.dek}</p>
          </div>
          <div className="campo-marinho flex items-center justify-center bg-marinho px-[var(--margem)] py-14 lg:px-[clamp(32px,5vw,80px)]">
            <figure className="w-full max-w-[40rem]">
              <div className="moldura pendurada">
                <img src={r.image} alt={`${r.title}, prato da ${r.place}`} className="aspect-[4/3] w-full object-cover" />
              </div>
              <figcaption className="mt-3 text-right font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/60">Ilustração BVM12</figcaption>
            </figure>
          </div>
        </header>

        {ficha.length > 0 && (
          <section className="contenedor grid gap-y-8 border-b border-marinho/20 py-[clamp(32px,7svh,64px)] sm:grid-cols-3">
            {ficha.map((f) => (
              <div key={f.rotulo} className="sm:border-l sm:border-marinho/20 sm:pl-8 first:sm:border-l-0 first:sm:pl-0">
                <p className="olho text-ardosia">{f.rotulo}</p>
                <p className="titulo-largo mt-3 text-[clamp(34px,3.6vw,56px)] leading-none">{f.valor}</p>
              </div>
            ))}
          </section>
        )}

        <section className="contenedor grid gap-x-14 gap-y-14 py-[var(--sala-y)] lg:grid-cols-12">
          {/* Ingredientes: a lista fica parada ao lado do preparo no desktop. */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--topo)+2rem)]">
              <h2 className="titulo text-[clamp(28px,2.6vw,38px)]">Ingredientes</h2>
              {r.ingredientes.map((g, gi) => (
                <div key={g.grupo ?? gi} className="mt-6">
                  {g.grupo && <p className="olho text-ardosia">{g.grupo}</p>}
                  <ul className="mt-3 divide-y divide-marinho/15 border-y border-marinho/15">
                    {g.itens.map((item) => (
                      <li key={item} className="py-2.5 text-[16px] leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {r.dica && (
                <div className="mt-8 bg-white p-5">
                  <p className="olho">Dica</p>
                  <p className="mt-2 font-serif text-[16px] leading-snug text-ardosia">{r.dica}</p>
                </div>
              )}
            </div>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="titulo text-[clamp(28px,2.6vw,38px)]">Modo de preparo</h2>
            <ol className="mt-6">
              {r.preparo.map((passo, i) => (
                <li key={passo.slice(0, 24)} className="grid grid-cols-[4.5rem_1fr] gap-x-6 border-t border-marinho/20 py-6 md:grid-cols-[6rem_1fr]">
                  <NumeroHeroi contorno="0" cheio={String(i + 1)} cor="#142B4D" className="text-[clamp(40px,4vw,60px)] leading-none" />
                  <p className="font-serif text-[clamp(18px,1.3vw,20px)] leading-[1.6] text-ardosia">{passo}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {r.historia.length > 0 && (
          <section className="border-t border-marinho/20">
            <div className="contenedor grid gap-x-14 gap-y-8 py-[var(--sala-y)] lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="olho text-ardosia">A história</p>
                <h2 className="titulo mt-3 text-[clamp(32px,3.4vw,52px)]">De onde vem</h2>
              </div>
              <div className="corpo lg:col-span-7 lg:col-start-6 [&>*]:mx-0">
                {r.historia.map((p, i) => (
                  <p key={p.slice(0, 24)} className={i === 0 ? 'capitular' : ''}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {r.sustentavel.length > 0 && (
          <section className="campo-marinho bg-marinho text-white">
            <div className="contenedor grid gap-x-14 gap-y-10 py-[var(--sala-y)] lg:grid-cols-12">
              <h2 className="titulo text-[clamp(36px,min(4.4vw,9svh),68px)] lg:col-span-5">
                <span className="block">Por que é</span>{' '}
                <span className="block text-verde">sustentável</span>
              </h2>
              <ol className="lg:col-span-7">
                {r.sustentavel.map((s, i) => (
                  <li key={s.slice(0, 24)} className="grid grid-cols-[3.5rem_1fr] gap-x-5 border-t border-white/20 py-5">
                    <span className="font-mono text-[13px] text-verde">{doisDigitos(i + 1)}</span>
                    <p className="font-serif text-[clamp(18px,1.4vw,21px)] leading-[1.55] text-white/85">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}
      </article>

      <Proxima to={`/receitas/${proxima.id}`} rotulo="Próxima receita" titulo={proxima.title} detalhe={proxima.place} campo="verde" />
    </main>
  );
};

export default Receita;
