const commonKeys = ['financial']

const apiRequest = {
  eodFinancialData: {
    keys: [...commonKeys, 'list'],
    endpoint: 'eodFinancialData/query',
  },
  eodFinancialSearch: {
    keys: [...commonKeys, 'list'],
    endpoint: 'eodFinancialData/search',
  },
}
export {apiRequest}
