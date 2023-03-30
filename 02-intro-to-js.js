console.log(
'                       Задание № 1:\n',    
'Создать свой Ресторан / Магазин / Футбольную команду используя:\n',
'1. Переменные - let, const\n', 
'2. Типы данных - string, number, boolean, null, undefined\n', 
'3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже)\n\n');

const ernstKonstantin = {
    larstname: 'Ernst',
    firstname: 'Konstantine',
    middleName: 'Lvovich',
    dateOfBirth: new Date(1961, 1, 6)
}

const nazarovDmitriy = {
    larstname: 'Nazarov',
    firstname: 'Dmitriy',
    middleName: 'Yurievich',
    dateOfBirth: new Date(1957, 6, 4)
}

const nagievDmitriy = {
    larstname: 'Nagiev',
    firstname: 'Dmitriy',
    middleName: 'Vladimirovich',
    dateOfBirth: new Date(1967, 3, 4)
}

const bobroff = {
    larstname: 'Bobrov',
    firstname: 'Valeriy',
    middleName: 'Alekseevich',
    dateOfBirth: new Date(1997, 10, 14)
}

const naumoff = {
    larstname: 'Naumoov',
    firstname: 'ALeksander',
    middleName: 'Rostislavovich',
    dateOfBirth: new Date(2007, 09, 24),
}

const myRestaurant = {
    name: 'Yason and Alkonavts',
    openDate: new Date(2011, 2, 1),
    closeDate: undefined,
    numberOfSeats: 500,
    wardrobeIsAvailable: false,
    serviceStartsAtIn24HourFormat: '10:00',
    serviceEndsAtIn24HourFormat:   '03:00',
    cookes: undefined,
    chef: undefined,
    owner: nagievDmitriy,
    waitersList: undefined
};

myRestaurant.closeDate = new Date(2021, 2, 2);
myRestaurant.cookes = [bobroff];
myRestaurant['chef'] = nazarovDmitriy;
myRestaurant.waitersList = [naumoff];
myRestaurant.executiveDirector = ernstKonstantin; 
myRestaurant['actualAddress'] = 'Stroiteley street 3';
myRestaurant['formalAddress'] = 'Starokolpakskyi pereulok 15';
myRestaurant['cuisines'] = ['Europa', 'Caucasus', 'Asia', 'Italia'];

console.log(myRestaurant['chef'].larstname);
console.log(myRestaurant['actualAddress']);
console.log(myRestaurant['cuisines'][3]);

let messageYes = 'Wardrobe is available';
let messageNo = 'Wardrobe is not available';

if (myRestaurant['wardrobeIsAvailable']) 
    console.log(messageYes);
else    
    console.log(messageNo);       

console.log(myRestaurant.waitersList);
console.log(myRestaurant.closeDate);

delete myRestaurant.waitersList;
delete myRestaurant['closeDate'];

myRestaurant.newWatersList = [naumoff];
myRestaurant.newCloseDate =  new Date(2022, 2, 2);

console.log('Object myRestaurant:');
console.log(myRestaurant);

console.log(myRestaurant.waitersList);
console.log(myRestaurant.closeDate);
console.log(myRestaurant.newWatersList);
console.log(myRestaurant.newCloseDate);


console.log('\n',
'                      Задание № 2:\n',
'Работа с объектами\n',
'Напишите код, выполнив задание из каждого пункта отдельной строкой:\n',
'1. Создайте пустой объект `vehicle`.\n',
'2. Добавьте свойство `brandName` со значением `BMW`(либо любая ваша любимая марка)\n',
'3. Добавьте свойство `model` со значением `X5`(либо любая ваша любимая модель).\n',
'4. Измените значение свойства `model` на `M1`.\n',
'5. Удалите свойство `model` из объекта.\n\n');

const vehicle = {};
vehicle['brandName'] = 'Toyota';

vehicle.model = 'Camry';

vehicle['model'] = 'Corolla';

delete vehicle['model'];

console.log(vehicle);

console.log('\n',
'                      Задание № 3:\n',
'Работа с перебором свойств в объектах\n\n',

'1. Создайте объект `salaries`, где ключом(свойстовом) является имя, a значением зарплата.\n',
'2. С помощью for .. in  просуммируйте все значения и выведите в консоли.\n\n');

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
};

let sumOfSalaries = 0;

for (let name in salaries) {
    sumOfSalaries += salaries[name];
}

console.log('summa of salaries is equal to ' + sumOfSalaries);
