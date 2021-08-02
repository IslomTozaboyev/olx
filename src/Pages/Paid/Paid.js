import "./Paid.css";
import React, { Component } from "react";
import Header from "../../Containers/Header";
import Footer from "../../Containers/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    img: "https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/no-ads.svg",
    title: "Поднятие",
  },
  {
    img: "https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/vas-promotion-on-the-top.svg",
    title: "Размещение в ТОП",
  },
  {
    img: "https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/house.svg",
    title: "VIP-объявление",
  },
];

const box = [
  {
    title: "Легкий старт",
    subtitle: "4x больше просмотров",
    icon: faCheck,
    text: "Топ-объявление на 3 ",
    text2: "Поднятие в верх списка ",
    text3: "VIP-объявление",
  },
  {
    title: "Быстрая продажа",
    subtitle: "16x больше просмотров",
    icon: faCheck,
    text: "Топ-объявление на 7 дней",
    text2: "3 поднятия в верх списка",
    text3: "VIP-объявление",
  },
  {
    title: "Турбо продажа",
    subtitle: "30x больше просмотров",
    icon: faCheck,
    text: "Топ-объявление на 30 дней",
    text2: "9 поднятий в верх списка",
    text3: "VIP-объявление на 7 дней",
  },
];

export default class Paid extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="hero">
          <div className="hero__inner">
            <h1 className="hero__title mb-4">
              Почему стоит рекламировать объявления на OLX?
            </h1>
          </div>
        </section>
        <div className="back">
          <div className="container">
            <h1 className="text-center mb-5">Вам доступны такие услуги:</h1>
            <div className="row justify-content-center align-items-center">
              {data.map((value) => (
                <div className="col-lg-4">
                  <div className="bg-white text-center p-5 my-5 ">
                    <img src={value.img} alt="" />
                    <p className="mt-4 fs-4 fw-bold">{value.title}</p>
                  </div>
                </div>
              ))}
              <p className="text-center">
                (размещение на главной странице) Вы можете заказать каждую
                услугу отдельно или выбрать подходящий набор из нескольких
                услуг!
              </p>
              <div className="text-center my-5">
                <h1>Наборы платных услуг</h1>
                <p>
                  Теперь вам не нужно задумываться, какая услуга сработает лучше
                  для вашего объявления. Нужно только решить, насколько заметным
                  вы хотите его сделать и как быстро желаете заключить сделку!
                </p>
              </div>
              {box.map((value, index) => {
                return (
                  <div className="col-lg-4 ">
                    <div className="bg-white p-5 my-5 ">
                      <div className="text-center">
                        <h1>{value.title}</h1>
                        <p className="text-primary">{value.subtitle}</p>
                      </div>
                      <div className="mt-4 ms-4">
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={value.icon} />
                          <p className="ms-3 mb-0">{value.text}</p>
                        </div>
                        <div className="d-flex align-items-center my-3">
                          <FontAwesomeIcon icon={value.icon} />
                          <p className="ms-3 mb-0">{value.text2}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={value.icon} />
                          <p className="ms-3 mb-0">{value.text3}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="my-5">
              <h4 className="text-center">
                Узнайте как работают платные услуги
              </h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="bg-white p-5 my-5">
                    <h1>Поднятие</h1>
                    <p>
                      По умолчанию объявления на OLX отображаются по дате их
                      размещения. Это означает, что по мере публикации новых
                      объявлений ваше объявление опускается всё ниже и ниже в
                      списке и в результатах поиска.
                    </p>
                    <p>
                      С помощью услуги Поднятие ваше объявление снова поднимется
                      на верхние позиции в списке, как если бы вы разместили его
                      мгновение назад! Вы можете воспользоваться услугой
                      Поднятие самостоятельно либо заказав пакеты "Турбо
                      продажа" или "Быстрая продажа" - в этом случае мы будем
                      поднимать ваше объявление автоматически, и вам не нужно
                      будет беспокоиться о его позиции в списке!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5 my-5">
                    <img
                      className="w-100"
                      src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web/static/css/actions/landingbundles/redesign/ilu-refresh.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
