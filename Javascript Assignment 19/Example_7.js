var p = new Promise((resolve, reject) => {
reject(Error('The Fails!'))
})
.catch(error => console.log(error))
.then(error => console.log(error))

/*
Output:
Error: The Fails!
    at <anonymous>:2:8
    at new Promise (<anonymous>)
    at <anonymous>:1:9
undefined*/