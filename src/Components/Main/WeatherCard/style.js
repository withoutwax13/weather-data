import styled from 'styled-components'

export const Container = styled.div`
    ${(props)=>props.invertActive ? `background-color: #2f4c58; border-top: 5px solid white; border-left: 5px solid white;` : `background-color: white; border-top: 5px solid #2f4c58; border-left: 5px solid #2f4c58;`}
    width: 45%;
    height: 100%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2px 10px;
`

export const ItemLabel = styled.div`
    font-style: Courier New;
    font-size: 20px;
    ${(props)=>props.invertActive ? `color: white;` : `color: #2f4c58;`}
`
export const ItemData = styled.div`
    font-style: Courier New;
    font-size: 20px;
    font-style: Bold;
    color: white;
    ${(props)=>props.invertActive ? `color: white;` : `color: #2f4c58;`}
`
export const TimeData = styled.div`
    font-style: Courier New;
    font-size: 55px;
    font-style: Bold;
    color: white;
    margin: 2px 10px;
    ${(props)=>props.invertActive ? `color: white;` : `color: black;`}
`
