import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { useForm } from '../../Hooks/useForm';

import './AdminLoginPage.scss';

function AdminLoginPage() {
  const history = useHistory();
  const [pageView, setPageView] = useState('login');
  const [fields, setFields] = useForm({
    name: '',
    email: '',
    password: '',
    rePassword: ''
  });
  const { name, email, password, rePassword } = fields;

  const handleLogin = () => {
    history.push('/admin');
  };
  const handleCreateAccount = () => {
    console.log('created!!');
  };

  return (
    <div className="admin-log">
      {pageView === 'login' && (
        <div className="admin-log__form">
          <h1 className="admin-log__heading">Log In</h1>
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
        </div>
      )}

      {pageView === 'register' && (
        <div className="admin-log__form">
          <h1 className="admin-log__heading">Create an Account</h1>
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
            id="rePpassword"
            value={rePassword}
          />
          <Button text="Create Account" modifier="small" handleClick={handleCreateAccount} />
          <p className="admin-log__text">
            Already have an account?{' '}
            <span className="admin-log__link" onClick={() => setPageView('login')}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default AdminLoginPage;
