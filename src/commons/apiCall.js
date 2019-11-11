import axios from "axios";
import { URL } from './config'

let contentType = { "Content-Type": "application/json", 'X-Requested-With': 'XMLHttpRequest' }

export const apiCall = async (url = '') => {
   try {
      const response = await axios({
         method: "GET",
         url: URL + url,
         headers: contentType || "",
      });
      return response;
   } catch (error) {
      console.error(error)
      return false;
   }
};
