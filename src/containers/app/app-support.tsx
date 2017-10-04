
// преобразование объекта в json строку
let products = [
    {
        id: 'fc-cr-001',                     // индивидуальный номер (авто)
        brand: 'Brand Fabric',      // фабрика
        name: 'Cream Name',         // название
        category: 'Уход за лицом',  // face care
        type: 'cream',              // крем
        gender: 'female',           // женский
        discription: 'Описание',
        price: 349,
        currency: 'RU'              // валюта
    },
    {
        id: 'fc-cr-002',                     // индивидуальный номер (авто)
        brand: 'Brand Fabric 2',      // фабрика
        name: 'Cream Name 2',         // название
        category: 'Уход за лицом',  // face care
        type: 'cream',              // крем
        gender: 'female',           // женский
        discription: 'Описание 2',
        price: 349,
        currency: 'RU'              // валюта
    }
];

let WORKS_DATA = [
    {
      id: 1,
      title: 'Title work 1',
      discription: 'Some text about work 1',
      category: 'Разарботка', // develop Разарботка 
      imgSrc: require('../../data/images/portfolio/work-1.jpg'),
      alt: 'work-1'
    },
    {
      id: 2,
      title: 'Title work 2',
      discription: 'Some text about work 2',
      category: 'Веб-дизайн', // design web-design Веб-дизайн
      imgSrc: require('../../data/images/portfolio/work-2.jpg'),
      alt: 'work-2'
    },
    {
      id: 3,
      title: 'Title work 3',
      discription: 'Some text about work 3',
      category: 'Брендинг', // brand style Стиль
      imgSrc: require('../../data/images/portfolio/work-3.jpg'),
      alt: 'work-3'
    },
    {
      id: 4,
      title: 'Title work 4',
      discription: 'Some text about work 4',
      category: 'Веб-дизайн', // pack Упаковка
      imgSrc: require('../../data/images/portfolio/work-4.jpg'),
      alt: 'work-4'
    },
    {
      id: 5,
      title: 'Упаковка для надувных санок',
      discription: '',
      category: 'Упаковка', // pack Упаковка
      imgSrc: require('../../data/images/portfolio/Pack_Snowtube.png'),
      alt: 'Упаковка санок'
    },
    {
      id: 6,
      title: 'Упаковка для чайника',
      discription: '',
      category: 'Упаковка', // design web-design Веб-дизайн
      imgSrc: require('../../data/images/portfolio/Pack_Kettle.png'),
      alt: 'Упаковка чайника'
    }
  ];

let jsnString = JSON.stringify(WORKS_DATA);
// console.log(jsnString);

let html = document.documentElement.clientHeight;

function scrol (height:any) {
    let pageHeight = height;
    console.log(pageHeight);
    window.scrollTo(0,pageHeight);
}
scrol(html);
// console.log(jsnString);