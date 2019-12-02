import { ContextType, Context } from 'react'

// TODO: Придумать, как это реализовать

interface IContextArg<T> {
	context: Context<T>
	value: T
}

export const combineContext = <T>(arg: IContextArg<T>[]) => {}
