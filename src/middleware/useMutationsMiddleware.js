import {useClient} from '@/hooks/useClient'
import {useMutation, useQueryClient} from 'react-query'

function useMutationsMiddleware({endpoint, keys}, {onSuccess = () => {}}, ...rest) {
  const client = useClient()
  const queryClient = useQueryClient()

  return useMutation(data => client(endpoint, {data}), {
    onSuccess: () => {
      if (keys.length > 0) {
        queryClient.invalidateQueries(keys)
      }
      onSuccess()
    },
    ...rest,
  })
}

export {useMutationsMiddleware}
