import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Champion from './Champion';
import JustItem from 'components/Item/JustItem';

import ChampionData from 'data/ChampionData';
import ItemData from 'data/CombinationItem';

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
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-bottom: 10px;
    margin-left: 30px;
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
    left: -30px;
    width: 30px;
    height: 76px;
    background-color: ${oc.indigo[8]};
    text-align: center;
    display: flex;
    flex-direction: column;
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
    left: -30px;
    width: 30px;
    height: 76px;
    background-color: ${oc.orange[5]};
    text-align: center;
    display: flex;
    flex-direction: column;
`

const CombImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`

const ChampLineWrapper = styled.div`
    padding: 10px;
    padding-right: 0px;
    display: flex;
`

const CombName = styled.h2`
    margin: 0;
    color: white;
    margin-bottom: 10px;
`

const SmallName = styled.h3`
    margin: 0;
    color: white;
    margin-bottom: 5px;
`

const CombImgText = styled.p`
    color: white;
    margin: 0;
`

const Combination: React.FC = () => {
    return (
        <Box>
            <Wrapper>
                <CombName>6마법사 솔라리</CombName>
                <SmallName>핵심 조합</SmallName>
                <CombLineWrapper>
                    <CombLine>
                        <CombImgWrapper>
                            <CombImg src="https://static.lolchess.gg/images/tft/traiticons-white/trait_icon_sorcerer.png"/>
                            <CombImgText>6</CombImgText>
                        </CombImgWrapper>
                        <ChampLineWrapper>
                            <Champion champ={ChampionData.kassadin}/>
                            <Champion champ={ChampionData.lulu}/>
                            <Champion champ={ChampionData.ahri}/>
                            <Champion champ={ChampionData.twistedfate}/>
                            <Champion champ={ChampionData.morgana}/>
                            <Champion champ={ChampionData.veigar}/>
                            <Champion champ={ChampionData.aurelionsol}/>
                            <Champion champ={ChampionData.karthus}/>
                        </ChampLineWrapper>
                    </CombLine>
                </CombLineWrapper>
                <SmallName>핵심 아이템</SmallName>
                <JustItem item={ItemData.find((i) => i.name==="강철의 솔라리 펜던트")} />
                <SmallName>추가 조합</SmallName>
                <CombLineWrapper>
                    <CombLine2>
                        <CombImgWrapper2>
                            <CombImg src="https://static.lolchess.gg/images/tft/traiticons-white/trait_icon_yordle.png"/>
                            <CombImgText>3</CombImgText>
                        </CombImgWrapper2>
                        <ChampLineWrapper>
                            <Champion champ={ChampionData.lulu}/>
                            <Champion champ={ChampionData.veigar}/>
                            <Champion champ={ChampionData.kennen}/>
                        </ChampLineWrapper>
                    </CombLine2>
                </CombLineWrapper>
            </Wrapper>
        </Box>
    );
};

export default Combination;