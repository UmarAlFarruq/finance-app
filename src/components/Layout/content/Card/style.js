import styled from 'styled-components';

var top = 0;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat( auto-fit , minmax(230px, 2fr));
    grid-auto-rows: auto;
    background: whitesmoke;
    transition: 0.5s;
    padding: 8px;
`
export const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: black;
`
export const Icon = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(${top});
    font-size: 300%;
    & path{
        fill:${({ fill }) => fill || 'black'};
    }
`
export const WrapperCard = styled.div`
min-width: 180px;
max-width: 350px;
min-height: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 7px;
    :hover{
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, .3);
    cursor: pointer;
    transition: 0.3s;
}
    :hover  ${Icon} {
    transition: .7s;
    padding-bottom: 20px;
    font-size: 370%;
}
    :hover  ${Title} {
    transition: .5s;
    color: var(--activeColor);
}
`






