import React from 'react';
import CreditCard from '../../assets/icons/CreditCard.svg';
import AppleIcon from '../../assets/icons/Apple.svg';
import PayPal from '../../assets/icons/Paypal.svg';
export const getIconsByName = (name = 'card', color = '#fff') => {
  switch (name) {
    case 'card':
      return <CreditCard style={{color}} />;
    case 'apple':
      return <AppleIcon style={{color}} />;
    case 'paypal':
      return <PayPal style={{color}} />;
    default:
      return <CreditCard style={{color}} />;
  }
};
