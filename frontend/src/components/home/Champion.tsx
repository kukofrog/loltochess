import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

interface  Props {
    cost?: number
}

const ChampImgWrapper = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    overflow: hidden;
    border: 2px solid ${(props: Props) => {
            switch(props.cost){
                case 1: return oc.gray[8];
                case 2: return oc.teal[8];
                case 3: return oc.blue[8];
                case 4: return oc.violet[8];
                case 5: return oc.yellow[8];
            }
        }
    };
`

const Cost = styled.p`
    position: absolute;
    z-index: 5;
    text-align: center;
    top: 0;
    right: 0;
    width: 20px;
    height: 15px;
    background-color: ${(props: Props) => {
            switch(props.cost){
                case 1: return oc.gray[8];
                case 2: return oc.teal[8];
                case 3: return oc.blue[9];
                case 4: return oc.violet[9];
                case 5: return oc.yellow[7];
            }
        }
    };
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

interface ChampionProps {
    champ: {
        cost: number,
        icon: string
    }
}

const Champion = ({champ}: ChampionProps) => {
    return (
        <ChampImgWrapper cost={champ.cost}>
            <Cost cost={champ.cost}>${champ.cost}</Cost>
            <ChampImg src={champ.icon} />
        </ChampImgWrapper>
    );
};

export default Champion;