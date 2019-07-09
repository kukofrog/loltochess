import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import NormalItem from 'data/NormalItem';
import CombinationItem from 'data/CombinationItem';

import Item from './Item';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 200px;
    box-sizing: border-box;
`

const VerticalList = styled.div`
    display: flex;
    flex-direction: column;
`

const HorizontalList = styled.div`
    display: flex;
`

const ItemList: React.FC = () => {
    const [items, setItems] = useState<Array<Array<Object | null | undefined>>>(Array(9).fill(null).map(() => new Array(9).fill(null)));
    const [select, setSelect] = useState<Array<number> | null>(null);

    const MakeList = () => {
        setItems(items.map((item, i) => {
            return item.map((data, j) => {
                if(j === 0) {
                    return NormalItem[i-1];
                } else if (i === 0) {
                    return NormalItem[j-1];
                } else {
                    return CombinationItem.find((CItem) => ((CItem.combination.first_item.name === NormalItem[i-1].name && CItem.combination.second_item.name === NormalItem[j-1].name) 
                        || (CItem.combination.first_item.name === NormalItem[j-1].name && CItem.combination.second_item.name === NormalItem[i-1].name))
                    )
                }
            });
        }));
    }

    useEffect(() => {
        MakeList();
    }, []);

    return (
        <Wrapper>
            <VerticalList>
                {items.map((list, i) => {
                    return (
                        <HorizontalList key={i}>
                            {list.map((item, j) => <Item item={item} index={[i,j]} select={select} setSelect={setSelect} key={j}/>)}
                        </HorizontalList>
                    )
                })}
            </VerticalList>
        </Wrapper>
    );
};

export default ItemList;