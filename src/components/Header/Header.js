import logo from '../../images/logo-white.svg';
import light from '../../images/light-white.svg';

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="logo" className="header__logo" />
      </a>
      <button className="header__button">
        <img src={light} alt="light" />
      </button>
    </div>
  );
}

export default Header;