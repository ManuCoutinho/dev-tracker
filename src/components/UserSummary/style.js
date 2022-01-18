import styled from 'styled-components';

export const Container = styled.section `  
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  -moz-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 20px;
  column-gap: 2rem;  
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 0 auto;  
  padding: 2.4rem;
  width: 100%; 

  @media(max-width: 42.5em) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const ContainerAvatar = styled.div`
  margin-left: 2rem;
  width:100%;

  img {
    border-radius: 100%;
    border: 2px solid ${({theme}) => theme.element};
    margin: 0 auto;
    width: 100%;   
  }   

  @media(max-width: 42.5em) {
    margin: 0 auto 1rem auto;
    width:60%;
  } 
`;

export const ContentSummary = styled.div ` 
  @media(max-width: 42.5em) {
    margin: 0 auto;
  } 

  display: flex;
  flex-direction: column;
  margin-left: 1.85rem;
  width: 90%; 
  
    p {
      font-size: 1.1rem;
      line-height: 2rem;
      padding: 1rem 0;
      white-space: pre-line;       
    }   
`
export const Title = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;

    h2 {
      font-size:1.5rem;
      line-height: 2rem;
    }

    p {
      font-size: 1rem;
      line-height: 2rem;
      padding: 0rem 1rem;  
    }       

    span {
      font-size: 1rem;
      color: ${({theme}) => theme.info}; 
    }

`