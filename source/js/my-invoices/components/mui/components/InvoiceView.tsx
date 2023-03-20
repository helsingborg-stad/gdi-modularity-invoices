import { Button, Typography } from '@helsingborg-stad/municipio-react-ui'
import { Accordion, AccordionSummary, Stack, Chip, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Case } from '../../../../about-me-service/AboutMeContext'
import InvoiceEvents from './InvoiceEvents'

const InvoiceView = ({
  data: { events, label, updateTime, status, statusHint, actions, organization },
}: {
  data: Case
}): JSX.Element => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Stack
        sx={{
          width: { sm: 'calc(100% - 16px)' },
          alignItems: { sm: 'center' },
          justifyContent: { sm: 'space-between' },
        }}
        spacing={{ xs: 1.5, sm: 2 }}
        direction={{ xs: 'column', sm: 'row' }}>
        <Stack direction="column" spacing={0}>
          <Typography as="h4" gutterBottom>
            {label}
          </Typography>
          <Typography variant="meta" as="span">
            {organization}
          </Typography>
          <Typography variant="meta" className="u-margin__top--1">
            {Date.parse(updateTime) ? new Date(updateTime).toLocaleDateString('sv-se') : updateTime}
          </Typography>
        </Stack>
        <div className="u-margin__left--auto@md u-margin__right--2@md u-margin__y--1@md u-display--flex u-align-items--center">
          <Typography className="u-margin__top--0">
            {status && <Chip color="secondary" label={status} />}
          </Typography>
        </div>
      </Stack>
    </AccordionSummary>
    <AccordionDetails
      sx={{ borderTop: 1, borderColor: '#0000003d' }}
      className="u-color__bg--lightest u-padding__x--2 u-padding__y--4">
      {events && <InvoiceEvents events={events ?? []} />}
      {actions?.length && events?.length && events?.length > 0 && actions?.length > 0 ? (
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
    </AccordionDetails>
  </Accordion>
)

export default InvoiceView
