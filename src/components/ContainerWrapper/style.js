import styled from 'styled-components';

export const Container = styled.main `
display: grid;
grid-template-columns: 
  calc(50vw - 50%)
  repeat(3, 1fr)
  calc(50vw - 50%);
  padding-top: 10%;    
`