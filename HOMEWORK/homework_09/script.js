
const url_posts = 'https://api.slingacademy.com/v1/sample-data/blog-posts';
const url_users = 'https://api.slingacademy.com/v1/sample-data/users';
const div_root = document.querySelector('.root')

fetch(url_users)
    .then((res) => res.json())
    .then((data) => render(data.users));

function render(card) {

    card.forEach(elem => {
        let div_card = document.createElement('div');
        div_card.classList.add('card');

        let p_name = document.createElement('p');
        p_name.innerText = `Name: ${elem.first_name}`;

        let p_lastname = document.createElement('p');
        p_lastname.innerText = `Lastname: ${elem.last_name}`;

        let p_email = document.createElement('p');
        p_email.innerText = `Email: ${elem.email}`;

        let p_job = document.createElement('p');
        p_job.innerText = `Job: ${elem.job}`;

        div_card.append(p_name, p_lastname, p_email, p_job);
        div_root.append(div_card);

        div_card.onclick = () => {
            modal(elem)
        }

    });

}

function modal(post) {


    

}