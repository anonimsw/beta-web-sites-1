import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import pharm from '../assets/menu-beck.png'
import ladies from '../assets/ladies.png'
import '../components/HeaderHome/HeaderHome.scss'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Ladies = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <Nav />
            <div className="header--products--menu">
                <div className="menu--back" >
                    <img src={pharm} alt="" />
                    <h2 data-aos="fade-down">
                        НАШ ПРОДУКТ <span>BIO MORAL FOR LADIES</span>
                    </h2>
                    <p></p>
                </div>
                <div className="container block--poster">
                    <div className="menu--block--1">
                        <h2 className='block--title' data-aos="fade-right">
                            01
                            <small>
                                Фармококинетика
                            </small>
                        </h2>
                        <p data-aos="fade-down">
                            <span>Bio maral for Ladies.</span> Призвана помочь женскому организму повысить способность к зачатию и вынашиванию плода. Оказывает нормализирующее действие на клеточный метаболизм яичников, способствует образованию и созреванию фолликулов и восстановлению нейрогуморальных механизмов регуляции менструальной функций. Рекомендуется использовать для ускорения восстановления функции яичников при различных формах их нарушения, в т.ч. при негативных проявлениях климакса у женщин. Биодоступность препарата- 90% Панты марал стимулирует биосинтез эстрогенов путем повышения экспрессии дегидрогеназы 3- гидроксистероид в клетках Тека и повышает внутриклеточный уровень эстрогена. Не вызывает изменений гормонального баланса в крови, не влияет на гипоталамо - гипофизарную систему. Повышает качество и количество яицеклетки.
                            <br />
                            <span>Экстракт Черного Кохоша.</span> Является самым популярным в мире заменителем гормонотерапии, рекомендуемой женщинам после прекращения менструального цикла. Содержит фитоэстрогены, которые действуют аналогично гормонам эстрогена.
                            <br />
                            <span>Коэнзим Q-10.</span> Q-10 играет двойную роль в механизме производства энергии клетки с одной стороны, способствует увеличению производства энергии, а с другой - помогает нейтрализовать свободные радикалы, высвобождаемые в процессе производства. Q-10 улучшает фертильность у женщин.
                            <br />
                            <span>Рибофлавин (Вит В 2).</span> Водорастворимый витамин, принимает участие в энергетическом метаболизме: окисление углеводов, жирных кислот, пирувата, разветвленных аминокислот, инактивируют и окисляют токсичные альдегиды, участвуют в биосинтезе глутатиона и желчных кислот.
                            <br />
                            <span>L- карнитин.</span> Основной механизм работы L- карнитин путем окисления В- окисления используя жировые запасы в качестве источника энергии.
                            <br />
                            <span>L- Аргинин.</span> Cлужит необходимым предшественником для синтеза белков и многих биологически важных молекул таких как орнитин пролин, полиамины, креатин и агматин. Однако главная роль аргинина в организме человека - быть субстратом для синтеза оксида азота (NO). Оксид азота(NO)- кроме релаксации кровеносных сосудов разных органов играет важную роль в синтезе и секреции гормонов репродукции цикла. Блогодоря синергетическому действию компонентов повышается приток крови и клетонная перфузия в матке, эндометрии и яичниках женщины, происходит нормальное созревание яйцеклетки, эндометрий правильно развивается и подготавливается к оптимальной имплантации оплодотворенной яйцеклетки.
                            <br />
                            <span>Цианокобаламин.</span> (Вит В12) важен для хорошего функционирования женской половой системы. Участвует в формировании и синтезе гемоглобина и защите организма от розных вирусов, Помогает работе печени, сосудов и нервной системы.Препарат содержит терапевтические концентрации Убихинон Q-10, L- карнитина, L- Аргинин, Рибофлавин, Цианокобаламин.
                        </p>
                    </div>
                    <img src={ladies} alt="" className='poster' />
                </div>
                <div className="menu--block--2">
                    <div className="container">
                        <h2 className='block--title' data-aos="fade-right">
                            02
                            <small>
                                Показания по применению
                            </small>
                        </h2>
                        <p data-aos="fade-down">
                            - Планирование беременности;
                            <br />
                            - Женское бесплодие, вторичное, психологическое, идиопатическое (неясного происхождения) бесплодие, относительное или временное бесплодие;
                            <br />
                            - Нарушение овуляции;
                            <br />
                            - Снижение либидо;
                            <br />
                            - ДМК (олигоменорея, дисменорея вызвана стрессами);
                            <br />
                            - Климактерические норушения;
                            <br />
                            - Депрессия и синдром хронической усталости:
                            <br />
                            Спортсменкам рекомендуется для придания общей силы организму:
                            <br />
                        </p>
                        <br />
                        <p data-aos="fade-down">
                            <span>
                                Противопоказания!!!
                            </span>
                            <br />
                            - Острая почечная и печеночная недостаточность:
                            <br />
                            - Опухоли женских половых органов:
                            <br />
                            - Индивидуальная повышенная чувствительность ккомпонентам;
                            <br />
                            - Детям до 16 лет:
                            <br />
                        </p>
                        <br />
                        <p data-aos="fade-down">
                            <span>
                                Способ применения и дозы
                            </span>
                            <br />
                            Взрослым принимать по 1 капсуле 1-2 раза в день желательно в первой половине дня, во время еды от 1 до 3 месяцев. Для повторного курсо рекомендуется проконсультироваться с врачом.
                        </p>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Ladies