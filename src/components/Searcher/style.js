import styled from "styled-components";

export const Container = styled.main`
  display: flex;  
  flex-direction: column;
  justify-content: center;  
  margin: 0 auto;  
  padding-top: 7.5%;
  width: 60%;
`

export const ContainerSearcher = styled.section`
  align-items: center;
  background: var(--gray-800);    
  border-radius: 20px;
  display: flex;  
  margin-bottom: 2rem;
  padding: 1rem;
`

export const Form = styled.form`
  align-items: center;  
  font-size: 1.3rem;  
  display: flex;   
  width: 100%;
`

export const Input = styled.input`
  background: var(--gray-800);
  color: var(--gray-50);
  border: transparent;
  font-size: 1em;
  padding: 1rem;
  outline: 0;
  transition: all 0.2s;
  width: 100%;
    &:focus {
      border: 1px inset var(--cyan);
      border-radius: 15px;
      transition: all 0.2s;
    }
    &::placeholder {
      font-size: 0.8em;
      padding: 0.5rem;
    }
`

export const Button = styled.button`
  align-items: center;
  background: var(--gray-750);
  border: 1px solid transparent;
  border-radius: 15px;
  color: var(--gray-50);
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  height: 2rem;
  margin-left: 2rem;
  padding: 1.5rem 3rem;
  outline: 0;
  transition: filter 0.2s;

    &:hover {
      border: 1px inset var(--cyan);
      filter: brightness(0.7);
      transition: all 0.2s;
    }
    &:active {
      border: 1px inset var(--cyan);
    }
`
