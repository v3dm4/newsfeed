import * as firebase from 'firebase/app'
import 'firebase/auth'

export interface LoginParams {
	username: string
	password: string
}
export type LoginResponse = { username: string }

export type SignUpParams = LoginParams

export const loginWithPassword = async ({
	username,
	password,
}: LoginParams): Promise<firebase.auth.UserCredential> => {
	try {
		return await firebase.auth().signInWithEmailAndPassword(username, password)
	} catch (err) {
		throw new Error(err)
	}
}

export const signUpWithPassword = async ({
	username,
	password,
}: SignUpParams): Promise<firebase.auth.UserCredential> => {
	try {
		return await firebase
			.auth()
			.createUserWithEmailAndPassword(username, password)
	} catch (err) {
		throw new Error(err)
	}
}
