import React from 'react';
import { Link } from 'react-router-dom';

const Cop30Article: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex items-center justify-between text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span aria-hidden="true">←</span> Voltar para notícias
          </Link>
          <span className="text-gray-500">10 nov 2025 • 12 min de leitura</span>
        </div>

        <header className="bg-white rounded-3xl shadow-sm p-6 md:p-10 space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-secondary">Especial COP30</div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            COP30 transforma Belém em vitrine da Amazônia – entre promessas verdes e cobranças por coerência
          </h1>
          <p className="text-gray-600 text-lg">
            Belém vive o maior estresse de logística, diplomacia e reputação da sua história recente ao sediar a
            conferência do clima da ONU, enquanto o Brasil tenta consolidar a imagem de potência ambiental em meio a
            críticas sobre petróleo, participação indígena e custo da cidade.
          </p>
          <p className="text-sm text-gray-500">Por Redação BVM12 • Atualizado às 08h12</p>
        </header>

        <figure className="overflow-hidden rounded-3xl shadow">
          <img
            src="/cop30.png"
            alt="Manifestação indígena em frente ao pavilhão da COP30 Brasil Amazônia"
            className="w-full h-[420px] object-cover"
          />
          <figcaption className="bg-gray-900 text-gray-200 text-xs sm:text-sm px-4 py-3">
            Delegações indígenas e autoridades se encontram em frente ao pavilhão Brasil Amazônia durante a COP30, em
            Belém (PA).
          </figcaption>
        </figure>

        <article className="bg-white rounded-3xl shadow-sm p-6 md:p-10">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              A realização da COP30, entre 10 e 21 de novembro de 2025, fez de Belém o epicentro da agenda climática
              global. Chefes de Estado, lideranças empresariais, organizações da sociedade civil e povos indígenas
              convergem para a capital paraense em busca de acordos, recursos e respostas sobre o futuro climático do
              planeta – e sobre o papel real do Brasil nessa transição.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Amazônia no centro do tabuleiro</h2>
              <p>
                Desde o início da conferência, a narrativa brasileira é clara: colocar a Amazônia no centro da agenda
                global, não apenas como “pulmão do mundo”, mas como plataforma estratégica de desenvolvimento, inovação e
                negócios. Sob essa lógica, o governo federal apresentou iniciativas que se tornaram vitrines da COP30:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Declaração de Belém</span> – documento político que impulsiona uma agenda
                  de industrialização verde, combinando bioeconomia, energias renováveis e novas cadeias produtivas ligadas
                  à floresta em pé.
                </li>
                <li>
                  <span className="font-semibold">Plataformas de financiamento climático</span> – em parceria com organismos
                  multilaterais, o Brasil patrocina plataformas nacionais de clima e um hub de conhecimento entre países do
                  Sul Global para coordenar investimentos e assistência técnica.
                </li>
                <li>
                  <span className="font-semibold">Integração amazônica</span> – países da região fortalecem a cooperação
                  dentro da OTCA com sistemas conjuntos de monitoramento de florestas e combate ao desmatamento.
                </li>
              </ul>
              <p>
                Na prática, a mensagem é direta: a Amazônia deixa de ser apenas pauta ambiental e passa a ser tratada como
                ativo econômico, político e geoestratégico.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Decisões e anúncios que marcaram a conferência</h2>
              <p>
                Ao longo dos dias, a COP30 acumulou anúncios relevantes que reposicionam algumas frentes da política
                climática:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Saúde e clima</span> – planos específicos para a Amazônia conectam
                  política de saúde pública com adaptação climática, reforçando a visão de que o aquecimento global também
                  é um tema de qualidade de vida.
                </li>
                <li>
                  <span className="font-semibold">Informação climática</span> – declaração inédita sobre integridade da
                  informação climática garante compromisso com transparência em dados, ciência independente e combate à
                  desinformação.
                </li>
                <li>
                  <span className="font-semibold">Energia e combustíveis alternativos</span> – iniciativas como o Future
                  Fuels Action Plan estabelecem metas ambiciosas para multiplicar o uso de combustíveis limpos e reposicionar
                  setores como aviação e transporte marítimo.
                </li>
              </ul>
              <p>
                Esses movimentos sinalizam o esforço de alinhar política climática com competitividade econômica, inovação
                tecnológica e estabilidade regulatória – pontos-chave para atrair investimentos de longo prazo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Pressão nas ruas: povos indígenas e sociedade civil</h2>
              <p>
                Fora das salas climatizadas, o clima é de tensão. Povos indígenas e movimentos socioambientais organizaram
                marchas, protestos e tentativas de ocupar espaços de decisão. As críticas se concentram em três eixos:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Participação limitada</span> – lideranças indígenas afirmam que, mesmo com
                  o discurso de “COP da Amazônia”, o acesso aos espaços centrais de negociação segue restrito.
                </li>
                <li>
                  <span className="font-semibold">Petróleo na Margem Equatorial</span> – o avanço de licenças para exploração
                  em áreas sensíveis virou símbolo de contradição entre discurso climático e prática.
                </li>
                <li>
                  <span className="font-semibold">Risco de greenwashing</span> – obras aceleradas e anúncios grandiosos
                  levantam o temor de que tudo se resuma a marketing verde, sem mudanças estruturais.
                </li>
              </ul>
              <p>
                Em alguns momentos, os protestos geraram tensão com as forças de segurança e escancararam o conflito entre a
                narrativa oficial de liderança climática e a percepção, por parte dos movimentos sociais, de que o modelo de
                desenvolvimento ainda está ancorado em velhos paradigmas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Belém sob holofotes</h2>
              <p>
                A escolha de Belém como sede da COP30 colocou a cidade sob escrutínio internacional e levantou debates sobre
                legado:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Infraestrutura e hospedagem</span> – preços altos de hotéis e pressão
                  sobre serviços urbanos colocaram em xeque a capacidade da cidade. Como resposta, governo e prefeitura
                  montaram um mutirão de infraestrutura com navios de cruzeiro e leitos temporários.
                </li>
                <li>
                  <span className="font-semibold">Obras aceleradas</span> – parques, vias e áreas turísticas passam por
                  reformas emergenciais, gerando dúvidas sobre o benefício real para a população após a conferência.
                </li>
                <li>
                  <span className="font-semibold">Narrativa de legado verde</span> – autoridades prometem transformar Belém
                  em referência de cidade amazônica sustentável, enquanto a sociedade civil cobra resultados concretos.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">O teste de liderança climática do Brasil</h2>
              <p>
                Em termos estratégicos, a COP30 é um divisor de águas para a projeção internacional do Brasil. O país se
                apresenta como articulador entre mundo desenvolvido e Sul Global, mas precisa provar que o discurso se
                sustenta em entregas concretas:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Redução consistente do desmatamento.</li>
                <li>Planejamento claro de transição energética com menor dependência de combustíveis fósseis.</li>
                <li>
                  Fortalecimento da governança climática interna, com participação efetiva de estados, municípios, setor
                  privado e povos tradicionais.
                </li>
                <li>
                  Modelos econômico-financeiros que conectem clima, inclusão social e competitividade dos negócios.
                </li>
              </ul>
              <p>
                Em resumo, a COP30 em Belém é mais do que um evento: é um stress test da coerência brasileira entre discurso
                e execução. O mundo observa se o país conseguirá transformar o capital político e simbólico da Amazônia em
                políticas públicas, negócios sustentáveis e melhor qualidade de vida para quem vive na floresta – e não apenas
                em novos slogans.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Cop30Article;
