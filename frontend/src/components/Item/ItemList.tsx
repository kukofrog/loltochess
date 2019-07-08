import React, {useState, useEffect, useContext, useReducer} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import NormalItem from 'data/NormalItem';
import CombinationItem from 'data/CombinationItem';

import Item from './Item';

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
        <VerticalList>
            {items.map((list, i) => {
                return (
                    <HorizontalList key={i}>
                        {list.map((item, j) => <Item item={item} key={j} index={[i,j]}/>)}
                    </HorizontalList>
                )
            })}
        </VerticalList>
    );
};

export default ItemList;