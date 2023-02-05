let isLoading = true;
function getUserName() {
  return Promise.resolve()
    .then(() => { throw new Error('No such user.'); })
    .finally(() => {
      isLoading = false;
    });
}
getUserName();
//this function returns a rejected promise

let isLoading = true;
function getUserName() {
  return Promise.resolve()
    .then(() => {
      isLoading = false;
      throw new Error('No such user.');
    });
}

getUserName().catch(error => {
  console.error(error.message);
});

//this code will return a fulfilled promise that caught the error of no such user