import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Box = styled.div`
    width: 800px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    margin: 100px;
`

const Wrapper = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
`

const Combination: React.FC = () => {
    return (
        <Box>
            <Wrapper></Wrapper>
        </Box>
    );
};

export default Combination;