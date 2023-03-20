import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

document.addEventListener('DOMContentLoaded', function () {
	[...document.querySelectorAll('.js-gdi-modularity-my-invoices')]
		.map(e => ({
			root: ReactDOM.createRoot(e as HTMLElement),
			aboutMeGraphQLUri: e.getAttribute('data-about-me-graphql-uri') ?? '',
			aboutMeGraphQLJson: window.atob(e.getAttribute('data-about-me-graphql-json') ?? ''),
		}))
		.filter(({ aboutMeGraphQLUri }) => aboutMeGraphQLUri.length > 0)
		.forEach(({ root, aboutMeGraphQLUri, aboutMeGraphQLJson }) => {
			root.render(
				<React.StrictMode>
					<App {...{ aboutMeGraphQLUri, aboutMeGraphQLJson  }} />
				</React.StrictMode>
			)
		})
})