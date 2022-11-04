function attachEvents() {
    document.getElementById('refresh').addEventListener('click', getAllMsg);
    document.getElementById('submit').addEventListener('click', onSendMsg);
}

function renderMsg(data) {
    let textArea = document.getElementById('messages');
    const content = Object.values(data).map(entry => `${entry.author}: ${entry.content}`).join('\n');
    textArea.textContent = content;
}

function onSendMsg() {
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]')

    const body = {
        author: author.value,
        content: content.value
    }

    author.value = '';
    content.value = '';
    
    createMsg(body)
}

async function getAllMsg() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const response = await fetch(url);
    const data = await response.json();

    renderMsg(data)
}

async function createMsg(body) {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

    });
    getAllMsg()
}
attachEvents();