import React from 'react';
import Article from '../components/Article';

const GoMoovArticle: React.FC = () => (
  <Article
    section="Mobilidade sustentável"
    title="GoMoov e 99Food levam bicicletas elétricas para entregadores em Goiânia"
    dek="Parceria disponibiliza 150 e-bikes com 50% de desconto no aluguel para parceiros da 99Food, reduzindo custos, ampliando produtividade e oferecendo mais qualidade de vida aos entregadores."
    byline="Por Redação BVM12"
    date="Goiânia (GO), out 2025"
    readTime="6 min de leitura"
    image="/fotos/gomoov-99food.jpg"
    imageAlt="Entrega com bicicleta elétrica nas ruas de Goiânia"
    caption="Entregadores parceiros recorrem às bicicletas elétricas da GoMoov para ampliar a renda com menor custo operacional."
  >
    <p>
      A GoMoov, empresa brasileira de mobilidade urbana focada em e-bikes, fechou parceria com a 99Food para disponibilizar
      150 bicicletas elétricas para entregadores em Goiânia, com 50% de desconto no aluguel para parceiros da plataforma. O
      projeto piloto terá duração inicial de 180 dias e funciona como base para expansão para outras regiões.
    </p>

    <h2>Por que as e-bikes importam</h2>
    <p>
      As bicicletas elétricas da GoMoov reduzem custos em relação às motos e eliminam a necessidade de carteira de
      habilitação, sem abrir mão do conforto. Entre os benefícios destacados:
    </p>
    <ul>
      <li>Autonomia de até 60 km com manutenção programada e suporte operacional.</li>
      <li>Menos esforço físico em comparação com bikes tradicionais, permitindo mais entregas por dia.</li>
      <li>Planejamento financeiro previsível, já que não há gasto com combustível ou manutenção de motor.</li>
    </ul>

    <h2>Infraestrutura pensada para o entregador</h2>
    <p>
      A operação conta com hubs de apoio na capital goiana, onde os profissionais podem trocar baterias, realizar ajustes
      rápidos e receber suporte técnico. A GoMoov trata mobilidade como infraestrutura produtiva, conectando telemetria,
      manutenção e logística.
    </p>
    <p>
      Para a 99Food, o movimento reforça a estratégia de apoiar parceiros com soluções financeiramente acessíveis e
      sustentáveis, criando novos incentivos para fidelização e segurança operacional.
    </p>

    <h2>Próximos passos</h2>
    <p>
      Após os 180 dias do piloto em Goiânia, as empresas avaliarão indicadores de produtividade, satisfação e impacto
      ambiental para definir a expansão para novas cidades. A meta é transformar o modelo em referência para o setor de
      delivery verde no país.
    </p>

    <div className="!mt-14 grid gap-10 border-t border-marinho/20 pt-8 font-sans md:grid-cols-2">
      <div>
        <p className="olho text-marinho">Sobre a GoMoov</p>
        <p className="mt-3 font-serif text-[16.5px] leading-relaxed">
          Empresa brasileira dedicada à locação e gestão de e-bikes com operação full-stack, unindo telemetria, manutenção
          preventiva e hubs de apoio para garantir segurança, disponibilidade e previsibilidade de custos.
        </p>
      </div>
      <div>
        <p className="olho text-marinho">Sobre a 99</p>
        <p className="mt-3 font-serif text-[16.5px] leading-relaxed">
          Companhia de tecnologia que conecta pessoas a serviços de mobilidade, pagamentos e entregas, incluindo a vertical
          de delivery 99Food presente em todo o Brasil.
        </p>
      </div>
    </div>
  </Article>
);

export default GoMoovArticle;
