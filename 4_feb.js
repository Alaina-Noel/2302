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

