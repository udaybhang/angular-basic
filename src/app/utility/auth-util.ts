export class AuthUtil {
    private static authToken = 'auth token';
  
    static getAuthToken() {
      return localStorage.getItem(AuthUtil.authToken);
    }
  
    static setAuthToken(value: string) {
        console.log(value);
      localStorage.setItem(AuthUtil.authToken, value);
    }
  
    static removeAuthToken() {
      localStorage.removeItem(AuthUtil.authToken);
    }
  }
  