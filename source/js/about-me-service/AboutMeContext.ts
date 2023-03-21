import React from 'react'

export interface Invoice {
  invoiceId: string
  label?: string
  description?: string
  status?: string
  statusHint?: string
  organization?: string
  actions?: InvoiceAction[]
  invoiceDate: string
  dueDate: string
  ocrNumber: string
  autoGiro: string
  amount: number
  payments: {
    amount: string
    date: string
  }[]
}

export interface InvoiceAction {
  label: string
  url: string
  typeHint?: string
}

export interface AboutMeContextType {
  listInvoices: () => Promise<Invoice[]>
}

const notImplemented = () => {
  throw new Error('not implemented')
}

const AboutMeContext = React.createContext<AboutMeContextType>({
  listInvoices: notImplemented,
})

export default AboutMeContext
