import React from 'react';
import { Link } from 'react-router-dom';

const heroImage = '/gomoov-99food.png';

const GoMoovArticle: React.FC = () => {
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
          <span className="text-gray-500">out 2025 • 6 min de leitura</span>
        </div>

        <header className="bg-white rounded-3xl shadow-sm p-6 md:p-10 space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-secondary">Mobilidade sustentável</div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            GoMoov e 99Food levam bicicletas elétricas para entregadores em Goiânia
          </h1>
          <p className="text-gray-600 text-lg">
            Parceria disponibiliza 150 e-bikes com 50% de desconto no aluguel para parceiros da 99Food, reduzindo custos,
            ampliando produtividade e oferecendo mais qualidade de vida aos entregadores.
          </p>
          <p className="text-sm text-gray-500">Por Redação BVM12 • Goiânia (GO), outubro de 2025</p>
        </header>

        <figure className="overflow-hidden rounded-3xl shadow">
          <img src={heroImage} alt="Entrega com bicicleta elétrica nas ruas de Goiânia" className="w-full h-[420px] object-cover" />
          <figcaption className="bg-gray-900 text-gray-200 text-xs sm:text-sm px-4 py-3">
            Entregadores parceiros recorrem às bicicletas elétricas da GoMoov para ampliar a renda com menor custo operacional.
          </figcaption>
        </figure>

        <article className="bg-white rounded-3xl shadow-sm p-6 md:p-10">
          <div className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              A GoMoov, empresa brasileira de mobilidade urbana focada em e-bikes, fechou parceria com a 99Food para
              disponibilizar 150 bicicletas elétricas para entregadores em Goiânia, com 50% de desconto no aluguel para
              parceiros da plataforma. O projeto piloto terá duração inicial de 180 dias e funciona como base para expansão para
              outras regiões.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Por que as e-bikes importam</h2>
              <p>
                As bicicletas elétricas da GoMoov reduzem custos em relação às motos e eliminam a necessidade de carteira de
                habilitação, sem abrir mão do conforto. Entre os benefícios destacados:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Autonomia de até 60 km com manutenção programada e suporte operacional.</li>
                <li>Menos esforço físico em comparação com bikes tradicionais, permitindo mais entregas por dia.</li>
                <li>Planejamento financeiro previsível, já que não há gasto com combustível ou manutenção de motor.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Infraestrutura pensada para o entregador</h2>
              <p>
                A operação conta com hubs de apoio na capital goiana, onde os profissionais podem trocar baterias, realizar
                ajustes rápidos e receber suporte técnico. A GoMoov trata mobilidade como infraestrutura produtiva, conectando
                telemetria, manutenção e logística.
              </p>
              <p>
                Para a 99Food, o movimento reforça a estratégia de apoiar parceiros com soluções financeiramente acessíveis e
                sustentáveis, criando novos incentivos para fidelização e segurança operacional.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Próximos passos</h2>
              <p>
                Após os 180 dias do piloto em Goiânia, as empresas avaliarão indicadores de produtividade, satisfação e impacto
                ambiental para definir a expansão para novas cidades. A meta é transformar o modelo em referência para o setor
                de delivery verde no país.
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-primary uppercase tracking-wide text-xs mb-2">Sobre a GoMoov</h3>
                <p className="text-sm text-gray-600">
                  Empresa brasileira dedicada à locação e gestão de e-bikes com operação full-stack, unindo telemetria,
                  manutenção preventiva e hubs de apoio para garantir segurança, disponibilidade e previsibilidade de custos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary uppercase tracking-wide text-xs mb-2">Sobre a 99</h3>
                <p className="text-sm text-gray-600">
                  Companhia de tecnologia que conecta pessoas a serviços de mobilidade, pagamentos e entregas, incluindo a
                  vertical de delivery 99Food presente em todo o Brasil.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default GoMoovArticle;
