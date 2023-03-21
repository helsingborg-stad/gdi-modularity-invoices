import { useMemo } from 'react'
import AboutMeContext, { AboutMeContextType } from './about-me-service/AboutMeContext'
import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'
import { createGqlContext } from './about-me-service/graphql/create-gql-context'
import MyInvoices from './my-invoices/MyInvoices'
import { ThemeProvider, createTheme } from '@mui/material/styles'

interface Props {
  aboutMeGraphQLUri: string
  aboutMeGraphQLJson: string
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#76232f',
    },
    secondary: {
      main: '#fbccd8',
    },
  },
})

const createFakeGQLContext = (invoices: any[]): AboutMeContextType => ({
  listInvoices: async () => invoices || [],
})

function App({ aboutMeGraphQLUri, aboutMeGraphQLJson }: Props): JSX.Element {
  const provider = useMemo(
    () =>
      aboutMeGraphQLJson
        ? createFakeGQLContext(JSON.parse(aboutMeGraphQLJson))
        : aboutMeGraphQLUri
        ? createGqlContext(aboutMeGraphQLUri)
        : createFakeGQLContext([]),
    [aboutMeGraphQLUri, aboutMeGraphQLJson],
  )

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AboutMeContext.Provider value={provider}>
          <MyInvoices />
        </AboutMeContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default App
