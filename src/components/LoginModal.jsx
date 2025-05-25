import { useState, useRef } from 'react';
import './LoginModal.css';

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [mode, setMode] = useState('login');

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Введите имя пользователя';
    }
    if (!password.trim()) {
      errors.password = 'Введите пароль';
    } else if (password.length < 6 && mode === 'register') {
      errors.password = 'Пароль должен быть не менее 6 символов';
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      if (errors.username) {
        usernameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        usernameRef.current.focus();
      } else if (errors.password) {
        passwordRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        passwordRef.current.focus();
      }
      return;
    }

    const url = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
    try {
      const response = await fetch(`http://localhost:5000${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка сервера');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      onLoginSuccess({ username: data.username, token: data.token });
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="log-modal-overlay" onClick={onClose}>
      <div className="log-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{mode === 'login' ? 'Авторизация' : 'Регистрация'}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            ref={usernameRef}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите имя пользователя"
            className="form-input"
            style={{ borderColor: fieldErrors.username ? 'red' : undefined }}
            required
          />
          {fieldErrors.username && <p className="error-message">{fieldErrors.username}</p>}

          <input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className="form-input"
            style={{ borderColor: fieldErrors.password ? 'red' : undefined }}
            required
          />
          {fieldErrors.password && <p className="error-message">{fieldErrors.password}</p>}

          <button type="submit" className="submit-button">
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <button
          type="button"
          onClick={() => {
            setError('');
            setFieldErrors({});
            setMode(mode === 'login' ? 'register' : 'login');
          }}
          className="toggle-mode-button"
        >
          {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
        </button>

        <button className="log-close-button" onClick={onClose} aria-label="Закрыть">
          ×
        </button>
      </div>
    </div>
  );
}

export default LoginModal;