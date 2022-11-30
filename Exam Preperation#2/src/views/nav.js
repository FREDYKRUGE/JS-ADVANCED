import { getUserData } from "../util.js"
import { logout } from "../api/user.js"
import { html, render, page } from "../lib.js"

const nav = document.querySelector('header');

const navTemp = (hasUser) => html`
<nav>
    <img src="./images/headphones.png">
    <a href="/">Home</a>
    <ul>
        <!--All user-->
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        ${!hasUser ? html`<li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>`:
                    html`<li><a href="/create">Create Album</a></li>
                    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
    </ul>
</nav>
`

export function updateNav() {
    const user = getUserData()

    render(navTemp(user), nav)
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/')
}

