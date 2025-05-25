import logo from './logo.jpg';
import './Header.css';

function Header({ onClick, user, onLogout }) {
  return (
    <header className='header'>
      <img className='logo-image' src={logo} alt="Логотип сайта" />
      <h1 className='title'>Заброшенные места из разных стран, которые стоит увидеть</h1>
      
      <div className="user-actions">
        {user && user.isAuthenticated ? (
          <div className="user-info">
            <span className="username">Привет, {user.name}!</span>
            <button className="logout-btn" onClick={onLogout}>
              Выйти
            </button>
          </div>
        ) : (
          <button className='button-login' onClick={onClick} type="button">
            Войти в аккаунт
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;