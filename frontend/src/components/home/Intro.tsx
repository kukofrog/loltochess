import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Image from 'image/home.png';

const Wrapper = styled.div`
    height: 500px;
    width: 100%;
    background-color: ${oc.indigo[3]};
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-position: center;
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