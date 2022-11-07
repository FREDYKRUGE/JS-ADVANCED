function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords)
    document.getElementById('btnCreate').addEventListener('click', handleCreateRecord)
}

function handleCreateRecord() {
    const personEl = document.getElementById('person')
    const phoneEl = document.getElementById('phone')

    onCreate(personEl.value, phoneEl.value)
    personEl.value = '';
    phoneEl.value = '';    
}

function renderRecord(data) {
    let ul = document.getElementById('phonebook')
    ul.innerHTML = '';
    const content = Object.values(data).forEach(rec => {
        const li = document.createElement('li'); 
        li.textContent = `${rec.person}: ${rec.phone}`
        li.setAttribute('data-id', rec._id)

        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.addEventListener('click', handleDelete)

        li.appendChild(btn)
        ul.appendChild(li)
    });
}

async function onLoadAllRecords() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const response = await fetch(url);
    const data = await response.json();

    return renderRecord(data);
}

async function onCreate(person, phone) {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    let body = {
        person: person,
        phone: phone
    }
    const header = getHeader('POST', body)
    const response = await fetch(url, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    onLoadAllRecords();
    return data;
}

async function onDeleteRecord(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`
    const header = getHeader('DELETE', null)
    const response = await fetch(url, header)
}

function getHeader(method, body) {
    return {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

function handleDelete(e) {
    const li = e.target.parentElement;
    const id = li.getAttribute('data-id')

    onDeleteRecord(id)
    li.remove()
}

attachEvents();