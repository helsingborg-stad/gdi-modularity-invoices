import React from 'react'

export interface Invoice {
  invoiceId: string
  label: string
  description: string
  organization: string
  invoiceDate: string
  dueDate: string
  ocrNumber: string
  autoGiro: string
  isPaid: boolean
  amount: number
  actions?: InvoiceAction[]
  currency?: string
  payments: {
    amount: number
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
