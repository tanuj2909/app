import { ID } from "appwrite";
import { account } from "./config";


class AuthService {
    account = account

    async register({email, password, name}) {
        try {
            const user = await this.account.create(ID.unique() ,email, password, name)
            if(user) {
                this.login({email, password})
            } else {
                return user
            }
        } catch(error) {
            console.log("register()", error)
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch(error) {
            console.log("login()", error)
        }
    }
 
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch(error) {
            console.log("getCurrrentUser()", error)
        }

        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch(error) {
            console.log("logout()", error)
        }
    }
}


export const auth = new AuthService(account);


