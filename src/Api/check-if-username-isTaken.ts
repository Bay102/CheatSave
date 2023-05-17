import { toast } from "react-toastify";
import { API_CONFIG } from "./config";
import { User } from "../Types";

export const checkIfUserExists = async (username: string) => {
   try {
     const response = await fetch(API_CONFIG.baseUrl + '/users');
     if (!response.ok) {
       throw new Error('Error finding user');
     }
     const users = await response.json();
     const user = users.find((user: User) => user.username === username.toLowerCase());
 
     if (user) {
       toast.error('Username is Taken');
       return true;
     } else {
       toast.success('Registration successful!');
       return false;
     }
   } catch (error: any) {
     toast.error(error.message);
   }
 };