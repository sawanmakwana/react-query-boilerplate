import {GlobalContext} from 'context/global-context'
import {useState} from 'react'
import {MutationCache, QueryCache, QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter} from 'react-router-dom'
import {AppRoutes} from 'routes/app-routes'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const mutationCache = new MutationCache({
    onError(error, variables, context, mutation) {
      if (mutation.options.fromAuth) {
        // return vmoToast.error(error.message)
      }

      // vmoToast.error(error.message)
    },
  })

  const queryCache = new QueryCache({
    onError(error, query) {
      console.log()
      // vmoToast.error(error.message)
    },
  })

  const queryClient = new QueryClient({
    mutationCache,
    queryCache,
    defaultOptions: {
      queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry(failureCount, error) {
          if (error.statusCode === 404) return false
          if (failureCount < 2) return true
          return false
        },
      },
    },
  })

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
          <AppRoutes />
        </GlobalContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
