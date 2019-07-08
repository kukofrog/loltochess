import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    margin: 1px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

interface ItemProps {
    item?: {
        image?: string,
        name?: string,
        effect?: string,
        combination?: Object
    };
    index: number[];
}

const Item = ({item, index}: ItemProps) => {
    if(index[0] === 0 && index[1] === 0){
        return (
            <Wrapper />
        )
    }
    return (
        <Wrapper>
            <Img src={item?item.image:``} />
        </Wrapper>
    );
};

export default Item;