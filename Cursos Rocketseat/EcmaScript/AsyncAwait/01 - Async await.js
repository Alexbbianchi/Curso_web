const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ok') } , 2000)
});

// minhaPromise()
//     .then(response => {
//         console.log(response);  
//     })
//     .catch(err => {

//     });

/**
 * Async await
 */
// async function executaPromise() {
//     const response = await minhaPromise();

//     console.log(response)
// }

// executaPromise();

/**
 * Async await2
 */
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

/**
 * Async await arrow function
 */
const executaPromise = async () => {
    console.log(await minhaPromise());
}
executaPromise();