import React from 'react'
import { useMemo } from 'react'
import AboutMeContext from '../AboutMeContext'
import { createGqlContext } from './create-gql-context'

type AboutMeProviderProps = {
	uri: string
	children: JSX.Element[] | JSX.Element

}

const AboutMeProvider = ({ uri, children }: AboutMeProviderProps): JSX.Element => {
	const provider = useMemo(() => createGqlContext(uri), [uri])

	return (
		<AboutMeContext.Provider value={provider}>
			{children}
		</AboutMeContext.Provider>)
}

export default AboutMeProvider