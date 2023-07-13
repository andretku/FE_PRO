# README

## Практическое занятие №23

### Тема:

Репозитарий содержит материалы по практическому занятию №23, посвященному комплексному повторению работы с DOM. Задаче

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Добавляем возможность работы с корзиной товаров. Наша задача - как-то хранить корзину товаров.
 - для этого нужно создать переменную
 - мы будем хранить название, ИД товара в корзине, и количество единиц товара в корзине
2. Пишем функцию добавления в корзину (`addToCart`). Функция в качестве аргумента будет принимать ИД и название товара. Она должна проверить наличие в корзине такого товара (с таким ИД). Если такой товар уже есть - увеличить кол-во на 1. Если нет - добавить объект с данными об этом товаре (ИД, название и количество, в данном случае 1).
3. Пишем функцию удаления из корзины (`removeFromCart`). Функция принимает ИД товара. Задача - если в корзине такого товара нет, то ничего не делаем. Иначе - уменьшаем кол-во товара на 1. ВАЖНО! Нам не особо нужны товары с нулевым/отрицательным количеством.
4. Теперь пора показать корзину. Корзину мы будем показывать как модальное окно.
 - добавляем в разметку кнопку "показать корзину"
 - добавляем в разметку div для корзины. С учетом того, что мы хотим ее показывать как модальное окно, нам нужно сделать "контейнер" для всей модалки (серый фон), и разместить само модальное окно. Отступ сверху от верхнего края до модального окна - 10% от общей высоты. По горизонтали - отцентрировать. Ширину модалки можно ограничить 400 пикселями.
 - в модалке, нам нужно показывать товары в корзине, в виде списка.
 - если товаров в корзине нет - показываем сообщение "Корзина пуста"
 - при клике по серому фону, нам нужно закрывать модальное окно. Надо чтобы модалка закрывалась ТОЛЬКО при клике по серому фону, но не закрывалась при клике по самой модалке.


### Полезные ссылки по занятию:
 - Спецификация MDN по [объекту Event](https://developer.mozilla.org/ru/docs/Web/API/Event/Event)
 - Раздел учебника, посвященный [браузерным событиям](https://learn.javascript.ru/ui) - много чтива, но оно стоит каждой потраченной минуты.