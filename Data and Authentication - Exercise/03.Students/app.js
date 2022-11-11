const submitBtn = document.getElementById('submit').addEventListener('click', handleCreateRecord)



function handleCreateRecord(event) {
    event.preventDefault()
    const fName = document.getElementsByName('firstName')[0].value;
    const lName = document.getElementsByName('lastName')[0].value;
    const facultyNumber = document.getElementsByName('facultyNumber')[0].value;
    const grade = document.getElementsByName('grade')[0].value;

    onCreate(fName, lName, facultyNumber, grade)
}

function displayData(data) {
    let table = document.getElementById('results');

    Object.values(data).forEach(person => {
        const tr = document.createElement('tr')
        let tdN = document.createElement('td'); // First name
        let tdl = document.createElement('td'); // Last name
        let tdf = document.createElement('td'); // Faculty number
        let tdg = document.createElement('td'); // Grade


        tdN.textContent = person.firstName;
        tdl.textContent = person.lastName;
        tdf.textContent = person.facultyNumber;
        tdg.textContent = person.grade

        tr.append(tdN);
        tr.append(tdl);
        tr.append(tdf);
        tr.append(tdg);

        table.appendChild(tr)
    })
}

// async functions 


async function onLoadAllRecords() {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const response = await fetch(url);
    const data = await response.json();

    displayData(data)
    
}

async function onCreate(firstName, lastName, facultyNumber, grade) {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    let body = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }
    const response = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    onLoadAllRecords()
    return data
}
