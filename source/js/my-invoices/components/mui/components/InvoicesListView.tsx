import { Invoice } from '../../../../about-me-service/AboutMeContext'
import InvoiceView from './InvoiceView'

const InvoicesListView = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <div>
      {invoices.map((data) => (
        <InvoiceView key={data.invoiceId} {...{ data }} />
      ))}
    </div>
  )
}

export default InvoicesListView
