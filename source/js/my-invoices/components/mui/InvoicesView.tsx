import { useState } from 'react'
import { Case } from '../../../about-me-service/AboutMeContext'
import { sortyBy } from '../../../util'
import InvoicesTabView from './components/InvoicesTabView'

const normalizeCases = (cases: Case[]): Case[] =>
  sortyBy(cases, (c) => c.updateTime, 'desc').map((c) => ({
    ...c,
    events: sortyBy(c.events || [], (e) => e.updateTime, 'desc'),
  }))

const InvoicesView = ({ cases }: { cases: Case[] }): JSX.Element => {
  const [normalizedCases] = useState(normalizeCases(cases))
  return <InvoicesTabView cases={normalizedCases} />
}

export default InvoicesView
