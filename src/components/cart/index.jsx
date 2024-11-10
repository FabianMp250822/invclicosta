import FooterFour from '@/layout/footer/footer-4';
import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import CartArea from './cart-area';
import CartBanner from './cart-banner';
import Header from '@/layout/header/header';

const Cart = () => {
    return (
        <>
            <Header />
            <CartBanner />
            <CartArea />
            <FooterFour />
        </>
    );
};

export default Cart;