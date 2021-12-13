const num = Promise.resolve(1)

console.log(num)

num
    .then(x => x + 5)
    .then(x => console.log(x))
    .then(x => Promise.reject('Error! Fallas tecnicas.'))
    .then(x => console.log(x))
    .catch(err => console.log(err))