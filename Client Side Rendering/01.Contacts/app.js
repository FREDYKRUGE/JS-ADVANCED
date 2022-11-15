import { html, render } from 'https://unpkg.com/lit-html?moudle'
import { contacts } from './contacts.js'

const card = (items) => html`
            ${items.map(cardInfo)}
`
const cardInfo = ({ id, name, phoneNumber, email }) => html`
<div class="contact card">
<div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
<div class="info">
                <h2>Name: ${name}</h2>
                <button @click=${onDetails.bind(null, id)} class="detailsBtn">Details</button>
                <div class="details" id=${id}>
                    <p>Phone number: ${phoneNumber}</p>
                    <p>Email: ${email}</p>
</div>
</div>`

const root = document.getElementById('contacts')

update()

function onDetails(id) {
    const details = document.getElementById(id)
    if (details.style.display == '') {
        details.style.display = 'none'
    }

    if (details.style.display == 'none') {
        details.style.display = 'block'
        return
    } 
    if (details.style.display == 'block'){
        details.style.display = 'none'
        return
    }

    update()
}

function update() {
    render(card(contacts), root)
}