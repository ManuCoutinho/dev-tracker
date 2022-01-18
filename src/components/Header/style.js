import styled from 'styled-components';

export const HeaderContainer = styled.header `  
    display: flex;
    flex-direction: row;
    margin: 0 auto;  
    padding-bottom: 2rem;
    justify-content: space-between;
    align-items: center;    
    width: 60%;
    padding-top: 7.5%;

    @media (max-width: 61.25em) {
      width: 90%;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-family: 'Unica One', cursive;
    font-size: 3rem;
    line-height: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;