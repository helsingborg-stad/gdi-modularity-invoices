import React from 'react'

export interface Case {
  caseId: string
  subjectId: string
  updateTime: string
  label?: string
  description?: string
  status?: string
  statusHint?: string
  organization?: string
  events?: CaseEvent[]
  actions?: CaseAction[]

  invoiceId: string
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
export interface CaseEvent {
  updateTime: string
  label?: string
  description?: string
  status?: string
  statusHint?: string
  actions?: CaseAction[]
}

export interface CaseAction {
  label: string
  url: string
  typeHint?: string
}

export interface AboutMeContextType {
  listCases: () => Promise<Case[]>
}

const notImplemented = () => {
  throw new Error('not implemented')
}

const AboutMeContext = React.createContext<AboutMeContextType>({
  listCases: notImplemented,
})

export default AboutMeContext
