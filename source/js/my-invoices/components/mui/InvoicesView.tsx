import { useState } from 'react'
import { Invoice } from '../../../about-me-service/AboutMeContext'
import { sortyBy } from '../../../util'
import InvoicesListView from './components/InvoicesListView'

const normalizeInvoices = (invoices: Invoice[]): Invoice[] =>
  sortyBy(invoices, (c) => c.invoiceDate, 'desc').map((c) => ({
    ...c,
  }))

const InvoicesView = ({ invoices }: { invoices: Invoice[] }): JSX.Element => {
  const [normalizedInvoice] = useState(normalizeInvoices(invoices))
  return <InvoicesListView invoices={normalizedInvoice} />
}

export default InvoicesView
