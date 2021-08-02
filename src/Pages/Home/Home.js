import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Containers/Container";

const data = [
  {
    title: "Детский мир",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
    to: "detskiy-mir",
    color: "#ffce32",
  },
  {
    title: "Недвижимость",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
    to: "nevtijimost",
    color: "#3a77ff ",
  },
  {
    title: "Транспорт",
    img: "	https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
    to: "transport",
    color: "#23e5db",
  },
  {
    title: "Работа",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
    to: "rabota",
    color: "#ff5636",
  },
  {
    title: "Животные",
    img: "	https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
    to: "animal",
    color: "#fff6d9",
  },
  {
    title: "Дом и сад",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
    to: "dom",
    color: "#ceddff ",
  },
  {
    title: "Электроника",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
    to: "elektronica",
    color: "#c8f8f6  ",
  },
  {
    title: "Бизнес и услуги",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
    to: "biznes",
    color: "#ffd6c9  ",
  },
  {
    title: "Мода и стиль",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
    to: "moda",
    color: "#ffce32",
  },
  {
    title: "Хобби и спорт",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
    to: "sport",
    color: "#ceddff",
  },
  {
    title: "Отдам даром",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
    to: "otdam",
    color: "#c8f8f6",
  },
  {
    title: "Обмен",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
    to: "obmen",
    color: "#ffd6c9 ",
  },
];

const links = [
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/y6m3ukec3t5r1-UZ/image;s=644x461",
    title: "Detiski kravat My Baby",
    price: "700 000",
    location: "Ташкент, Алмазарский район",
    link: "http://localhost:3000/detskiy-mir",
    subtitle: "Детский мир",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/a1hhkn7kaboi3-UZ/image;s=644x461",
    title: "Ёшленинчида кичик евро ховли сотилади",
    price: "85 000 y.e.",
    location: "Ташкент, Шайхантахурский  район",
    link: "http://localhost:3000/nevtijimost",
    subtitle: "Недвижимость",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/kpdfjwtzc3hj2-UZ/image;s=644x461",
    title: "Chevrolet Gentra - 3 pozitsia 2019 LT",
    price: "13 000 y.e",
    location: "Ташкент, Шайхантахурский",
    link: "http://localhost:3000/transport",
    subtitle: "Транспорт",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQKrrxTZdCk8f1ldPSDhaesa-J018QgsviwGhhf6ELrrRvEejJimY6HBxKD2AWkDsF9w&usqp=CAU",
    title: "Предлагаем услуги Маляров",
    price: "от 1 000 000 сумдо 3 000 000 сум",
    location: "Бухара",
    link: "http://localhost:3000/rabota",
    subtitle: "Работа",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/qlooeqiuqvjc2-UZ/image;s=644x461",
    title: "Скоттиш страйт. Девочка",
    price: "500 000 сум",
    location: "Ташкент, Алмазарский район",
    link: "http://localhost:3000/animal",
    subtitle: "Животные",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/8z2bksl6797u-UZ/image;s=644x461",
    title: "Шикарный диван + пуф!",
    price: "3 800 000 сум ",
    location: "Ташкент, Юнусабадский район",
    link: "http://localhost:3000/dom",
    subtitle: "Дом и сад",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/6kgoofx8uhcq-UZ/image;s=644x461",
    title: "Срочно продаю Samsung A80 8GB OZU 128gb память",
    price: "350 y.e ",
    location: "Самарканд",
    link: "http://localhost:3000/elektronica",
    subtitle: "Электроника",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/39zyrnacuhpu2-UZ/image;s=644x461",
    title: "Бухгалтерский услуги (аутсорсинг )",
    price: "1 000 y.e",
    location: "Ташкент, Алмазарский район",
    link: "http://localhost:3000/biznes",
    subtitle: "Бизнес и услуги",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/ypriyouvmm6d3-UZ/image;s=644x461",
    title: "BN 25 привезли из Европы размеры от 39 до 47.",
    price: "810 000 сум",
    location: "Ташкент, Яккасарайский  район",
    link: "http://localhost:3000/moda",
    subtitle: "Мода и стиль",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/ff8tswcpebu92-UZ/image;s=644x461",
    title: "Комплект тренажёров, штанг и гантелей для зала 120 - 160 кв.м.",
    price: "68 930 000 сум",
    location: "Ташкент, Сергелийский   район",
    link: "http://localhost:3000/sport",
    subtitle: "Хобби и спорт",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/k385twtwbmcl3-UZ/image;s=644x461",
    title: "Отдам в добрые ручки/ мехрибон кулларга топшираман",
    price: "Отдам даром",
    location: "Ташкент, Юнусабадский    район",
    link: "http://localhost:3000/otdam",
    subtitle: "Отдам даром",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/7j7101uurlrv3-UZ/image;s=644x461",
    title: "spark obmen 2012",
    price: "Обмен",
    location: "Бекабад",
    link: "http://localhost:3000/obmen",
    subtitle: "Обмен",
  },
];

const Home = () => {
  return (
    <Container>
      <div className="container py-5">
        <h1 className="text-center">Главные категории</h1>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center flex-wrap text-center my-5">
            {data.map((v) => (
              <div className="col-lg-2">
                <Link to={v.to} className="category me-4 text-center">
                  <div className="circle ">
                    <img
                      className="w-75"
                      style={{ backgroundColor: v.color }}
                      src={v.img}
                      alt="rasm"
                    />
                  </div>
                  <p className="text-dark subtitle">{v.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-center">Премиум объявления</h1>
          <div className="container pt-5">
            <div className="row">
              {links.map((v) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                  <a className="text-dark w-100 h-100 fw-normal" href={v.link}>
                    <div className="shadow rounded p-2 product h-100">
                      <img
                        className="w-100 mb-3 rounded"
                        src={v.img}
                        alt="rasm"
                      />
                      <p className="fw-bold text-danger">{v.subtitle}</p>
                      <p className="fw-bold">{v.title}</p>
                      <span>{v.price}</span>
                      <br />
                      <span>{v.location}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="btnn">
                <a className="text-dark" href="https://www.olx.uz/">
                  Посмотреть все
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bizness mt-5 text-white">
        <div className="d-flex justify-content-center">
          <div className="container d-flex justify-content-center align-items-center">
            <img
              className="me-5"
              src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg"
              alt="rasm"
            />
            <h5 className="me-5 mb-0">Начните бизнес в интернете с OLX!</h5>
            <button className="ms-5 mb-0 p-2 biznes__btn">
              <span>Подробнее</span>
            </button>
          </div>
        </div>
      </div>
      <div className="olx text-center">
        <img
          className="mb-5"
          src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg"
          alt=""
        />
        <p className="">
          Cервис объявлений № 1 в Узбекистане Частные объявления Узбекистана на
          OLX (бывший torg.uz) - здесь вы найдете то, что искали. Нажав на
          кнопку "Подать объявление", вы сможете разместить онлайн-объявление на
          любую необходимую тематику - поиск работы, услуги, продажа
          автомобилей, недвижимости, электроники и многое другое. С помощью
          сервиса OLX в Узбекистане вы можете найти, продать или купить
          практически все, что угодно. Воспользовавшись функцией поиска, вы без
          труда найдете уже опубликованные объявления интересующей вас тематики.
          OLX в Узбекистане - ваш надежный и незаменимый помощник.
        </p>
      </div>
      <div className="container my-5">
        <img
          className="my-3"
          src="https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg"
          alt="rasm"
        />
        <p>
          <b>Разделы на сервисе OLX: </b>
          Детский мир, Недвижимость, Транспорт, Работа, Животные, Дом и сад,
          Электроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт,
          Отдам даром, Обмен
        </p>
      </div>
    </Container>
  );
};

export default Home;
