import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h1 className="about__title">
                    О нас
                </h1>
                <h2 className="about__subtitle">
                    Кто мы?
                </h2>
                <p className="about__desc">
                    Привет! Мы - DEEPMAG.kg, интернет-магазин книг. Наш магазин появился в 2022 году и с тех пор продал большое клочисество книг. ;) <br/>
                    На наших полках книги всех значимых издательств: «Эксмо», «АСТ», «Манн, Иванов и Фербер», «Азбука», «Альпина», «Синдбад» и другие. <br/>
                    А среди издательских брендов, которые представлены в book24.ru есть: «БОМБОРА», «Corpus», «Mainstream», «Редакция Елены Шубиной», «Вилли-Винки», «Fanzon», «Комильфо» и «Канц-Эксмо». И мы постоянно пополняем эти списки.
                </p>

                <h2 className="about__subtitle">
                    Что мы делаем?
                </h2>

                <p className="about__desc">
                    Мы не просто продаём книги.Мы DEEPMAG.kg создаем для вас комфорт, легкий выбор самого лучшего! <br/>
                    Мы рассказываем о книгах в нашем блоге, нам дают рекомендации знаменитости, а наши подборки составляют профессиональные редакторы.
                </p>

                <h2 className="about__subtitle">
                    Что отличает нас от других?
                </h2>

                <ol className="about__list">
                    <li className="about__desc">Новинки.DEEPMAG.kg - первый интернет-магазин в Кыргызстане, где появляются свежие книжные хиты.</li>
                    <li className="about__desc">Доставка. Мы доставляем по всему Кыргызстану.</li>
                    <li className="about__desc">Упаковка. Наши книги всегда доходят в отличном состоянии, в надежной упаковке.</li>
                    <li className="about__desc">Кэшбэк. Для постоянных покупателей DEEPMAG.kg - самое выгодное место в мире.</li>
                </ol>

                <h2 className="about__subtitle">
                    Кто делает DEEPMAG.kg?
                </h2>

                <p className="about__desc">
                    Искандарова Таунсулуу и Карабаева Гулмайрам
                </p>
            </div>
        </div>
    );
};

export default About;