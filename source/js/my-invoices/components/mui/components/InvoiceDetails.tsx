import { Typography } from '@helsingborg-stad/municipio-react-ui'

const InvoiceDetails = ({
  dueDate,
  amount,
  invoiceDate,
  ocrNumber,
  autoGiro,
}: {
  dueDate: string
  amount: number
  invoiceDate: string
  ocrNumber: string
  autoGiro: string
}) => (
  <div>
    <div>
      <Typography as="span" variant="meta">
        Att betala:
      </Typography>
      <Typography as="p" variant="h2">
        {amount}
      </Typography>
    </div>
    <div>
      <ul className="unlist">
        <li>
          <Typography as="p">
            Fakturadatum: <b>{invoiceDate}</b>
          </Typography>
        </li>
        <li>
          <Typography as="p">
            Betala senast: <b>{dueDate}</b>
          </Typography>
        </li>
        <li>
          <Typography as="p">
            Betald datum: <b>-</b>
          </Typography>
        </li>
        <li>
          <Typography as="p">
            OCR - nummer: <b>{ocrNumber}</b>
          </Typography>
        </li>
        <li>
          <Typography as="p">
            Bankgiro/ Autogiro: <b>{autoGiro}</b>
          </Typography>
        </li>
      </ul>
    </div>
  </div>
)

export default InvoiceDetails
