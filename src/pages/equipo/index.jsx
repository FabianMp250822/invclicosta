import FooterFour from '@/layout/footer/footer-4';
import HeaderTwo from '@/layout/header/header-two';
import React from 'react';
import CartArea from './cart-area';
import CartBanner from './cart-banner';

import Teams from '@/common/teams';

const Equipo = () => {
    return (
        <>
            <HeaderTwo />
            <CartBanner />
            <Teams />
            <FooterFour />
        </>
    );
};

export default Equipo;