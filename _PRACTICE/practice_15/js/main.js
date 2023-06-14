const postsContainerEl = document.querySelector('.posts-container');
const commentsContainerEl = document.querySelector('.comments-container');
const notificationContainerEl = document.querySelector(`.notification-container`);



//1.a Функция создает форму для помещения туда текста
function renderPost(post) {
    let postCardEl = document.createElement(`div`)
    postCardEl.classList.add(`post-card`)

    let postTitleEl = document.createElement(`h3`)
    postTitleEl.classList.add(`post-header`)
    postTitleEl.textContent = post.title    //идентично innerText

    let postBodyEl = document.createElement(`p`)
    postBodyEl.classList.add(`post-body`)
    postBodyEl.textContent = post.body

    postCardEl.append(postTitleEl, postBodyEl)
    
    return postCardEl
}

//b. 
function renderPosts(postsArray) {
    postsArray.forEach(elem => {
        postsContainerEl.append(renderPost(elem))
    })
}

//c. 
function requestPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((data) => renderPosts(data))
}

requestPosts()

//2.
function createPost(title, body, userId) {
    let url = `https://jsonplaceholder.typicode.com/posts`
    return fetch(url, {         //лучше вовзращать промис из функции, чтобы разделять задачи. А потом уже использовать then
        method: `POST`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title,
            body,
            userId
        })
    })
}

createPost(`Заголовок`, `Что-то написано`, 1)
    .then((res) => res.json())
    .then((data) => {
        notificationContainerEl.style.display = `block`
        notificationContainerEl.innerText = `Пользователь ${data.userId} успешно добавил пост, ID=${data.id}`
        setTimeout(() => {
            notificationContainerEl.style.display = `none`
        }, 3000)
    })


//3. выше, 4. выше



