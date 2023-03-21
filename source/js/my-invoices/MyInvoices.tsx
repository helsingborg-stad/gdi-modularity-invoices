import { useContext } from 'react'
import AboutMeContext, { Invoice } from '../about-me-service/AboutMeContext'
import PhraseContext, { PhraseFn } from '../phrase/PhraseContext'
import useAsync from '../components/UseAsync'
import InvoicesView from './components/mui/InvoicesView'

type State = 'loading' | 'saving'

const PendingElements: Record<State, (phrase: PhraseFn) => JSX.Element> = {
  loading: (phrase) => <span>{phrase('person_loading', 'Laddar...')}</span>,
  saving: (phrase) => <span>{phrase('person_saving', 'Sparar...')}</span>,
}

const MyInvoices = (): JSX.Element => {
  const { phrase } = useContext(PhraseContext)
  const { listInvoices } = useContext(AboutMeContext)

  const inspect = useAsync<Invoice[], State>(listInvoices, 'loading')

  return inspect({
    pending: (state) => PendingElements[state](phrase),
    resolved: (invoices) => <InvoicesView invoices={invoices} />,
    rejected: () => <span>{phrase('person_error', 'Fel...')}</span>,
  })
}

export default MyInvoices
