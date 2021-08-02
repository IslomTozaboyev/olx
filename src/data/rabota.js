const data = [
  {
    img: "data:image/jpeg;base64,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",
    title: "Требуется бухгалтер от 27-35 лет",
    price: "от 3 000 000 сумдо 5 000 000 сум",
    location: "Ташкент, Яккасарайский район ",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Поиск сотрудника",
    price: "от 2 000 000 сумдо 3 000 000 сум",
    location: "Ташкент, Юнусабадский  район ",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Требуется на работу девушка со знанием компьютера в фотостудию",
    price: "от 1 500 000 сумдо 15 000 000 000 сум ",
    location: "Самарканд",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Работа системным администратором",
    price: "от 1 200 000 сумдо 4 000 000 сум  ",
    location: "Ташкент, Шайхантахурский район",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rRDTidUt9iRgFKI8RsGtK1-s8cTd_zQQVA&usqp=CAU",
    title: "СРОЧНО!!! Требуется девушка на работу в офисе MOBI.UZ.",
    price: "до 1 500 000 сум",
    location: "Самарканд",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQKrrxTZdCk8f1ldPSDhaesa-J018QgsviwGhhf6ELrrRvEejJimY6HBxKD2AWkDsF9w&usqp=CAU",
    title: "Работа для сантехников. Требуются сантехники. Сантехника..",
    price: "от 3 500 000 сумдо 5 000 000 сум ",
    location: "Ташкент, Мирзо-Улугбекский райо",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyg5iePywpelqN09fNwtSZUdpAVdPui6erKeTD-IgHpA3ZszkjY_Byyy_xa9gfx5GQ0U&usqp=CAU",
    title: "Предлагаем услуги Маляров",
    price: "от 1 000 000 сумдо 3 000 000 сум",
    location: "Бухара",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXZcmd94qJAmWkAD8HNUZzUCFiOGJUOcPqYx7ljB0axGVUiT5oRkq3_lgGh8ePE34hjw&usqp=CAU",
    title: "Требуются профессиональные сварщики-сборщики в цех ковки",
    price: "от 4 000 000 сумдо 8 000 000 сум  ",
    location: "Ташкент, Сергелийский район",
  },
];

export default data;