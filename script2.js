let condition = false;

// function doSomething(callback, errorCallback) {
//     (condition) ? callback('Yes') : errorCallback( {name: 'error!', message: 'you got a problem'} );
// }
  
// doSomething(
//     (message) => { console.log(message) }, 
//     (error)   => { console.log(error.name + ' ' + error.message) }
// )



function doSomething2(){
    return new Promise( (resolve, reject) => {
        (condition) ? resolve('OK') : reject( {name: 'ERROR!', message: 'You got a problem~~~'} );
    })
}
  
doSomething2().then(message => {
    console.log(message);
    }).catch(error => {
        console.log(`${error.name} ${error.message}`);
    });

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = callback(script);
//     document.head.append(script);
// }
  
// loadScript(
//     'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', 
//     script => { alert(`Cool, the script ${script.src} is loaded`); }
// );




//   function watchTutorialPromise() {
//     let userLeft = false
//     let userWatchingCatMeme = false
//     return new Promise((resolve, reject) => {
//       if (userLeft) {
//         reject({
//           name: 'User Left', 
//           message: ':('
//         })
//       } else if (userWatchingCatMeme) {
//         reject({
//           name: 'User Watching Cat Meme',
//           message: 'WebDevSimplified < Cat' 
//         })
//       } else {
//         resolve('Thumbs up and Subscribe')
//       }
//     })
//   }
  

  
//   watchTutorialPromise().then(message => {
//     console.log(message)
//   }).catch(error => {
//     console.log(error.name + ' ' + error.message)
//   })
  

