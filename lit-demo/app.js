import { html, render } from 'https://unpkg.com/lit-html?moudle'

const tableRow = ({ name, id }) => html`
    <tr>
        <td>${name}</td>
        <td><button @click=${onDelete.bind(null, id)}>Delete</button><td/>
    </tr>`

const data = [
    {
        name: 'Alex',
        id: 'asd1'
    },
    {
        name: 'Alek',
        id: 'asd2'
    },
    {
        name: 'Aleks',
        id: 'asd3'
    }
]

const table = (items) => html`
<table> 
    ${items.map(tableRow)}
</table>
`

const root = document.querySelector('main');

render(table(data), root)

function onDelete(id) {
    data.splice(data.findIndex(i => i.id == id), 1)
    render(table(data), root)
}