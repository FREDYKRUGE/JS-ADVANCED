// detect URL changes and notify application
// change URL on application content swap

const views = {
    '/': () => '<h2>Home Page</h2>',
    '/catalog': () => '<h2>Catalog</h2>',
    '/about': () => '<h2>About Page</h2>'
}

document.querySelector('nav').addEventListener('click', onNavigate);
const main = document.querySelector('main')

function onNavigate(e) {  
    if (e.target.tagName = "A") {
        const url = new URL(e.target.href) ;
        const view = views[url.pathname];
        if (typeof view == 'function') {
            e.preventDefault();
            main.innerHTML = view
        }
    }
    
}