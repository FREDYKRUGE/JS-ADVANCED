import showHome from "./src/home.js"


const main = document.getElementById('mainView')

const homeView = document.getElementById('homeView')
const registerView = document.getElementById('registerView')
const loginView = document.getElementById('loginView')
const dashboard = document.getElementById('dashboard-holder')
const detailsView = document.getElementById('detailsView')
const createView = document.getElementById('createView')

const defSection = document.getElementById('defSection').remove()

const list = {
    '/': showHome,
    '/catalog': dashboard,
    '/login': loginView,
    '/register': registerView,
    '/detailsView': detailsView,
    '/create': createView

}

const context = {
    showSection
}

showHome(context)

function showSection(section) {
    main.replaceChildren(section)
}