import FooterFour from '@/layout/footer/footer-4';
import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import CheckoutArea from './checkout-area';
import CheckoutBanner from './checkout-banner';
import Header from '@/layout/header/header';
const Checkout = () => {
    return (
        <>
            <Header />
            <CheckoutBanner />
            <CheckoutArea />
            <FooterFour />
            
        </>
    );
};

export default Checkout;