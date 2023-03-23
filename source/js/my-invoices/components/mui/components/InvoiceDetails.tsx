import { Typography } from '@helsingborg-stad/municipio-react-ui'

const InvoiceDetailsList = ({
  items,
}: {
  items: {
    label: string
    value: string
  }[]
}) => (
  <ul className="invoice-details-list unlist">
    {items.map(({ label, value }) => (
      <li className="invoice-details-list__item">
        <Typography className="invoice-details-list__label">{label}:</Typography>
        <Typography className="invoice-details-list__value">{value}</Typography>
      </li>
    ))}
  </ul>
)

const InvoiceDetails = ({
  dueDate,
  amount,
  invoiceDate,
  ocrNumber,
  autoGiro,
  isPaid,
}: {
  dueDate: string
  amount: number
  invoiceDate: string
  ocrNumber: string
  autoGiro: string
  isPaid: boolean
}) => (
  <div className="o-grid">
    <div className="o-grid-12 o-grid-8@sm">
      <InvoiceDetailsList
        items={[
          {
            label: 'Fakturadatum',
            value: invoiceDate,
          },
          {
            label: 'Betala senast',
            value: dueDate,
          },
          {
            label: 'Betald datum',
            value: '-',
          },
          {
            label: 'OCR - nummer',
            value: ocrNumber,
          },
          {
            label: 'Bankgiro/ Autogiro',
            value: autoGiro,
          },
        ]}
      />
    </div>
    <div className="o-grid-12 o-grid-4@md o-grid-4@lg">
      <Typography as="span" variant="meta">
        Att betala:
      </Typography>
      <Typography as="p" variant="h1" gutterTop={false}>
        {new Intl.NumberFormat('sv-SE', {
          style: 'currency',
          currency: 'SEK',
        }).format(amount / 100)}
      </Typography>
    </div>
  </div>
)

export default InvoiceDetails
