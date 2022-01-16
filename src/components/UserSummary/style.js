import styled from 'styled-components';

export const Container = styled.section `  
  background: var(--gray-800);
  border-radius: 20px;
  margin: 0 auto;  
  display: grid;
  grid-template-columns: repeat(2, 150px 230px);  
  padding:2.4rem; 

     img {
      border-radius: 100%;
      border: 2px solid var(--cyan);
      margin: 0 auto;
      width: 100%;   
    }     
`

export const ContentSummary = styled.div `
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  margin-left: 1.85rem; 
  
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
      color: var(--cyan); 
    }

`