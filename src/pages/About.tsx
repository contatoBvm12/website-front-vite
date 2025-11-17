import React from 'react';

const About: React.FC = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <section className="relative h-[420px] w-full">
        <img
          src="/bvm12.png"
          alt="Equipe da BVM12 em operação na Amazônia"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-end max-w-5xl mx-auto px-6 pb-12 text-white">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-emerald-200">Sobre a BVM12</p>
          <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl mt-3">
            Infraestrutura para transformar sustentabilidade em classe de ativo.
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mt-4">
            Plataforma amazônida que organiza o mercado de ativos verdes e conecta capital a impacto real.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10 leading-7">
        <article className="space-y-5 text-slate-700 text-base md:text-lg">
          <p>
            A BVM12 é uma plataforma de registro, negociação e custódia de ativos financeiros verdes que nasceu no
            coração da Amazônia com uma ambição clara: fazer da floresta em pé um dos principais motores de valor
            econômico do século XXI. Conectamos empresas, investidores e governos a projetos com impacto ambiental e
            social mensurável, usando tecnologia para transformar sustentabilidade em resultado concreto.
          </p>
          <p>
            Atuamos como um hub de soluções em finanças verdes: estruturamos ativos (créditos de carbono, green bonds,
            sustainability-linked, entre outros), cuidamos do registro e da rastreabilidade das operações e oferecemos
            infraestrutura tecnológica para que investidores possam acessar esse mercado com segurança, transparência e
            governança. Tudo isso apoiado em trilhas de auditoria robustas, integração com parceiros estratégicos e uso
            de blockchain para registro imutável das transações quando necessário.
          </p>
          <p>
            Nosso propósito é simples e ambicioso ao mesmo tempo: organizar o mercado de ativos verdes, democratizar o
            acesso ao capital sustentável e gerar desenvolvimento onde o impacto é mais necessário. Queremos que cada
            real investido em nossa plataforma esteja conectado a uma tese clara de impacto – seja na preservação de
            florestas, na transição energética, na mobilidade sustentável ou em projetos de inclusão produtiva.
          </p>
          <p>
            Trabalhamos lado a lado com empresas que desejam financiar sua jornada net zero, investidores que buscam
            portfólios alinhados a critérios ESG e instituições que precisam de soluções de governança e compliance em
            finanças sustentáveis. Construímos frameworks, metodologias e modelos de negócios que permitem escalar
            projetos de forma responsável, com métricas, indicadores e reporting alinhados às melhores práticas globais.
          </p>
          <p>
            A BVM12 é, ao mesmo tempo, infraestrutura de mercado e plataforma de impacto. Somos a ponte entre quem quer
            investir melhor e quem está, na ponta, mudando a realidade de territórios, cidades e comunidades. Porque,
            para nós, futuro sustentável não é discurso: é classe de ativo.
          </p>
        </article>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-6 shadow-sm">
            <p className="text-emerald-500 text-xs uppercase tracking-[0.35em]">Nosso papel</p>
            <h2 className="text-2xl font-semibold mt-3 text-slate-900">Infraestrutura de mercado verde</h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Estruturamos ativos, registramos operações e oferecemos custódia digital com total rastreabilidade para
              projetos ESG em todas as fases.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-6 shadow-sm">
            <p className="text-emerald-500 text-xs uppercase tracking-[0.35em]">Impacto</p>
            <h2 className="text-2xl font-semibold mt-3 text-slate-900">Capital conectando Amazônia e mundo</h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Viabilizamos investimentos em preservação florestal, energia limpa, bioeconomia e inclusão produtiva,
              sempre com métricas auditáveis e governança sólida.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
