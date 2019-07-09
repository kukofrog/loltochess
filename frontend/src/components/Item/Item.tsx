import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import NormalItem from 'data/NormalItem';

interface Props {
    normal?: number,
    itemState?: string | null
}

const HoverDiv = styled.div`
    display: none;
    position: absolute;
    bottom: 80px;
    left: 0;
    width: 300px;
    background: ${oc.gray[8]};
`

const HoverWrapper = styled.div`
    padding: 10px;
`

const HoverName = styled.p`
    color: ${oc.yellow[7]};
    margin: 0;
    font-size: 1rem;
`

const HoverEffect = styled.p`
    color: white;
    margin: 0;
    font-size: 1rem;
`

const HoverNormalEffect = styled.p`
    color: ${oc.gray[6]};
    margin: 0;
    font-size: 0.8rem;
`

const HoverIconWrapper = styled.div`
    display: flex;
`

const HoverIcon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const Wrapper = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    margin: 3px;
    &:hover{
        ${HoverDiv} {
            display: block;
        }
    }
    cursor: pointer;
`

const Mask = styled.div`
    width: 100%;
    height: 100%;
    ${(props: Props) => props.itemState === 'none'?`opacity: 0.2;`:``};
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${(props: Props) => props.normal?`border-radius:50%`:``}
`

interface ItemProps {
    item?: {
        image?: string,
        name?: string | null,
        effect?: string,
        combination?: {
            first_item: {
                image: string,
                name: string
            },
            second_item: {
                image: string,
                name: string
            }
        }
    } | null;
    index: number[];
    select?: number[] | null;
    setSelect?: any;
}

const Item = ({item, index, select, setSelect}: ItemProps) => {
    const [itemState, setItemState] = useState<string | null>(null);

    useEffect(() => {
        if(select == null){
            setItemState(null);
            return;
        }
        else if(select[0] === index[0] && select[1] === index[1]) {
            setItemState('selected');
            return;
        }
        else if((select[0] === index[0] && index[1] === 0) || (select[1] === index[1] && index[0] === 0)){
            setItemState('material');
        }
        else if((select[0] === index[0] && index[0] !== 0) || (select[1] === index[1] && index[1] !== 0) || (select[0] === 0 && index[1] === 0) || (select[1] === 0 && index[0] === 0)){
            setItemState('line');
        }
        else {
            setItemState('none');
        }
    }, [select])

    if(item == null){
        return (
            <Wrapper />
        )
    }

    const CombinationItemInfo = () => {
        if(item.combination && index[0] !== 0 && index[1] !== 0){
            return (
                <>
                    <HoverNormalEffect>{index[1] !== 8?NormalItem[index[1]-1].effect:``}</HoverNormalEffect>
                    <HoverNormalEffect>{index[0] !== 8?NormalItem[index[0]-1].effect:``}</HoverNormalEffect>
                    <HoverIconWrapper>
                        <HoverIcon src={item.combination.first_item.image} />
                        <HoverEffect> + </HoverEffect>
                        <HoverIcon src={item.combination.second_item.image} />
                    </HoverIconWrapper>
                </>
            );
        }
    }

    const handleSelect = () => {
        if(select == null) {
            setSelect(index)
        }
        else if(select[0] === index[0] && select[1] === index[1]) {
            setSelect(null)
        }
        else {
            setSelect(index)
        }
    }

    return (
        <Wrapper onClick={handleSelect}>
            <HoverDiv>
                <HoverWrapper>
                    <HoverName>{item.name}</HoverName>
                    <HoverEffect>{item.effect}</HoverEffect>
                    {CombinationItemInfo()}
                </HoverWrapper>
            </HoverDiv>
            <Mask itemState={itemState}>
                <Img src={item?item.image:``} normal={index[0] === 0 || index[1] === 0?1:0}/>
            </Mask>
        </Wrapper>
    );
};

export default Item;