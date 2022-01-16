import styled from 'styled-components';

export const CardWrapper = styled.section `
  background:var(--gray-900);
  grid-column: 2 / -1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  font-size: 1rem;
  line-height: 2rem;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
      }

      span {
        font-weight: 700;
      }
`

export const CardMedia = styled.section `
 grid-column: 2 / -1;
 display: flex;
 font-size: 1rem;    
 align-items: center;
 justify-content: space-around;
 padding: 1rem 0;
 gap: 1rem;
 transition: all 0.2s;
    a {
      margin-left: 0.5rem;
        &:hover {
          color: var(--cyan);
          transition: all 0.2s;
        }
    }
`