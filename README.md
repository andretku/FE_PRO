# FE_PRO

db.products.insertMany([
    {id: 1, title: 'bike', price: 3400},
    {id: 2, title: 'ролики', price: 700}
])

// создать коллеккцию users 

db.createCollection('users');
db.user.insertMany ([
    {id: 1, name: 'Maks', lastname: 'Grybov', age: 32},
    {id: 2, name: 'Aleks', lastname: 'Sidorov', age: 27},
    {id: 3, name: 'Roman', lastname: 'Ivanov', age: 35},
]);

db.user.insertMany ([
    {id: 1, name: 'Анатолий', age: 32, gender: 'm'},
    {id: 2, name: 'Светлана', age: 25, gender: 'f'},
    {id: 3, name: 'Никита', age: 33, gender: 'm'},
    {id: 3, name: 'Ольга', age: 22, gender: 'f'},
]);

1 Анатолий 28 m
2 Светлана 25 f
3 Никита 33 m
4 Ольга 22 f

db.products.find({title: 'bike'})

db.products.find({price: {$gt: 1000}})

db.products.insertMany([
    {id: 3, title: 'car', price: 20000},
    {id: 4, title: 'ball', price: 50},
    {id: 5, title: 'electric bike', price: 7000},
    {id: 6, title: 'doll', price: 90}
])

db.products.find({
    $or: [
        {price: {$lte: 1000}},
        {price: {$gte: 2000}}
    ]
})

db.products.find({price: {$gte: 1000, $lt: 2000}})


db.products.find({ count: {$in: [0,5,10]}})


db.products.find({ marks: {$elemMatch: {$eq: 3}}})