import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import NormalItem from 'data/NormalItem';

interface Props {
    normal?: number,
    itemState?: string | null,
    hover?: boolean
}

const Wrapper = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    margin: 3px;
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
`

const HoverDiv = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 80px;
    left: 0;
    width: 300px;
    background: ${oc.gray[8]};
    opacity: 0.95;
    display: ${(props: Props) => props.hover?`block`:`none`};
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

interface ItemProps {
    item?: {
        image?: string,
        name?: string | null,
        effect?: string,
        combination: {
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
}

const JustItem = ({item}: ItemProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const [firstEffect, setFirstEffect] = useState<string>('');
    const [secondEffect, setSecondEffect] = useState<string>('');

    useEffect(() => {
        if(item == null){
            return;
        }
        const firstItem = NormalItem.find((i) => i.name === item.combination.first_item.name);
        const secondItem = NormalItem.find((i) => i.name === item.combination.second_item.name);
        if(firstItem && secondItem) {
            setFirstEffect(firstItem.effect);
            setSecondEffect(secondItem.effect);
        }
    }, []);
    
    if(item == null){
        return (
            <Wrapper />
        )
    }

    const CombinationItemInfo = () => {
        return (
            <>
                <HoverNormalEffect>{firstEffect}</HoverNormalEffect>
                <HoverNormalEffect>{secondEffect}</HoverNormalEffect>
                <HoverIconWrapper>
                    <HoverIcon src={item.combination.first_item.image} />
                    <HoverEffect> + </HoverEffect>
                    <HoverIcon src={item.combination.second_item.image} />
                </HoverIconWrapper>
            </>
        );
    }

    const toggleHover = () => {
        setHover(!hover);
    }

    return (
        <Wrapper>
            <HoverDiv hover={hover}>
                <HoverWrapper>
                    <HoverName>{item.name}</HoverName>
                    <HoverEffect>{item.effect}</HoverEffect>
                    {CombinationItemInfo()}
                </HoverWrapper>
            </HoverDiv>
            <Mask onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Img src={item?item.image:``}/>
            </Mask>
        </Wrapper>
    );
};

export default JustItem;