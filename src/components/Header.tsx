import logo from '../assets/logo.png'

const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 border-b-2 border-blue bg-off-white-light pb-8 pt-8 z-10">
      <img className="logo mx-auto w-56" src={logo} alt="logo" />
    </header>
  )
}

export default Header
