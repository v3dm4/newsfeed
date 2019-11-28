export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export type InferValueTypes<T> = T extends { [key: string]: infer U }
	? U
	: never
