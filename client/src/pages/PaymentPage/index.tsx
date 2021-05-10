import React, { useState, ChangeEvent } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import PaymentCard from 'react-payment-card-component';

import Button from '../../components/Button';
import { useForm } from '../../Hooks/useForm';
import Input from '../../components/Input';

import './PaymentPage.scss';

const PaymentPage = () => {
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
      background: '#fea49f',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  const openModal = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="pay">
      <h1 className="pay__heading">Make payment</h1>
      <div className="pay__body">
        <div className="pay__card-div">
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
        </div>
        <form className="pay__form">
          <Input
            type="number"
            id="number"
            value={fields.number}
            handleInputChange={setFields}
            placeholder="Number of your bank card"
            label="Card Number"
          />
          <Input
            type="text"
            id="name"
            value={fields.name}
            handleInputChange={setFields}
            placeholder="Card holder's name"
            label="Name"
          />
          <Input
            type="month"
            id="expiry"
            value={fields.expiry}
            handleInputChange={setFields}
            placeholder={placeholder}
            modifier="month"
            handleFocus={() => setPlaceholder('')}
            label="Expiry date"
          />
          <Input
            type="text"
            id="cvv"
            value={fields.cvv}
            handleInputChange={setFields}
            handleFocus={() => setFlipped(true)}
            handleBlur={() => setFlipped(false)}
            placeholder="Card CVC"
            minLength={3}
            maxLength={3}
            label="CVC"
          />
          <Button text="Confirm & pay" modifier="small" handleClick={openModal} />
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
              <Button modifier="small" text="OK" handleClick={() => history.push('/')} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PaymentPage;
