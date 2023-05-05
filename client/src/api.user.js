import axios from "axios";
const urllogin = "/api/auth/login"
const urlregister= "/api/auth/register"

export default class API {
    static async login(email, password) {
        try {
          const response = await axios.post(urllogin, {
            email: email,
            password: password
          });
    
          return response.data;
        } catch (error) {
          console.error(error);
          throw new Error('Failed to login');
        }
      }

      static async register( email, password) {
        try {
          const response = await axios.post(urlregister, {
            email: email,
            password: password
          });
          return response.data;
        } catch (error) {
          console.error(error);
          throw new Error('Failed to register');
        }
      }
}