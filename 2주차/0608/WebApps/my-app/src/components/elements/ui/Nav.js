import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Icon from './Icon';

export default function Nav() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">

            <Logo />
            <Menu />
            <Icon />
            
        </header>
    );
}