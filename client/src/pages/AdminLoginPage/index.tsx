import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useForm } from '../../Hooks/useForm';

import './AdminLoginPage.scss';
import { createAccount, login } from '../../services/adminServices';

function AdminLoginPage({ setLog }) {
  const history = useHistory();
  const [pageView, setPageView] = useState('login');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('error');
  const [fields, setFields] = useForm({
    name: '',
    email: '',
    password: '',
    rePassword: ''
  });
  const { name, email, password, rePassword } = fields;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
    } else {
      login({ email, password })
        .then((res) => {
          if (res.data) {
            setLog(true);
            localStorage.setItem('venue-app', JSON.stringify(res.data));
            history.push('/admin');
          }
        })
        .catch((error) => {
          error.response ? setError(error.response.data.error) : setError('Uknown Error');
        });
    }
  };
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('All fields are required');
    } else {
      if (password !== rePassword) {
        setError('Password not matched');
      } else {
        await createAccount({ name, email, password })
          .then((res) => {
            res.data && setIsModalOpen(true);
          })
          .catch((error) => {
            error.response ? setError(error.response.data.error) : setError('Uknown Error');
          });
      }
    }
  };

  const customStyles = {
    content: {
      background: '#3aafa9',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <div className="admin-log">
      {pageView === 'login' && (
        <form className="admin-log__form">
          <h1 className="admin-log__heading">Log In</h1>
          <p
            className={
              error !== 'error' ? 'admin-log__error' : 'admin-log__error admin-log__error--hide'
            }
          >
            {error}
          </p>
          <Input
            type="text"
            handleInputChange={setFields}
            placeholder="Email"
            id="email"
            value={email}
          />
          <Input
            type="password"
            handleInputChange={setFields}
            placeholder="Password"
            id="password"
            value={password}
          />
          <Button text="Login" modifier="small" handleClick={handleLogin} />
          <p className="admin-log__text">
            Create a new account?{' '}
            <span className="admin-log__link" onClick={() => setPageView('register')}>
              Create
            </span>
          </p>
        </form>
      )}

      {pageView === 'register' && (
        <form className="admin-log__form">
          <h1 className="admin-log__heading">Create an Account</h1>
          <p
            className={
              error !== 'error' ? 'admin-log__error' : 'admin-log__error admin-log__error--hide'
            }
          >
            {error}
          </p>
          <Input
            type="text"
            handleInputChange={setFields}
            placeholder="Full Name"
            id="name"
            value={name}
          />
          <Input
            type="text"
            handleInputChange={setFields}
            placeholder="Email"
            id="email"
            value={email}
          />
          <Input
            type="password"
            handleInputChange={setFields}
            placeholder="Password"
            id="password"
            value={password}
          />
          <Input
            type="password"
            handleInputChange={setFields}
            placeholder="Re-Password"
            id="rePassword"
            value={rePassword}
          />
          <Button text="Create Account" modifier="small" handleClick={handleCreateAccount} />
          <p className="admin-log__text">
            Already have an account?{' '}
            <span className="admin-log__link" onClick={() => setPageView('login')}>
              Login
            </span>
          </p>
        </form>
      )}
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div onClick={() => setIsModalOpen(false)} className="close">
          X
        </div>
        <div className="content">
          <h3 className="content__title">REGISTRATION SUCCESSFULL</h3>
          <p className="content__text">
            Congratulations! you have become an admin. Login and start creating and managing venues{' '}
          </p>
          <Button
            modifier="small"
            text="Go to Login"
            handleClick={() => {
              setPageView('login');
              setIsModalOpen(false);
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default AdminLoginPage;
