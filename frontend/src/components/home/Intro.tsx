import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    height: 500px;
    width: 100%;
    background-color: ${oc.indigo[3]};
`

const Name = styled.h1`
    margin: 0;
`

const Intro: React.FC = () => {
    return (
        <Wrapper>
        </Wrapper>
    );
};

export default Intro;