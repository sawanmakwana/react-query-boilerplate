import {useClient} from 'hooks/useClient'
import {useQuery} from 'react-query'

function useQueryMiddleware({data, dynamicKeys = []}, configObject = {}, params = {}) {
  const client = useClient()
  const queryKeys = Object.keys(params)
  const string = queryKeys
    .filter(key => params[key])
    .map(key => `${key}=${params[key]}`)
    .join('&')
  const paramString = Object.keys(params).length > 0 ? `?${string}` : ''

  return useQuery({
    queryKey: [...data.keys, ...dynamicKeys],
    queryFn: () =>
      client(data.endpoint + paramString, {
        apiURL: data.authURL,
      }),
    ...configObject,
  })
}

export {useQueryMiddleware}
