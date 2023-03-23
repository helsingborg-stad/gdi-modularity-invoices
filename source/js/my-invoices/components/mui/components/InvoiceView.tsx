import { Button, Typography } from '@helsingborg-stad/municipio-react-ui'
import { Accordion, AccordionSummary, Stack, Chip, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Invoice } from '../../../../about-me-service/AboutMeContext'
import InvoiceDetails from './InvoiceDetails'

const InvoiceView = ({
  data: { label, actions, organization, dueDate, amount, invoiceDate, ocrNumber, autoGiro, isPaid },
}: {
  data: Invoice
}): JSX.Element => (
  <Accordion style={{ maxWidth: 'var(--container-width-content, 760px)' }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Stack
        sx={{ width: 'calc(100% - 16px)' }}
        direction={{ xs: 'row', sm: 'row' }}
        spacing={{ sm: 2 }}>
        <Stack
          sx={{ flex: '2 1 auto' }}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2 }}>
          <Stack sx={{ flex: '1 1 auto' }} className="InvoiceView__Header">
            <Typography as="h4">{label}</Typography>
            <Typography variant="meta" as="span">
              {organization}
            </Typography>
          </Stack>
          <Stack
            sx={{ flex: '1 1 auto' }}
            spacing={{ xs: 1, sm: 2 }}
            direction={{ xs: 'column', sm: 'row' }}>
            <Stack sx={{ flex: '1 1 auto' }}>
              <Typography variant="meta" as="span">
                Betala senast
              </Typography>
              <Typography variant="meta" as="p" gutterTop={false}>
                <b>
                  {Date.parse(dueDate) ? new Date(dueDate).toLocaleDateString('sv-se') : dueDate}
                </b>
              </Typography>
            </Stack>
            <Stack sx={{ flex: '1 1 auto' }}>
              <Typography variant="meta" as="span">
                Summa
              </Typography>
              <Typography variant="meta" as="p" gutterTop={false}>
                <b>
                  {new Intl.NumberFormat('sv-SE', {
                    style: 'currency',
                    currency: 'SEK',
                  }).format(amount / 100)}
                </b>
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{
            justifyContent: 'flex-end',
            alignItems: { xs: 'flex-end', sm: 'center' },
            flex: '1 1 auto',
          }}
          direction="row">
          <Typography className="u-margin__top--0">
            <Chip
              color={isPaid ? 'default' : 'secondary'}
              label={isPaid ? 'Betald' : 'Ej betald'}
            />
          </Typography>
        </Stack>
      </Stack>
    </AccordionSummary>
    <AccordionDetails
      sx={{ borderTop: 1, borderColor: '#0000003d' }}
      className="u-color__bg--lightest u-padding__x--2 u-padding__y--4">
      <div>
        <InvoiceDetails {...{ dueDate, amount, invoiceDate, ocrNumber, autoGiro, isPaid }} />

        {actions?.length && actions?.length > 0 ? (
          <hr
            className="u-margin__y--4"
            style={{
              border: 'solid 1px #0000000f',
              marginLeft: '-18px',
              marginRight: '-18px',
            }}
          />
        ) : null}

        {actions && actions.length > 0 && (
          <div className="u-display--flex u-justify-content--end">
            {actions.map(({ label, url }) => (
              <Button key="label-url" variant="filled" color="primary" href={url} target="_blank">
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </AccordionDetails>
  </Accordion>
)

export default InvoiceView
