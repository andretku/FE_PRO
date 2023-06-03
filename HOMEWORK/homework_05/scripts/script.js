// Напишите 3 функции, которые будут менять этот массив: 
// Функция addUser(name, salary). Функция должна добавить нового пользователя как последний элемент в массив users. Функция должна автоматически подобрать значение id (реализовать аналог автоинкремента)
// Функция removeUser(id). Функция должна по передаваемому в качестве аргумента ID реализовать удаление пользователя в массиве users
// Функция changeUser(id, name, salary). Функция должна по id найти заданный элемент и переопределить значение name и salary на значение, указанные в аргументе в момент вызова

let users = [ 
    {id: 1, name: 'Steven', salary: 5000}, 
    {id: 2, name: 'Neena', salary: 10000}, 
    {id: 3, name: 'John', salary: 4500} 
    ];

const form = document.querySelector(`form`)    
let addUser = document.querySelector(`.addBtn`)
let removeUser = document.querySelector(`.removeBtn`)
let changeUser = document.querySelector(`.editBtn`)
let inputName = document.getElementById(`inputName`)

let inputSalary = document.querySelector(`#inputSalary`)
let idCount = Object.keys(users).length;

addUser.addEventListener(`click`, () => {
    // event.preventDefault()
    if (isNaN(+inputSalary.value)) {
        alert(`Please, enter correct value`)
        form.reset()
        return
    }
    const newUser = {
        id: idCount + 1,
        name: inputName.value,
        salary: +inputSalary.value
    }
    users.push(newUser)
    console.log(users);
    form.reset()
})

removeUser.addEventListener(`click`, () => {
    let removeById = +prompt(`Enter ID number`)
    if(!removeById || 
        removeById > idCount || 
        removeById < 1) {
        alert(`Uncorrect value`)
        form.reset()
        return
    }
    users.splice(removeById-1, 1)
    console.log(users)
    alert(`Well done!`)
})

function changeUserFn(nameNew, salaryNew) {
    let changeById = +prompt(`Enter ID number`)
        if(!changeById || 
            changeById > idCount || 
            changeById < 1) {
            alert(`Uncorrect value`)
            form.reset()
            return
        }
        users[changeById-1].name = nameNew
        users[changeById-1].salary = salaryNew
        console.log(users);
}

function editUser() {
    changeUserFn(`Andrey`, 6000)
}