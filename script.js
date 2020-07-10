let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('success');
    } else {
        reject('fail');
    }
});

p.then((message) => {
    console.log('then ' + message);
}).catch((message) => {
    console.log('catch ' + message);
})