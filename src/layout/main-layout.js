import HeaderLoggedIn from 'components/header/header-loggedin'
import HeaderLoggedOut from 'components/header/header-logout'

const MainLayout = ({children, auth = false}) => {
  return (
    <>
      {auth ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <div className="trend-body">{children}</div>
    </>
  )
}

export default MainLayout
