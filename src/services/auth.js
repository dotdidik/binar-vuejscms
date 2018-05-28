export default {
    isAuth: false,
    getAuthState() {
      return this.isAuth;
    },
    login() {
      this.isAuth = true;
    },
    logout() {
      this.isAuth = false;
    }
  }