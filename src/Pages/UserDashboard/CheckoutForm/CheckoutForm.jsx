import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Usecart from '../../../Hooks/Usecart';
import Useauth from '../../../Hooks/Useauth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const [error,setError]=useState('')
    const [clientSecret,setClientsecret]=useState('')
    const stripe=useStripe();
    const elements=useElements();
    const [cart,refetch]=Usecart();
    const totalprice=cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure=UseAxiosSecure();
    const {user}=Useauth();
    const navigate=useNavigate()
    const [transactionId, setTransactionId] = useState('')
    // useefect dia backend thakay data load
    useEffect(() => {
      if (totalprice > 0) {
        axiosSecure.post('/create-checkout-session', { price: totalprice })
          .then((res) => {
            console.log(res.data.clientSecret);
            setClientsecret(res.data.clientSecret);
          });
      }
    }, [axiosSecure, totalprice]);
    const handleSubmit=async(event)=>{
    event.preventDefault()
    if(!stripe || !elements){
        return
    }

    const card=elements.getElement(CardElement)
      if (card == null) {
      return;
    }
    const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:"card",
        card
    })
    if(error){
        console.log('payment error',error)
        setError(error.message)
    }
    else{
        console.log('payment method',paymentMethod)
        setError('')
    }
    // confirm payment
    const {paymentIntent,error:confirmerror}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
             email:user?.email || "anyonmous",
             name:user?.displayName || "anyonmous",
            }
        }
    })
    if(confirmerror){
        console.log("confirm error")
    }
    else{
        console.log('paymentIntent',paymentIntent)
        if(paymentIntent.status==='succeeded'){
            console.log("transction id",paymentIntent.id)
            setTransactionId(paymentIntent.id)
            // now save in the database
            const payment={
                email:user.email,
                price:totalprice,
                date:new Date(),
                transactionId:paymentIntent.id,
                cardId:cart.map(item=>item._id),
                menuIdItem:cart.map(item=>item.menuId),
                status:"pending"
            }
          const res=await axiosSecure.post("/payments",payment)
          console.log("payment saved",res.data)
          refetch()
          if(res.data?.paymentresult?.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thanks For Payment",
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/dashboard/paymenthistory")
          }
        }
    }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
 <button className='btn btn-primary btn-sm my-4' type="submit" disabled={!stripe || !clientSecret}>
  Pay
</button>
      <p className='text-red-600'>{error}</p>
      {transactionId &&<p className='text-green-600'> Your Transction id:{transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;