import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_lOCqgV8j6HiwVuCOEHhQLx2Y00uANQXnzC';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfully');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
