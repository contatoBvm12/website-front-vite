import React from 'react';
import { CIMA, BAIXO, apoio } from './aguas';

/**
 * O encontro das águas da logo da BVM12: o Rio Negro (cima) e o Solimões (baixo) se tocam e seguem como o Amazonas.
 *
 * Num quadro `largura` × `altura`, a origem do quadrado de 200 do traçado cai em (`x`, `y`) com escala `s` — sempre
 * uniforme, a forma não se deforma. Traço, largura e passo das hastes seguem o símbolo (9, 6 e 22,75 × s) salvo
 * pedido; as hastes se apoiam no Solimões antes do encontro e no Amazonas depois, e descem até `base`. `de` é o x da
 * primeira haste (o canto da assinatura fica livre). Regras em deliverables/bvm12-marca/MARCA.md.
 */
export interface EncontroProps {
  largura: number;
  altura: number;
  x: number;
  y: number;
  s: number;
  t?: number;
  P?: number;
  passo?: number;
  base?: number;
  de?: number;
  ate?: number;
  cor?: string;
  corHastes?: string;
  fundo?: string;
  enquadrar?: string;
  className?: string;
  rotulo?: string;
}

const Encontro: React.FC<EncontroProps> = ({
  largura, altura, x, y, s, t = 9 * s, P = 6 * s, passo = 22.75 * s, base = altura, de = passo / 2, ate = largura + passo,
  cor = '#4ADE80', corHastes, fundo, enquadrar = 'xMidYMid slice', className, rotulo,
}) => {
  const hastes: React.ReactElement[] = [];
  for (let X = de; X < ate; X += passo) {
    const Y = y + apoio((X - x) / s) * s;
    if (base - Y > 0) hastes.push(<rect key={X} x={X - P / 2} y={Y} width={P} height={base - Y} />);
  }
  return (
    <svg
      viewBox={`0 0 ${largura} ${altura}`}
      preserveAspectRatio={enquadrar}
      className={className}
      role={rotulo ? 'img' : undefined}
      aria-label={rotulo}
      aria-hidden={rotulo ? undefined : true}
    >
      {fundo && <rect width={largura} height={altura} fill={fundo} />}
      <g fill={corHastes ?? cor}>{hastes}</g>
      <g
        transform={`translate(${x} ${y}) scale(${s})`}
        fill="none"
        stroke={cor}
        strokeWidth={t / s}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={CIMA} />
        <path d={BAIXO} />
      </g>
    </svg>
  );
};

/** O símbolo num quadro quadrado, sem o canto arredondado: a "tela" pendurada na parede da galeria. */
export const Tela: React.FC<{ className?: string; rotulo?: string; fundo?: string; cor?: string }> = ({
  className, rotulo, fundo = '#142B4D', cor = '#4ADE80',
}) => (
  <Encontro largura={200} altura={200} x={0} y={0} s={1} de={9} base={210} fundo={fundo} cor={cor} className={className} rotulo={rotulo} />
);

export default Encontro;
