window.addEventListener("load", solve);

function solve() {
    document.getElementById("publish-btn").addEventListener('click', createPost);
    document.getElementById('clear-btn').addEventListener('click', clear)

    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');
    let reviewSec = document.getElementById('review-list');
    let publishedList = document.getElementById('published-list')

   

    function createPost(e) {
        let titleValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;

        if (!titleValue || !categoryValue || !contentValue) {
            return;
        }
        createDOMElements(titleValue, categoryValue, contentValue);

        title.value = '';
        category.value = '';
        content.value = '';

    }
    function createDOMElements(titleValue, categoryValue, contentValue) {
        let li = document.createElement('li');
        li.classList.add('rpost');

        let article = createArticle(titleValue, categoryValue, contentValue);

        let editButton = document.createElement('button');
        editButton.classList.add("action-btn");
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editPost)


        let approveBtn = document.createElement('button');
        approveBtn.classList.add("action-btn");
        approveBtn.classList.add('approve');
        approveBtn.textContent = 'Approve';
        approveBtn.addEventListener('click', approvePost)

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(approveBtn);

        reviewSec.appendChild(li);

    }
    function createArticle(titleValue, categoryValue, contentValue) {
        let article = document.createElement('article');

        let h = document.createElement('h4');
        h.textContent = titleValue;

        let categoryP = document.createElement('p');
        categoryP.textContent = `Category: ${categoryValue}`;

        let contentP = document.createElement('p');
        contentP.textContent = `Content: ${contentValue}`;

        article.appendChild(h);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        return article;

    }
    function editPost(e) {
        let currentPost = e.target.parentElement;
        let articleContent = currentPost.getElementsByTagName('article')[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        title.value = titleValue;
        category.value = categoryValue.split(': ')[1];
        content.value = contentValue.split(': ')[1];

        currentPost.remove();

    }
    function approvePost(e) {
        let currentPost = e.target.parentElement;
        publishedList.appendChild(currentPost);

        Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove())

    }
    function clear(e) {
        Array.from(publishedList.children).forEach(li => li.remove( ))
    }
}   