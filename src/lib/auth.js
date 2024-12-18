import { account } from "./appwrite";
import { ID } from "appwrite";


export async function signUp(email,password,name) {
    try {
        const session =await account.create(ID.unique(),email,password,name);
        return session
    } catch (error) {
        console.error("Sign up error:",error);
        throw error
    }
}


export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email,password);
        return session
    } catch (error) {
        console.error("Sign in error:",error)
        throw error
    }
}

export async function signOut() {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error('Sign out error:',error)
        throw error
    }
}