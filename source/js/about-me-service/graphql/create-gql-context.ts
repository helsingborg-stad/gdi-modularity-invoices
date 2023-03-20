import axios from 'axios'
import { AboutMeContextType } from '../AboutMeContext'

const queryCases = `
query Cases {
  me {
    id
    cases {
      caseId
      description
      label
      statusHint
      subjectId
      updateTime
      status
      organization
      events {
        label
        description
        status
        statusHint
        updateTime
        actions{
        	label
        	url
          typeHint
        }
      }
      actions{
        label
        url
        typeHint
      }
    }
  }
}
`;
const gql = (uri: string, query: string, variables: object, headers: object = {}) => axios({
  method: 'post',
  url: `${uri}`,
  data: {
    query,
    variables,
  },
  headers,
})


const tryGetAuthorizationHeaders = async () => {
  const { token } = await window.gdiHost.getAccessToken()
  return token ? {
    Authorization: `Bearer ${token}`,
  } : {}
}

export const createGqlContext = (uri: string): AboutMeContextType => ({
  listCases: () =>
    tryGetAuthorizationHeaders()
      .then(headers => gql(uri, queryCases, {}, headers))
      .then(response => response?.data?.data?.me?.cases || [])
})
