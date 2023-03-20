import {
  Typography,
  TimelineItem,
  TimelineConnector,
  TimelineBody,
  TimelineHeader,
  TimelineTitle,
  Button,
  TimelineSecondary,
} from '@helsingborg-stad/municipio-react-ui'

const InvoiceEventView = ({
  title,
  date,
  description = undefined,
  active = false,
  actions = [],
}: {
  title: string
  date: string
  description?: string
  active?: boolean
  actions?: {
    text: string
    url: string
  }[]
}) => (
  <TimelineItem active={active} muted={!active}>
    <TimelineConnector />
    <TimelineBody style={{ minWidth: '0' }}>
      <TimelineHeader>
        <TimelineTitle as="h5" variant="p">
          {title}
        </TimelineTitle>
        {description && (
          <div>
            <Typography as="p" variant="meta">
              {description}
            </Typography>
          </div>
        )}
      </TimelineHeader>
      {actions.map(({ text, url }, i) => (
        <Button
          key={`${text}-${url}`}
          as="a"
          href={url}
          variant="basic"
          target="_blank"
          color="primary">
          {text}
        </Button>
      ))}
    </TimelineBody>
    <TimelineSecondary>
      <Typography as="p" variant="meta" gutterTop={false}>
        {date}
      </Typography>
    </TimelineSecondary>
  </TimelineItem>
)

export default InvoiceEventView
