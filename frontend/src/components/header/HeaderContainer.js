import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Link, NavLink } from 'react-router-dom';

const Positioner = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 10;
`

const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
    //box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
`;

const HeaderContents = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
`;

const Logo = styled(Link)`
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-weight: bold;
    &:link{
        color: ${oc.gray[9]};
        text-decoration: none;
    }
    &:visited{
        color: ${oc.gray[9]};
        text-decoration: none;
    }
    &:hover{
        color: ${oc.indigo[7]};
    }
`;

const NavContainer = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
`

const NavItem = styled(NavLink)`
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-weight: bold;
    &:link{
        color: ${oc.gray[9]};
        text-decoration: none;
    }
    &:visited{
        color: ${oc.gray[9]};
        text-decoration: none;
    }
    &:hover{
        color: ${oc.indigo[7]};
    }
    &.active {
        color: ${oc.indigo[7]};
    }
`;

const HeaderContainer = () => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo to='/'>lolto.net</Logo>
                    <NavContainer>
                        <NavItem to='/item' activeClassName="active">아이템</NavItem>
                    </NavContainer>
                </HeaderContents>
            </WhiteBackground>
        </Positioner>
    );
};

export default HeaderContainer;