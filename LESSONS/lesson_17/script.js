// выполняем домашку 7 с дополнениями - с модальным окном, которое показывает товар

let div_root =document.querySelector('#root')

async function fetchProducts() {
    let url = "https://dummyjson.com/products";
    let res = await fetch(url);
    let data = await res.json();
    render(data.products);
}


function render(data){
    let div_container = document.createElement('div')
    div_container.className = 'product_container';

    for (let elem of data){
        let product_item = document.createElement('div');
        product_item.className = 'product_item';

        let img_product = document.createElement('div');
        img_product.className = 'img_product';
        img_product.style.backgroundImage = `url(${elem.images[0]})`

        let p_title = document.createElement('p');
        let p_price = document.createElement('p');
        let product_desc = document.createElement('div');

        p_title.innerText = elem.title;
        p_price.innerText = elem.price;

        product_desc.append(p_title, p_price, rating(elem.rating));
        product_item.append(img_product, product_desc);
        div_container.append(product_item);

        // Modal - вызываем окно при нажатии на любую карточку
        product_item.onclick = () => {
            modal(elem)
        }
    }
    div_root.append(div_container)
}


function modal(data) {
    // Modal area - создаем заливку страницы, чтобы невозможно было нажать на другие элементы при появлении контейнера поверх
    let div_modal_area = document.createElement('div');
    div_modal_area.className = 'modal_area';

    // Modal container - верхний элемент - модальное окно, - который появл при нажатии на карточку
    let div_modal_container = document.createElement('div');
    div_modal_container.className = 'modal_container';

    // Modal content - передаем информацию внутрь модалки
    let div_product_images = document.createElement('div');
    let div_product_info = document.createElement('div');
    div_product_images.className = 'product_images_wrapper';
    div_product_info.className = 'product_info_wrapper';

    // Product info - текст под картинкой в модальном окне
    let div_product_description = document.createElement('div');
    div_product_description.className = 'product_description';

    let text_product_descr = document.createElement('p');
    text_product_descr.innerText = `Product description: ${data.description}`;

    let product_modal_title = document.createElement('h4');
    product_modal_title.innerText = `Product name: ${data.title}`;

    div_product_description.append(product_modal_title, text_product_descr, rating(data.rating));



    // выводим одну главную картинку по центру
    let main_img = document.createElement('img');
    main_img.className = 'modal_main_img';
    main_img.src = data.images[0];
    div_product_info.append(main_img, div_product_description);

    data.images.forEach(elem => {        // выводим все картинки для каждого объекта, который мы выбрали
        let image = document.createElement('img');  
        image.src = elem;
        div_product_images.append(image);

        // каждый клик на картинке показывает новую
        image.onclick = () => {
            main_img.src = elem;
        }
    });
    div_modal_container.append(div_product_images, div_product_info)



    div_modal_area.append(div_modal_container);
    div_root.append(div_modal_area);



    // Удаление модального окна, используя клик за его пределами
    div_modal_area.onclick = () => {
        div_modal_area.remove()
    }
    div_modal_container.onclick = (event) => {
        event.stopPropagation()     //отключает событие remove для модального окна - почитать дополнительно!!! собрать методы закрытия для модальных окон (было в практике)
    }


}

function rating(num) {
    let count_stars = Math.round(num);
    let div_rating = document.createElement('div');
    div_rating.className = 'stars_wrapper'

    for (let i = 0; i < 5; i++) {
        let span_elem = document.createElement('span');
        if (count_stars > i) {
            span_elem.className = 'fa fa-star active'
        } else {
            span_elem.className = 'fa fa-star'
        }
        div_rating.append(span_elem);
    }
    return div_rating;
}

fetchProducts()