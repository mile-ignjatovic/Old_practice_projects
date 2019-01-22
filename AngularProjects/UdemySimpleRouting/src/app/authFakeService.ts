
export class AuthFakeService {
  loggedIn = false;

  isAutenthicated() {   // objasni mi se
    const promise = new Promise(
      (resolve, reject) => {
        console.log('waiting the server to resolve');
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
