import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import './PaymentPage.scss';

const PaymentPage = ({ match }) => {
  const history = useHistory();

  console.log('oooooo--', match.params.bookingInfo);

  const toPay = () => {
    history.push('/');
  };

  return (
    <div className="pay">
      <div className="pay__head">This is payment page</div>
      <div className="pay__body">
        <Button text="Confirm & pay" modifier="small" handleClick={toPay} />
      </div>
    </div>
  );
};

export default PaymentPage;
