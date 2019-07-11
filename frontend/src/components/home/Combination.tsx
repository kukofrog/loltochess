import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Champion from './Champion';

const Box = styled.div`
    width: 800px;
    height: 500px;
    //border-radius: 5px;
    //box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    margin: 50px auto;
    background-color: ${oc.gray[9]};
    box-sizing: border-box;
`

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const CombLineWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
`

const CombLine = styled.div`
    position: relative;
    border: 1px solid #5d72e0;
    background-color: #5d72e0;
    //border-radius: 3px;
    height: 74px;
`

const CombImgWrapper = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    width: 30px;
    height: 30px;
    background-color: #5d72e0;
`

const CombLine2 = styled.div`
    position: relative;
    border: 1px solid #ff9776;
    background-color: #ff9776;
    //border-radius: 3px;
    height: 74px;
`

const CombImgWrapper2 = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    width: 30px;
    height: 30px;
    background-color: #ff9776;
`

const CombImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`

const ChampLineWrapper = styled.div`
    padding: 10px;
    padding-left: 30px;
    display: flex;
`



const ChampImgWrapper2 = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    overflow: hidden;
    border: 2px solid ${oc.teal[8]};
`



const Cost2 = styled.p`
    position: absolute;
    z-index: 5;
    text-align: center;
    top: 0;
    right: 0;
    width: 20px;
    height: 15px;
    background-color: ${oc.teal[8]};
    margin: 0;
    margin-left: 5px;
    font-size: 0.5rem;
    color: white;
    text-shadow: -1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000;
`



const Combination: React.FC = () => {
    return (
        <Box>
            <Wrapper>
                <CombLineWrapper>
                    <CombLine>
                        <CombImgWrapper>
                            <CombImg src="https://static.lolchess.gg/images/tft/traiticons-white/trait_icon_sorcerer.png"/>
                        </CombImgWrapper>
                        <ChampLineWrapper>
                            <Champion />
                        </ChampLineWrapper>
                    </CombLine>
                </CombLineWrapper>

                <CombLineWrapper>
                    <CombLine2>
                        <CombImgWrapper2>
                            <CombImg src="https://static.lolchess.gg/images/tft/traiticons-white/trait_icon_yordle.png"/>
                        </CombImgWrapper2>
                        <ChampLineWrapper>
                            
                        </ChampLineWrapper>
                    </CombLine2>
                </CombLineWrapper>
            </Wrapper>
        </Box>
    );
};

export default Combination;