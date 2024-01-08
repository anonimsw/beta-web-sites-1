import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import pharm from '../assets/menu-beck.png'
import '../components/HeaderHome/HeaderHome.scss'
import men from '../assets/men.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Men = () => {

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
                        НАШ ПРОДУКТ <span>BIO MORAL FOR MEN</span>
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
                            <span>Панты марала.</span> Поистине уникальная ЭКО - продукция. Химический состав панты марала очень сложный который состоит из: 53% белков, 34% минералов, 3% липидов и 10% воды, В них содержится 13 факторов роста, 21 аминокислота, 20 гликозаминогликанов и огромное количество минералов и микроэлементов.
                            <br />
                            <span>Экстракт травы якорцев стелющихся (трибулус).</span> У мужчин восстанавливает и улучшает сексуальное либидо, удлиняет время эрекции. Стимулирует сперматогинез, увеличивая количество сперматозоидов и их подвижность. Оказывает общетонизирующее действие и стимулирует функции половой системы.
                            <br />
                            <span>Коэнзим Q-10.</span> Q-10 играет двойную роль в механизме производства энергии клетки с одной стороны, способствует увеличению производства энергии, а с другой - помогает нейтрализовать свободные радикалы, высвобождаемые в процессе производства. Q10 улучшает фертильность у мужчин, улучшая подвижность спермотозоидов.
                            <br />
                            <span>Рибофлавин (Вит В 2).</span> Водорастворимый витамин, принимает участие в энергетическом метаболизме: окисление углеводов, жирных кислот, пирувата, разветвленных аминокислот, инактивируют и окисляют токсичные ольдегиды, участвуют в биосинтезе глутатиона и желчных кислот.
                            <br />
                            <span>L- карнитин.</span> Основной механизм работы L- карнитин путем окисления - окисления используя жировые запасы в качестве источника энергии. Содержание карнитина в семенной жидкости напрямую связано с количеством и подвижностью сперматозоидов, это позволяет предложить , что L- карнитин полезен при лечении мужского бесплодия.
                            <br />
                            <span>L- Аргинин.</span> Служит необходимым предшественником для синтеза белков и многих биологически важных молекул, таких как орнитин, пролин, полиамины, крестин и агматин. Однако главная роль аргинина в организме человека - быть субстратом для синтеза оксида азота (NO) Оксид азота(NO)- кроме релаксации кровеносных сосудов разных органов играет важную роль в синтезе и секреции гормонов репродукции цикла.
                            <br />
                            <span>Цинк.</span> В основном содержится в эритроцитах и сперматозоидах в виде цинк-металлопротеазы, карбоанидразы и в меньшей степени в плазме крови в связанном состоянии с а-2- макроглобулином. Цинк, связанный с липопротеинами, содержится в мембранах сперматозоидов, выполняя мембранстабилизирующую функцию.
                            <br />
                            <span>а-Токоферол (Витамин E).</span> Оказывает антиоксидантное действие, участвует в биосинтезе гемма и белков, пролиферации клеток, тканевом дыхании, других важнейших процессах тканевого метаболизма, предупреждает гемолиз эритроцитов, препятствует повышенной проницаемости и ломкости капилляров; стимулирует синтез белков и коллагена.
                            <br />
                            <span>Цианокобаламин (Вит В12).</span> Важен для хорошего функционирования мужской половой системы. Участвует в формировании сперматозоидов эритроцитов, синтезе гемоглобина и защите организма от разных вирусов. Помогает работе печени, сосудов и нервной системы.
                        </p>
                    </div>
                    <img src={men} alt="" className='poster' />
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
                            - Бесплодие (мужское бесплодие, обусловленное нарушениями сперматогенеза - олигоспермией, тератозооспермией, импотенции и нарушениях сексуальной активности);
                            <br />
                            - Эректильная дисфункция;
                            <br />
                            - Хронический простотит;
                            <br />
                            - Астения, депрессия и синдром хронической усталости;
                            <br />
                        </p>
                        <br />
                        <p data-aos="fade-down">
                            <span>
                                Противопоказания!!!
                            </span>
                            <br />
                            - Острая почечная и печеночная недостаточность;
                            <br />
                            - Злокачественные опухоли;
                            <br />
                            - Индивидуальная повышенная чувствительность к компонентам;
                            <br />
                            - Дети и подростки до 16 лет;
                            <br />
                        </p>
                        <br />
                        <p data-aos="fade-down">
                            <span>
                                Способ применения и дозы
                            </span>
                            <br />
                            Взрослым по схеме применять по 1 капсуле 2 раза в день в первой половине дня (капсула №1 утром, капсула №2 в обед), до еды или во время еды в течении 3 месяцев. Для повторного курса рекомендуется проконсультироваться с врачом. При применении Bio maral for MEN не употреблять алкоголь.
                        </p>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Men