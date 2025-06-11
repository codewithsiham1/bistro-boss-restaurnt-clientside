import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// TODO:add publishebel key
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div>
          <Elements stripe={stripePromise}>
           <CheckoutForm></CheckoutForm>
          </Elements>
        </div>
    );
};

export default Payment;