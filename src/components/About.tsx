export default function About() {
  const contents = [
    "Подробный справочник видов дичи: повадки, ареал, сезонные особенности поведения животных.",
    "Практическое руководство по выбору оружия, снаряжения, экипировки — от классических ружей до современных гаджетов для охотника.",
    "Юридические аспекты охоты: полный обзор законодательства, правила получения разрешений.",
    "Техника безопасности — важные правила, которые спасут жизнь и здоровье.",
    "Традиционные и современные методы.",
    "Раздел с рецептами приготовления дичи — как правильно обработать добычу и приготовить из неё вкусные блюда.",
  ];

  const audience = [
    "Новичков, которые хотят разобраться в основах охоты без ошибок.",
    "Любителей, которые хотят получить новые знания и методы для повышения мастерства.",
    "Профессионалов, которым важны детали процесса охоты.",
    "Егерей и инструкторов, ищущих надёжный источник информации для обучения подопечных.",
    "Биологов, которые хотят больше узнать о повадках и местах обитания животных.",
  ];

  return (
    <section id="about" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Заголовок и вводный текст */}
        <div className="mb-16">
          <p className="uppercase text-xs tracking-[0.3em] text-neutral-400 mb-4">О нас</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            Опыт, знания<br />и традиции
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed mb-4">
            Энциклопедия для охотников — это не просто книга, а опыт, знания и традиции. Она станет надёжным спутником как для новичков, только делающих первые шаги в дикой природе, так и для опытных охотников, желающих узнать новое о любимом деле.
          </p>
          <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Наша миссия — сохранить и передать богатый опыт, рассказать больше о культуре охоты, поделиться проверенными советами и актуальными знаниями. Мы верим, что охота — это не только добыча трофея, но и уважение к природе. Наша книга поможет постичь дикую природу в полной мере.
          </p>
        </div>

        {/* Что внутри */}
        <div className="mb-16">
          <p className="uppercase text-xs tracking-[0.3em] text-neutral-400 mb-6">В нашей энциклопедии вы найдёте</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contents.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white border border-neutral-100">
                <span className="text-neutral-300 font-bold text-lg leading-tight">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-neutral-700 leading-snug">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-neutral-500 italic">
            В книге также представлен иллюстрированный атлас с фотографиями, схемами, картами — для поиска нужной информации.
          </p>
        </div>

        {/* Почему мы */}
        <div className="mb-16 bg-neutral-900 text-white p-8 md:p-12">
          <p className="uppercase text-xs tracking-[0.3em] text-neutral-400 mb-4">Почему именно мы</p>
          <p className="text-xl md:text-2xl leading-relaxed">
            Наша команда состоит из опытных охотников, биологов, юристов, профессиональных писателей и редакторов. Специалисты знают повадки животных, специализируются на охотничьем законодательстве, умеют объяснить даже сложные вещи простым языком.
          </p>
        </div>

        {/* Для кого */}
        <div className="mb-16">
          <p className="uppercase text-xs tracking-[0.3em] text-neutral-400 mb-6">Эта книга подойдёт для</p>
          <div className="flex flex-col gap-3">
            {audience.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-neutral-200 last:border-0">
                <span className="text-neutral-300 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-10 border-t border-neutral-200">
          <p className="text-xl md:text-2xl text-neutral-700 mb-6 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу ценителей охотничьего дела! Наша энциклопедия — верный компаньон в каждом походе, источник мудрости и вдохновения.
          </p>
          <button className="bg-black text-white px-10 py-3 uppercase text-sm tracking-wide hover:bg-neutral-800 transition-colors duration-300">
            Ждём вас среди наших читателей
          </button>
        </div>

      </div>
    </section>
  );
}
