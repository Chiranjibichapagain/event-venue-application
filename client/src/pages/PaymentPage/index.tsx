import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import PaymentCard from 'react-payment-card-component';

import Button from '../../components/Button';
import { useForm } from '../../Hooks/useForm';
import Input from '../../components/Input';

import './PaymentPage.scss';

const PaymentPage = ({ match }) => {
  const history = useHistory();
  const [flipped, setFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState('Month/Year');
  const [fields, setFields] = useForm({
    number: '',
    name: '',
    cvv: '',
    expiry: 'Month-Year'
  });

  const customStyles = {
    content: {
      background: '#195e4b',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <div className="pay">
      <h1 className="pay__head">Make payment</h1>
      <div className="pay__body">
        <PaymentCard
          bank="itau"
          type="gold"
          brand="visa"
          number={fields.number.substring(0, 15)}
          cvv={fields.cvv.substring(0, 3)}
          holderName={fields.name}
          expiration={fields.expiry.replace('-', '/')}
          flipped={flipped}
        />
        <form className="pay__form">
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
            type="month"
            id="expiry"
            value={fields.expiry}
            handleInputChange={setFields}
            placeholder={placeholder}
            modifier="month"
            handleFocus={() => setPlaceholder('')}
          />
          <Input
            type="text"
            id="cvv"
            value={fields.cvv}
            handleInputChange={setFields}
            handleFocus={() => setFlipped(true)}
            handleBlur={() => setFlipped(false)}
            placeholder="CVV"
            minLength={3}
            maxLength={3}
          />
          <Button text="Confirm & pay" modifier="small" handleClick={() => setIsModalOpen(true)} />
        </form>
        <Modal isOpen={isModalOpen} style={customStyles}>
          <div onClick={() => setIsModalOpen(false)} className="close">
            X
          </div>
          <div className="confirm-modal">
            <h1 className="confirm-modal__title">BOOKING SUCCESSFULL!</h1>
            <p className="confirm-modal__text">
              <b>Booking succeeded!</b> <br /> You will shortly recieve a confirmation message in
              your email.{' '}
            </p>
            <div className="confirm-modal__btn-div">
              <Button modifier="small" text="OK" handleClick={() => history.push('/products')} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PaymentPage;
