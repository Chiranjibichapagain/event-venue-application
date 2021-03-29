import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PaymentCard from 'react-payment-card-component';

import Button from '../../components/Button';
import { useBookingForm } from '../../Hooks/useBookingForm';
import Input from '../../components/Input';

import './PaymentPage.scss';

const PaymentPage = ({ match }) => {
  const history = useHistory();
  const [flipped, setFlipped] = useState(false);
  const [fields, setFields] = useBookingForm({
    number: '',
    name: '',
    cvv: '',
    expiry: ''
  });

  console.log('oooooo--', flipped);

  const toPay = () => {
    history.push('/');
  };

  return (
    <div className="pay">
      <div className="pay__head">This is payment page</div>
      <div className="pay__body">
        <PaymentCard
          bank="itau"
          type="black"
          brand="visa"
          number={fields.number}
          cvv={fields.cvv}
          holderName={fields.name}
          expiration={fields.expiry.replace('-', '/')}
          flipped={flipped}
        />
        <form>
          <Input
            type="number"
            id="number"
            value={fields.number}
            handleInputChange={setFields}
            placeholder="Card Number"
          />
          <Input
            type="text"
            id="name"
            value={fields.number}
            handleInputChange={setFields}
            placeholder="Card holder's name"
          />
          <Input
            type="text"
            id="cvv"
            value={fields.cvv}
            handleInputChange={setFields}
            handleClick={() => setFlipped(true)}
            placeholder="CVV"
            minLength={3}
            maxLength={3}
          />
          <Input
            type="month"
            id="expiry"
            value={fields.expiry}
            handleInputChange={setFields}
            placeholder="Month"
          />
        </form>
        <Button text="Confirm & pay" modifier="small" handleClick={toPay} />
      </div>
    </div>
  );
};

export default PaymentPage;
