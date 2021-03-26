import {Button, PageHeader} from 'antd'
import logo from 'assets/img/TradeTrendsLogo.svg'

const Header = props => {
  return (
    <PageHeader
      className="main-header"
      onBack={false}
      title={<img src={logo} alt="logo" />}
      extra={
        <>
          <Button>Login In</Button>
          <Button type="primary">Sign up</Button>
        </>
      }
    />
  )
}

export default Header
