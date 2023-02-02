myPromise = new Promise(resolve => 
  resolve('contents of the promise')
  );

myShorterPromise = Promise.resolve('contents of the promise');

//the good thing about the top syntax is you can do things like this

myRejectedPromise = new Promise((resolve, reject) => {
  const apiCallStatusCode = 201;
    if (apiCallStatusCode === 201) {
      resolve('happy dance');
    } else {
      reject('contents');
    }
  });
