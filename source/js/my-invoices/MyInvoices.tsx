import { useContext } from 'react'
import AboutMeContext, { Case } from '../about-me-service/AboutMeContext'
import PhraseContext, { PhraseFn } from '../phrase/PhraseContext'
import useAsync from '../components/UseAsync'
import CasesView from './components/mui/CasesView'

type State = 'loading'|'saving'

const PendingElements: Record<State, (phrase: PhraseFn) => JSX.Element> = {
	loading: phrase => <span>{phrase('person_loading', 'Laddar...')}</span>,
	saving: phrase => <span>{phrase('person_saving', 'Sparar...')}</span>,
} 

const MyInvoices = (): JSX.Element => {
	const { phrase } = useContext(PhraseContext)
	const { listCases } = useContext(AboutMeContext)

	const inspect = useAsync<Case[], State>(listCases, 'loading')
	
	return inspect({
		pending: (state) => PendingElements[state](phrase),
		resolved: (cases) => <CasesView cases={cases} />,
		rejected: () => <span>{phrase('person_error', 'Fel...')}</span>,
	})
}

export default MyInvoices
