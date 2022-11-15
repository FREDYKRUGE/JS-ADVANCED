import { html, render } from 'https://unpkg.com/lit-html?moudle'
import {towns} from './towns.js'

const townsRoot = document.getElementById('towns');
const resultRoot = document.getElementById('result')
document.querySelector('button').addEventListener('click', search)

update()

function searchTemplate(townsName, match) {
   const ul = html`
      <ul>
         ${townsName.map(townName => createTemplate(townName, match))}
      </ul>
   `

   return ul
}

function createTemplate(town, match) {
   return html`
   <li class="${(match && town.toLowerCase().includes(match)) ? "active" : ''}">${town}</li>
   `
}

function update(text) {
   const ul = searchTemplate(towns, text)
   render(ul, townsRoot)
}

function search(e) {
   const textNode = document.getElementById('searchText')
   const text = textNode.value.toLowerCase()
   update(text)
   updateCount()
   textNode.value = ''
}

function updateCount() {
   const count = document.querySelectorAll('.active').length
   const countElement = count ? html`<p>${count} matches found</p>` : '';
   
   render(countElement, resultRoot)
}