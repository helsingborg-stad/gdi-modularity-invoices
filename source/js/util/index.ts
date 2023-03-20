const cmp = <T>(a: T, b: T): number => a > b ? 1 : a < b ? -1 : 0

const sortyByInternal = <T,K>(list: T[], key: ((value: T) => K), direction: number): T[] => 
	list.concat().sort((a, b) => direction * cmp(key(a), key(b)))

export const sortyBy = <T,K>(list: T[], key: ((value: T) => K), direction: 'asc'|'desc' = 'asc'): T[] => 
	sortyByInternal(list, key, direction === 'asc' ? 1 : -1)

export const groupBy = <T>(list: T[], key: ((value: T) => string)): Record<string, T[]> => list
	.map(v => ({v, k: key(v)}))
	.reduce((g, {v, k}) => ((g[k] || (g[k] = [])).push(v), g), {} as Record<string, T[]>)
