const arr = [
    {
        id: 0,
        nome: 'Mario',
        cognome: 'Rossi',
        email: 'mario.rossi@mail.it',
        cf :  'sadsa78979asd',
        indirizzo: 'via palma 15'
    },
    {
        id: 1,
        nome: 'Luca',
        cognome: 'Bianchi',
        email: 'luca.bianchi@mail.it',
        cf :  'sadsa78979asd',
        indirizzo: 'via palma 15'
    },
    {
        id: 2,
        nome: 'Serena',
        cognome: 'Verdi',
        email: 'serena.verdi@mail.it',
        cf :  'sadsa78979asd',
        indirizzo: 'via palma 15'
    },
    {
        id: 3,
        nome: 'Lucia',
        cognome: 'Gialli',
        email: 'lucia.gialli@mail.it',
        cf :  'sadsa78979asd',
        indirizzo: 'via palma 15'
    },
]

const head = document.getElementById('t-head');
head.innerHTML = `<th>ID</th>
            <th>NOME</th>
            <th>COGNOME</th>
            <th>EMAIL</th>
            <th>CODICE FISCALE</th>
            <th>INDIRIZZO</th>`

let th = document.querySelectorAll('th');
th.forEach((item) => {
    item.className = "border-violet-500 border-2 p-3";
})

let table = document.getElementById('t-body');

arr.forEach((item) => {
    let trow = document.createElement('tr')
    trow.setAttribute('id', item.id + "-" + item.nome);

    Object.keys(item).forEach((key) => {
        let td = document.createElement('td');
        td.innerText = item[key];
        trow.appendChild(td);
    })
    
    // let idTd = document.createElement('td');
    // idTd.innerText = item.id
    // trow.appendChild(idTd);

    // let nameTd = document.createElement('td');
    // nameTd.innerText = item.nome
    // trow.appendChild(nameTd);

    // let surnameTd = document.createElement('td');
    // surnameTd.innerText = item.cognome
    // trow.appendChild(surnameTd);

    // let emailTd = document.createElement('td');
    // emailTd.innerText = item.email
    // trow.appendChild(emailTd);

    // let cfTd = document.createElement('td');
    // cfTd.innerText = item.cf
    // trow.appendChild(cfTd);
    
    // let indirizzoTd = document.createElement('td');
    // indirizzoTd.innerText = item.indirizzo
    // trow.appendChild(indirizzoTd);

    table.appendChild(trow);
})  

let td = document.querySelectorAll('td');
td.forEach((item) => {
    item.className = "text-center border-violet-500 border-2 p-3";
})