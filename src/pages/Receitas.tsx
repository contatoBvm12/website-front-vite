import React from 'react';
import { Link } from 'react-router-dom';
import { Abertura, NumeroHeroi } from '../components/Sala';
import { receitas } from '../data/receitas';

/*
 * A cozinha. Na parede verde, o itinerário (as quatro origens numa linha, como o mapa da exposição) e as receitas
 * emolduradas duas a duas, cada uma com a etiqueta: origem, nome, o texto do cartão e a ficha (rende, tempo). O texto
 * segue a largura do cartão (ficha), então os dois de cada fileira ocupam o mesmo número de linhas.
 */

const doisDigitos = (n: number) => String(n).padStart(2, '0');

const Receitas: React.FC = () => (
  <main className="bg-verde text-marinho">
    <Abertura
      campo="verde"
      painel="marinho"
      sala="Cozinha · Exposição permanente"
      titulo={
        <>
          <span className="block">Receitas</span>{' '}
          <span className="block">sustentáveis</span>
        </>
      }
      lead="Pratos de cozinhas que vivem da floresta em pé, com a receita inteira para fazer em casa."
      etiqueta={[`${receitas.length} receitas`, receitas.map((r) => r.place).join(' · '), 'Seleção da redação']}
      numero={doisDigitos(receitas.length)}
      legendaNumero="Receitas na mesa"
    />

    <section className="py-[var(--sala-y)]">
      <div className="contenedor">
        {/* O itinerário: de onde vem cada prato, na ordem das obras. */}
        <h2 className="olho">Itinerário</h2>
        <ol className="mt-5 grid border-t border-marinho/30 sm:grid-cols-2 lg:grid-cols-4">
          {receitas.map((r, i) => (
            <li key={r.id} className="flex items-baseline gap-3 border-b border-marinho/20 py-4 lg:border-b-0 lg:pr-6">
              <span className="font-mono text-[12px]">{doisDigitos(i + 1)}</span>
              <span className="text-[17px] font-semibold">{r.place}</span>
            </li>
          ))}
        </ol>

        <div className="mt-[var(--sala-y)] grid gap-x-14 gap-y-20 md:grid-cols-2">
          {receitas.map((r, i) => (
            <Link key={r.id} to={`/receitas/${r.id}`} className="ficha group block">
              <div className="moldura pendurada transition-transform duration-500 group-hover:-translate-y-1">
                <img src={r.image} alt={`${r.title}, prato da ${r.place}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="mt-7 flex items-start justify-between gap-6">
                <div>
                  <p className="olho">
                    Obra {doisDigitos(i + 1)} · {r.place}
                  </p>
                  <h3 className="titulo mt-3 whitespace-nowrap text-[7cqw] group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-8">
                    {r.title}
                  </h3>
                </div>
                <NumeroHeroi contorno="0" cheio={String(i + 1)} cor="#142B4D" className="text-[9cqw] leading-none" />
              </div>
              <p className="ficha-serifa mt-4 font-serif text-[17px] leading-snug md:text-[3.5cqw]">{r.description}</p>
              {(r.rende || r.tempo) && (
                <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.08em]">{[r.rende && `Rende ${r.rende}`, r.tempo].filter(Boolean).join(' · ')}</p>
              )}
              <p className="olho mt-5 inline-flex items-center gap-3 border-b-2 border-marinho pb-1.5">
                Ver a receita <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Receitas;
