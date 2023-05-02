import React from "react";
import routeMain from "./routes";
import ContactImg from 'assets/img/rctangle_9.jpg'

import './styles.scss'

const Contacts = () => {
    return (
        <section className="contact-inner">
            <div className="contact-info">
                <a href="#" className="contact-info__phone">
                    +38 (999) 123 45 76
                </a>
                <p className="contact-info__name">
                    Петров <br />Иван
                </p>
                <a href="#" className="contact-info__mail">
                    mail@domain.com
                </a>
                <p className="contact-info__js">
                    JavaScript разработчик
                </p>
                <p className="contact-info__js">
                    ES5, ES6, React
                </p>
            </div>
            <div className="contact-photo">
                <img src={ContactImg} />
            </div>
        </section>
    )
}

export {routeMain};

export default Contacts;