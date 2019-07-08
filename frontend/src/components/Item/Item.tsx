import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

interface Props {
    normal?: number
}

const Wrapper = styled.div`
    width: 50px;
    height: 50px;
    margin: 1px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${(props: Props) =>props.normal?`border-radius:50%`:``}
`

interface ItemProps {
    item?: {
        image?: string,
        name?: string,
        effect?: string,
        combination?: Object
    } | null;
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
            <Img src={item?item.image:``} normal={index[0] === 0 || index[1] === 0?1:0}/>
        </Wrapper>
    );
};

export default Item;