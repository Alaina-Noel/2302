let myPromise = new Promise(resolve => 
  resolve('contents of the promise')
  );

let myShorterPromise = Promise.resolve('contents of the promise');

//the good thing about the top syntax is you can do things like this

let myRejectedPromise = new Promise((resolve, reject) => {
const apiCallStatusCode = 201;
  if (apiCallStatusCode === 201) {
    resolve('happy dance');
  } else {
    reject('contents');
  }
});

const array = [];
array.push('Meg');

const turingPromise = Promise.resolve('Chris')
  .then(() => {
    array.push('Brian');
  })
  .then(() => {
    array.push('Abdul');
  })
  .then(() => {
    return array;
  });

array.push('Erin');
array;
turingPromise;



