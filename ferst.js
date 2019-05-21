'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    extenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 0; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && typeof(b) != null
        && a != '' && b != '' && a.length < 50 ) {
            console.log('Done');
            appData.extenses[a] = b;
        } else {
            
        }
};

alert(appData.budget/30);