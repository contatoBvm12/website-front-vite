import React from 'react';
import { Link } from 'react-router-dom';
import { Abertura, NumeroHeroi } from '../components/Sala';
import { titulos } from '../data/assistir';

/*
 * Sala de projeção. As obras penduradas uma a uma, em díptico que alterna de lado (a arte de divulgação de um lado;
 * do outro, o número da obra em contorno e cheio e a etiqueta de parede). Cada linha é uma obra só, então título e
 * texto não precisam empatar com vizinho.
 */

const doisDigitos = (n: number) => String(n).padStart(2, '0');

const Assistir: React.FC = () => (
  <main className="campo-marinho bg-marinho text-white">
    <Abertura
      campo="marinho"
      painel="verde"
      sala="Sala de projeção · Exposição permanente"
      titulo={
        <>
          <span className="block">Séries</span>{' '}
          <span className="block">e filmes</span>
        </>
      }
      lead="Filmes e séries sobre clima, floresta e o que fazemos com eles, com sinopse, ficha e por que ver."
      etiqueta={[`${titulos.length} obras`, 'Disney+ · Apple TV+ · Netflix · Prime Video', 'Seleção da redação']}
      numero={doisDigitos(titulos.length)}
      legendaNumero="Obras em cartaz"
    />

    <section className="py-[var(--sala-y)]">
      <div className="contenedor">
        <h2 className="olho text-white/70">Programação</h2>
        <ol className="mt-5">
          {titulos.map((t, i) => (
            <li key={t.id}>
              <Link
                to={`/series-e-filmes/${t.id}`}
                className="group grid items-center gap-x-14 gap-y-6 border-t border-white/20 py-[clamp(32px,6svh,64px)] lg:grid-cols-12"
              >
                <figure className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <div className="pendurada aspect-video overflow-hidden bg-white/5">
                    <img
                      src={t.image}
                      alt={`Arte de divulgação de ${t.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-2 text-right font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/50">
                    Divulgação {t.platform}
                  </figcaption>
                </figure>
                <div className="lg:col-span-5">
                  <NumeroHeroi contorno="0" cheio={String(i + 1)} cor="#4ADE80" className="block text-[clamp(44px,4.6vw,72px)] leading-none" />
                  <p className="olho mt-6 text-verde">
                    {t.platform} · {t.type}
                    {t.year ? ` · ${t.year}` : ''}
                  </p>
                  <h3 className="titulo mt-3 text-[clamp(28px,min(3vw,6.4svh),46px)] group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-8">
                    {t.title}
                  </h3>
                  <p className="mt-4 max-w-[44ch] font-serif text-[18px] leading-snug text-white/75">{t.description}</p>
                  <p className="olho mt-6">
                    Sinopse e ficha <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </main>
);

export default Assistir;
