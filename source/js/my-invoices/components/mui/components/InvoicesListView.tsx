import { Case } from '../../../../about-me-service/AboutMeContext'
import InvoiceView from './InvoiceView'

const InvoicesListView = ({ cases }: { cases: Case[] }) => {
  return (
    <div>
      {cases.map((data) => (
        <InvoiceView key={data.caseId} {...{ data }} />
      ))}
    </div>
  )
}

export default InvoicesListView
