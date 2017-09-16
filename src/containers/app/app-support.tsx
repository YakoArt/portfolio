
// реобразование объекта в json строку
let products = {
    id: 'fc-cr-001',                     // индивидуальный номер (авто)
    brand: 'Brand Fabric',      // фабрика
    name: 'Cream Name',         // название
    category: 'Уход за лицом',  // face care
    type: 'cream',              // крем
    gender: 'female',           // женский
    discription: 'Описание',
    price: 349,
    currency: 'RU'              // валюта
};

let jsnString = JSON.stringify(products);
// console.log(jsnString);