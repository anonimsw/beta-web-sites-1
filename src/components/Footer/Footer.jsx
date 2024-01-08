import React from 'react'
import '../Footer/Footer.scss'
import { HashLink } from 'react-router-hash-link'


const Footer = () => {
    return (
        <footer>
            <div className="container footer--top" id='contacts' >
                <ul data-aos="fade-down">
                    <span>
                        О компании
                    </span>
                    <p>
                        За годы существования компания <br />
                        ORCHIDEE PHARM зарекомендовала <br />
                        себя как надежного и ответственного  <br />
                        производителя.
                    </p>
                </ul>
                <ul data-aos="fade-down">
                    <span>
                        Полезные ссылки
                    </span>
                    <HashLink smooth to='/#companiy'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            width="512px"
                            height="512px"
                            viewBox="0 0 284.935 284.936"
                            xmlSpace="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133   c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677   c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854   c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z"
                                        data-original="#000000"
                                        className="active-path"
                                        data-old_color="#000000"
                                        fill="#ffffff" />
                                </g>
                            </g>
                        </svg>
                        О компании
                    </HashLink>
                    <HashLink smooth to='/#products'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            width="512px"
                            height="512px"
                            viewBox="0 0 284.935 284.936"
                            xmlSpace="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133   c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677   c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854   c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z"
                                        data-original="#000000"
                                        className="active-path"
                                        data-old_color="#000000"
                                        fill="#ffffff" />
                                </g>
                            </g>
                        </svg>
                        Продукция
                    </HashLink>
                    <HashLink smooth to='/#news'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            width="512px"
                            height="512px"
                            viewBox="0 0 284.935 284.936"
                            xmlSpace="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133   c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677   c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854   c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z"
                                        data-original="#000000"
                                        className="active-path"
                                        data-old_color="#000000"
                                        fill="#ffffff" />
                                </g>
                            </g>
                        </svg>
                        Новости
                    </HashLink>
                </ul>
                <ul data-aos="fade-down">
                    <span>
                        Контактные данные
                    </span>
                    <p>
                        Ташкент, Талимаржон улица 14.
                    </p>
                    <a href='tel:+998977260528'>
                        +998 97 726 05 28
                    </a>
                    <p>

                        Пн. - Сб.: 9:00 до 19:00
                    </p>
                </ul>
            </div>
            <div className="border"></div>
            <div className="container footer--bottom">
                <p>
                    ORCHIDEE PHARM © 2024 Все права защищены
                </p>
            </div>
        </footer>
    )
}

export default Footer