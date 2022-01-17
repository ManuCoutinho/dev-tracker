import styled from 'styled-components';

export const CardWrapper = styled.section `
  align-items: center;
  background:var(--gray-900);
  border-radius: 20px;
  display: flex;
  font-size: 1em;
  justify-content: space-evenly;
  line-height: 2rem;
  padding: 1rem;

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
 display: flex;
 font-size: 1em;    
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