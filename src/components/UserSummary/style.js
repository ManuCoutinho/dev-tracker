import styled from 'styled-components';

export const Container = styled.section `
  grid-column: 2 / -2;
  background: var(--bg-card);
  border-radius: 20px;
  margin: 0 auto;  
  display: grid;
  grid-template-columns: repeat(2, 200px 1fr);  
  padding:2.4rem; 

     img {
      border-radius: 100%;
      border: 2px solid var(--border);
      margin: 0 2rem;   
    }     
`

export const ContentSummary = styled.div `
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column; 
  
    p {
      font-size: 1.1rem;
      line-height: 2rem;
      padding: 1rem 0; 
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
      color: var(--blue-el)      
    }

`