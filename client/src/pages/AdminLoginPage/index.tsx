import React from 'react';

import Input from '../../components/Input';
import { useForm } from '../../Hooks/useForm';

import './AdminLoginPage.scss';

function AdminLoginPage() {
  const [fields, setFields] = useForm({
    name: '',
    email: '',
    password: '',
    rePassword: ''
  });
  const { name, email, password, rePassword } = fields;
  return (
    <div className="admin-log">
      <div className="admin-log__login">
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
      </div>
      <div className="admin-log__register">
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
      </div>
    </div>
  );
}

export default AdminLoginPage;
