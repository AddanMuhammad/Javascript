const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise consumed');
})



new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Asyn task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: "Add on",
            email: "addon@example.com"
        })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(() => {
        let error = true;
        if (!error) {
            setTimeout(() => {
                resolve({
                    username: 'Mr Zee',
                    userEmail: 'mr.zee@gmail.com'
                })
            }, 1000);
        } else {
            reject('ERROR: Something went wrong!')
        }
    }, 1000);
})


promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (username) {
    console.log(username);
}).catch(function (e) {
    console.log(e);
}).finally(() => console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: 'Javascript',
                password: '123'
            })
        } else {
            reject('ERROR: Javascript went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


consumePromiseFive()


async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((error) => console.log(error))

    