import React from 'react';
import { 
    HeaderWrapper, 
    HeaderButton, 
    HeaderContainer, 
    LogoText,
    Logo } from './style'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Logo>
                    <svg width="63" height="34" viewBox="0 0 63 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="31.5" cy="17" rx="31.5" ry="17" fill="#566885" />
                    </svg>
                    <LogoText>MERN CLOUD</LogoText>
                </Logo>
                <div className="header__right">
                    <HeaderButton>Log In</HeaderButton>
                    <HeaderButton>Sign Up</HeaderButton>
                </div>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;

