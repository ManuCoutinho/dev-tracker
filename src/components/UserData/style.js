import styled from 'styled-components';
import { shade } from 'polished';

export const CardWrapper = styled.section `
  align-items: center;
  background:${({theme}) => theme.primary};  
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.125);
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
          color: ${({theme}) => shade(0.2, theme.info)};
          transition: all 0.2s;
        }
    }

  @media(max-width: 42.5em) {
    flex-direction: column;
    align-self: center;
    margin-top: 1rem;
  } 
`