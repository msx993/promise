const isSuccess = true
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (isSuccess) {
        resolve(5)
    } else {
        reject("error - 404");
    }
}, 2000)
})

myPromise.then(
    (result) => {
    console.log(result);
 }
)
.catch((error) => {
    console.log(error);
})