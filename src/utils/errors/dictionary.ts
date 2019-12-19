interface IErrorDictionary {
	[key: string]: string
}

export const errorsDictionary: IErrorDictionary = {
	default: 'Что-то пошло не так',
	'auth/wrong-password': 'Неверный логин или пароль',
}
