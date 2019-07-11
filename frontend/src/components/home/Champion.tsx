import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const ChampImgWrapper = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    overflow: hidden;
    border: 2px solid ${oc.gray[8]};
`

const Cost = styled.p`
    position: absolute;
    z-index: 5;
    text-align: center;
    top: 0;
    right: 0;
    width: 20px;
    height: 15px;
    background-color: ${oc.gray[8]};
    margin: 0;
    margin-left: 5px;
    font-size: 0.5rem;
    color: white;
    text-shadow: -1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000;
`

const ChampImg = styled.img`
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    width: 54px;
    height: 54px;
`

const Champion = () => {
    return (
        <ChampImgWrapper>
            <Cost>$1</Cost>
            <ChampImg src="https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Kassadin.png" />
        </ChampImgWrapper>
    );
};

export default Champion;