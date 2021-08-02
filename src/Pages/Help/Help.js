import "./Help.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Containers/Header";
import Footer from "../../Containers/Footer";

const data = [
  {
    icon: "https://theme.zdassets.com/theme_assets/759275/ae08be12c050c14d3ab87c97d87a756050aaa2fd.svg",
    title: "Мой профиль / Mening profilim",
    subtitle: "Регистрация профиля, Настройки профиля, Технические неполадки",
  },
  {
    icon: "https://theme.zdassets.com/theme_assets/759275/914abb187f25c83408b2244f0f7881310e4d8ddf.svg",
    title: "Правовая информация и Приватность / Huquqiy ma'lumotlar ",
    subtitle: "Пользовательское соглашение, Политика конфиденциальности",
  },
  {
    icon: "	https://theme.zdassets.com/theme_assets/759275/8506f59d65e03570348a69d9699a2f1d9d85a1cd.svg",
    title: "Безопасность! / Xavfsizlik! ",
    subtitle:
      "Общая информация о безопасности, Советы по сохранению безопасности",
  },
  {
    icon: "	https://theme.zdassets.com/theme_assets/759275/d569b409b713ad719cb7af5707afcdab1652f431.svg",
    title: "Правила OLX / OLX qoidalari",
    subtitle: "Правила публикации объявлений, Блоки и Удаления ",
  },
  {
    icon: "https://theme.zdassets.com/theme_assets/759275/cbe0baa8d1597c56adf3aba6bd1983e6282fcffe.svg",
    title:
      "Лимиты и Пакеты объявлений / E'lon joylashtirish to'plamlari va limitlar ",
    subtitle:
      "Лимиты в категориях, Покупка дополнительных пакетов для размещения",
  },
  {
    icon: "	https://theme.zdassets.com/theme_assets/759275/b5e219fdd55d7f96929fbd3551fe5193d25f5261.svg",
    title: "Управление объявлениями / E'lonlarni boshqarish",
    subtitle: "Действия с объявлением и Размещение объявлений",
  },
  {
    icon: "https://theme.zdassets.com/theme_assets/759275/909c4b813312e401b8a2be4c4a2f42ee7aadb707.svg",
    title: "Платные услуги / Pullik xizmatlar",
    subtitle: "Виды услуг продвижения, Порядок оплаты",
  },
  {
    icon: "	https://theme.zdassets.com/theme_assets/759275/6833ffcf710bdbb83320956b0b248e70268f75db.svg",
    title: "Возможности для бизнеса / Biznes imkoniyatlari ",
    subtitle: "Банерная реклама на OLX.uz и Сотрудничество ",
  },
  {
    icon: "https://theme.zdassets.com/theme_assets/759275/7284077d1e3c4e26a74072a0cf72d1e9ba00f62b.svg",
    title: "О нас / Biz haqimizda",
    subtitle: "О компании и ее миссии",
  },
];

const Help = () => {
  return (
    <div>
      <Header />
      <section className="hero ">
        <div className="hero__inner">
          <h1 className="hero__title mb-4">Чем можем вам помочь?</h1>
          <h2 className="visitibly__hidden">poisk</h2>
          <div className="text-center">
            <form className="position-relative bg-white p-4 w-100" action="">
              <FontAwesomeIcon className="mb-0" icon={faSearch} />
              <input
                className="w-75 border-0 p-0 ms-4"
                type="text"
                placeholder="Поиск в Центре поддержки клиентов"
              />
            </form>
          </div>
        </div>
      </section>
      <div className="bg__blue py-5">
        <div className="container help_bg d-flex justify-content-between align-items-center  mb-3">
          <p className="mb-0">
            Будьте бдительны! Избегайте этих схем обмана! / Ehtiyot bo'ling!
            Ushbu aldov sxemalaridan qoching!
          </p>
          <p className="mb-0">Узнать больше / Batafsil ma‘lumot</p>
        </div>
        <div className="container help_bg2 d-flex justify-content-between align-items-center mb-5">
          <p className="mb-0">
            Будьте бдительны! Избегайте этих схем обмана! / Ehtiyot bo'ling!
            Ushbu aldov sxemalaridan qoching!
          </p>
          <p className="mb-0">Узнать больше / Batafsil ma‘lumot</p>
        </div>
        <div className="container">
          <div className="row justify-content-center ">
            {data.map((value, index) => {
              return (
                <div className="col-lg-4 mb-5">
                  <div className="d-flex bg-white align-items-center content__box">
                    <div className="me-5 img__bg">
                      <img src={value.icon} alt="rasm" />
                    </div>
                    <div className="p-3">
                      <h5 className="fw-bold">{value.title}</h5>
                      <p className="text-secondary">{value.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
