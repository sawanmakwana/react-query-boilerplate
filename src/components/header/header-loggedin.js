import {Input, PageHeader} from 'antd'
import {apiRequest} from 'api/financial-data'
import logo from 'assets/img/TradeTrendsLogo.svg'
import {useQueryMiddleware} from 'middleware/useQueryMiddleware'
import {useState} from 'react'

const {Search} = Input

const HeaderLoggedIn = props => {
  const [search, setSearch] = useState('')

  // eslint-disable-next-line no-unneeded-ternary
  const {data = []} = useQueryMiddleware(
    {data: apiRequest.eodFinancialSearch, dynamicKeys: [search]},
    {enabled: Boolean(search.length)},
    {searchTerm: search}
  )

  console.log({data})

  return (
    <PageHeader
      className="main-header"
      onBack={false}
      title={<img src={logo} alt="logo" />}
      extra={<Search placeholder="Search symbols or companies" enterButton onSearch={value => setSearch(value)} />}
    />
  )
}

export default HeaderLoggedIn
