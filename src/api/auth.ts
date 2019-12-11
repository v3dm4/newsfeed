import * as firebase from 'firebase/app'
import 'firebase/auth'

export interface LoginParams {
	email: string
	password: string
}
export type LoginResponse = { username: string }

export type SignUpParams = LoginParams

export const loginWithPassword = async ({
	email,
	password,
}: LoginParams): Promise<firebase.auth.UserCredential> => {
	try {
		return await firebase.auth().signInWithEmailAndPassword(email, password)
	} catch (err) {
		throw new Error(err)
	}
}

export const signUpWithPassword = async ({
	email,
	password,
}: SignUpParams): Promise<firebase.auth.UserCredential> => {
	try {
		return await firebase.auth().createUserWithEmailAndPassword(email, password)
	} catch (err) {
		throw new Error(err)
	}
}

export const logout = async (): Promise<void> => {
	try {
		return await firebase.auth().signOut()
	} catch (err) {
		throw new Error(err)
	}
}
