import { render } from "../node_modules/lit-html/lit-html.js"
import page from '//unpkg.com/page/page.mjs';
import { catalogView } from './views/catalog.js'
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'
import { myFurnitureView } from './views/myFurniture.js'
import { registerView } from './views/register.js'
import { loginView } from "./views/login.js";
import { logout } from "./api/data.js"

const root = document.querySelector('.container')

page('/', renderMiddleware, catalogView)
page('/catalog', renderMiddleware, catalogView)
page('/create', renderMiddleware, createView)
page('/details/:id', renderMiddleware, detailsView)
page('/edit/:id', renderMiddleware, editView)
page('/my-Furniture', renderMiddleware, myFurnitureView)
page('/register', renderMiddleware, registerView) 
page('/login', renderMiddleware, loginView)
page('*', catalogView)

page.start()
updateNav()

document.getElementById("logoutBtn").addEventListener('click', async () => {
    await logout();
    updateNav();
    page.redirect('/');
})

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateNav = updateNav
    next()
}

function updateNav() {
    const userSec = document.getElementById('user');
    const guestSec = document.getElementById('guest');
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData) {
        userSec.style.display = "in-block";
        guestSec.style.display = 'none'
    } else {
        userSec.style.display = "none";
        guestSec.style.display = 'in-block'
    }
}

