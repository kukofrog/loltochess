import React, {useState, useEffect, useContext, useReducer} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import NomalItem from 'data/NomalItem';
import CombinationItem from 'data/CombinationItem';

const ItemList: React.FC = () => {
    const [items, setItems] = useState<Array<Array<Object | null | undefined>>>(Array(9).fill(null).map(() => new Array(9).fill(null)));

    const MakeList = () => {
        setItems(items.map((item, i) => {
            return item.map((data, j) => {
                if(j === 0) {
                    return NomalItem[i-1];
                } else if (i === 0) {
                    return NomalItem[j-1];
                } else {
                    let findItem = null;
                    CombinationItem.forEach((CItem) => {
                        if ((CItem.combination.first_item.name === NomalItem[i-1].name && CItem.combination.second_item.name === NomalItem[j-1].name) 
                        || (CItem.combination.first_item.name === NomalItem[j-1].name && CItem.combination.second_item.name === NomalItem[i-1].name)){
                            findItem = CItem;
                        }
                    })
                    return findItem;
                }
            });
        }));
    }

    useEffect(() => {
        MakeList();
    }, []);

    return (
        <>
        {console.log(items)}
        </>
    );
};

export default ItemList;