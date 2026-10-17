import React from 'react';

const About: React.FC = () => (
  <main>
    <section className="campo-marinho bg-marinho text-white">
      <div className="contenedor py-20 md:py-28">
        <p className="olho text-verde">Sobre a BVM12</p>
        <h1 className="titulo mt-6 max-w-[17ch] text-[clamp(40px,5.6vw,88px)]">
          Infraestrutura para transformar sustentabilidade em classe de ativo.
        </h1>
        <p className="mt-8 max-w-[44ch] font-serif text-[clamp(20px,1.7vw,25px)] leading-snug text-white/80">
          Plataforma amazônida que organiza o mercado de ativos verdes e conecta capital a impacto real.
        </p>
      </div>
    </section>

    <img src="/fotos/folhas.jpg" alt="Folhagem verde-escura da floresta" className="h-[42svh] min-h-[260px] w-full object-cover" />

    <section className="bg-nevoa">
      <div className="contenedor py-20 md:py-24">
        <div className="leitura materia mx-auto max-w-[46rem] text-ardosia">
          <p>
            A BVM12 é uma plataforma de registro, negociação e custódia de ativos financeiros verdes que nasceu no coração da
            Amazônia com uma ambição clara: fazer da floresta em pé um dos principais motores de valor econômico do século
            XXI. Conectamos empresas, investidores e governos a projetos com impacto ambiental e social mensurável, usando
            tecnologia para transformar sustentabilidade em resultado concreto.
          </p>
          <p>
            Atuamos como um hub de soluções em finanças verdes: estruturamos ativos (créditos de carbono, green bonds,
            sustainability-linked, entre outros), cuidamos do registro e da rastreabilidade das operações e oferecemos
            infraestrutura tecnológica para que investidores possam acessar esse mercado com segurança, transparência e
            governança. Tudo isso apoiado em trilhas de auditoria robustas, integração com parceiros estratégicos e uso de
            blockchain para registro imutável das transações quando necessário.
          </p>
          <p>
            Nosso propósito é simples e ambicioso ao mesmo tempo: organizar o mercado de ativos verdes, democratizar o acesso
            ao capital sustentável e gerar desenvolvimento onde o impacto é mais necessário. Queremos que cada real investido
            em nossa plataforma esteja conectado a uma tese clara de impacto – seja na preservação de florestas, na transição
            energética, na mobilidade sustentável ou em projetos de inclusão produtiva.
          </p>
          <p>
            Trabalhamos lado a lado com empresas que desejam financiar sua jornada net zero, investidores que buscam
            portfólios alinhados a critérios ESG e instituições que precisam de soluções de governança e compliance em
            finanças sustentáveis. Construímos frameworks, metodologias e modelos de negócios que permitem escalar projetos de
            forma responsável, com métricas, indicadores e reporting alinhados às melhores práticas globais.
          </p>
          <p>
            A BVM12 é, ao mesmo tempo, infraestrutura de mercado e plataforma de impacto. Somos a ponte entre quem quer investir
            melhor e quem está, na ponta, mudando a realidade de territórios, cidades e comunidades.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-verde text-marinho">
      <div className="contenedor py-20 md:py-28">
        <blockquote className="titulo max-w-[17ch] text-[clamp(36px,5vw,78px)]">
          Porque, para nós, futuro sustentável não é discurso: é classe de ativo.
        </blockquote>
      </div>
    </section>

    <section className="bg-nevoa">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-2 md:py-24">
        <div className="border-t border-marinho/25 pt-5">
          <p className="olho text-ardosia">Nosso papel</p>
          <h2 className="titulo mt-4 text-[clamp(28px,2.6vw,38px)]">Infraestrutura de mercado verde</h2>
          <p className="mt-4 max-w-[44ch] font-serif text-[18px] leading-relaxed text-ardosia">
            Estruturamos ativos, registramos operações e oferecemos custódia digital com total rastreabilidade para projetos
            ESG em todas as fases.
          </p>
        </div>
        <div className="border-t border-marinho/25 pt-5">
          <p className="olho text-ardosia">Impacto</p>
          <h2 className="titulo mt-4 text-[clamp(28px,2.6vw,38px)]">Capital conectando Amazônia e mundo</h2>
          <p className="mt-4 max-w-[44ch] font-serif text-[18px] leading-relaxed text-ardosia">
            Viabilizamos investimentos em preservação florestal, energia limpa, bioeconomia e inclusão produtiva, sempre com
            métricas auditáveis e governança sólida.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default About;
