const usersArray = [{
        name: "Keeley",
        surname: "Bosco",
        age: 36,
        gender: "male",
        email: "keeleybosco@gmail.com",
    },
    {
        name: "Rubye",
        surname: "Jerde",
        age: 25,
        gender: "female",
        email: "rubyejerde@gmail.com",
    },
    {
        name: "Darian",
        surname: "Breitenberg",
        age: 75,
        gender: "female",
        email: "darianbreitenburg@gmail.com",
    },
    {
        name: "Celine",
        surname: "Ankunding",
        age: 23,
        gender: "female",
        email: "celineankuding@gmail.com",
    },
    {
        name: "Araceli",
        surname: "Lang",
        age: 45,
        gender: "female",
        email: "aracelilang@gmail.com",
    },
    {
        name: "Esteban",
        surname: "Johnson",
        age: 64,
        gender: "male",
        email: "estebanjohnson@gmail.com",
    },
    {
        name: "Everette",
        surname: "Swift",
        age: 65,
        gender: "female",
        email: "everetteswift@gmail.com",
    },
    {
        name: "Terrell",
        surname: "Boyle",
        age: 37,
        gender: "male",
        email: "terrelboyle@gmail.com",
    },
    {
        name: "Emmie",
        surname: "Schamberger",
        age: 60,
        gender: "female",
        email: "emmieschamberg@gmail.com",
    },
    {
        name: "Adrian",
        surname: "Robinson",
        age: 57,
        gender: "male",
        email: "adrianrobinson@gmail.com",
    },
    {
        name: "Alex",
        surname: "Jackson",
        age: 55,
        gender: "male",
        email: "alexjackson@gmail.com",
    },
    {
        name: "Amy",
        surname: "Scott",
        age: 36,
        gender: "female",
        email: "amyscott@gmail.com",
    },
    {
        name: "Andrew",
        surname: "Wright",
        age: 54,
        gender: "male",
        email: "andrewwright@gmail.com",
    },
    {
        name: "Anna",
        surname: "Mitchell",
        age: 34,
        gender: "female",
        email: "annamitchell@gmail.com",
    },
    {
        name: "Anna",
        surname: "Parker",
        age: 22,
        gender: "female",
        email: "annaparker@gmail.com",
    },
    {
        name: "Brandon",
        surname: "Johnson",
        age: 63,
        gender: "male",
        email: "brandonjohnson@gmail.com",
    },
    {
        name: "Chuck",
        surname: "Taylor",
        age: 55,
        gender: "male",
        email: "chucktaylor@gmail.com",
    },
    {
        name: "Elisabeth",
        surname: "Robinson",
        age: 23,
        gender: "male",
        email: "elisabethrobinson@gmail.com",
    },
    {
        name: "Eric",
        surname: "Adams",
        age: 45,
        gender: "male",
        email: "ericadams@gmail.com",
    },
    {
        name: "Erica",
        surname: "Clark",
        age: 20,
        gender: "female",
        email: "ericaclark@gmail.com",
    },
    {
        name: "Jacob",
        surname: "Smith",
        age: 56,
        gender: "male",
        email: "jacomsmith@gmail.com",
    },
    {
        name: "Vincent",
        surname: "Lee",
        age: 48,
        gender: "male",
        email: "vincentlee@gmail.com",
    },
    {
        name: "Victoria",
        surname: "Lewis",
        age: 28,
        gender: "female",
        email: "victorialewis@gmail.com",
    },
    {
        name: "Stuart",
        surname: "Thomson",
        age: 38,
        gender: "male",
        email: "stuartthomson@gmail.com",
    },
    {
        name: "Rachel",
        surname: "Thomas",
        age: 49,
        gender: "female",
        email: "rachelthomas@gmail.com",
    },
    {
        name: "Peter",
        surname: "Nelson",
        age: 57,
        gender: "male",
        email: "peternelson@gmail.com",
    },
    {
        name: "Maria",
        surname: "Lopez",
        age: 36,
        gender: "female",
        email: "marialopez@gmail.com",
    },
    {
        name: "Lisa",
        surname: "Moore",
        age: 47,
        gender: "male",
        email: "lisamoore@gmail.com",
    },
    {
        name: "Lindsay",
        surname: "Moore",
        age: 34,
        gender: "female",
        email: "lindseymoore@gmail.com",
    },
    {
        name: "Kim",
        surname: "Anderson",
        age: 43,
        gender: "female",
        email: "kimanderson@gmail.com",
    },
    {
        name: "Juan",
        surname: "Rodriguez",
        age: 35,
        gender: "male",
        email: "juanrodriguez@gmail.com",
    },
];



const arrayCreator = (usersArray, ...args) => {
    let array = [];
    for (const object of usersArray) {
        let tdElelment = document.createElement('td');
        let divForTdElement = document.createElement('div');
        for (const arg of args) {
            divForTdElement.textContent += ` ${object[arg]}`;
        }
        tdElelment.append(divForTdElement);
        array.push(tdElelment);
    }
    return array;
}



const setup = (usersArray) => {
    let usersMap = new Map();

    usersMap.set('name', arrayCreator(usersArray, 'name'));
    usersMap.set('surname', arrayCreator(usersArray, 'surname'));
    usersMap.set('age', arrayCreator(usersArray, 'age'));
    usersMap.set('gender', arrayCreator(usersArray, 'gender'));
    usersMap.set('email', arrayCreator(usersArray, 'email'));


    return usersMap;
}

const createHeader = (usersMap, table) => {
    let theadElement = document.createElement('thead');
    let trElement = document.createElement('tr');
    theadElement.append(trElement);
    for (const key of usersMap.keys()) {
        let thElement = document.createElement('th')
        thElement.textContent = key;
        trElement.append(thElement);
    }
    table.append(theadElement);
}

const createBody = (usersMap, table) => {
    let tbodyElement = document.createElement('tbody');
    table.append(tbodyElement);

    for (i = 0; i < usersMap.get('age').length; ++i) {
        let trElement = document.createElement('tr');
        tbodyElement.append(trElement);
        for (const value of usersMap.values()) {
            trElement.append(value[i]);
        }
    }
}


const render = (usersMap) => {
    const root = document.querySelector('.root');
    let tableElement = document.createElement('table');
    tableElement.className += "Table";
    tableElement.className += " fl-table";
    root.append(tableElement);

    createHeader(usersMap, tableElement);
    createBody(usersMap, tableElement);
}

render(setup(usersArray));