import styled from "styled-components";

export const Container = styled.main`
  padding-top: 7.5%;
  display: flex;  
  flex-direction: column;
  justify-content: center;  
  width: 60%;
  margin: 0 auto;  
`

export const ContainerSearcher = styled.section`
  background: var(--gray-800);    
  border-radius: 20px;
  padding: 1rem;
  display: flex;  
  align-items: center;
  margin-bottom: 2rem;
  //width: 52.25rem;
`

export const Form = styled.form`
  font-size: 1.3rem;  
  width: 100%;
  display: flex;   
  align-items: center;  
`

export const Input = styled.input`
  background: var(--gray-800);
  color: var(--gray-50);
  border: transparent;
  font-size: 1em;
  padding: 1rem;
  outline: 0;
  width: 100%;
  transition: all 0.2s;
    &:focus {
      border: 1px inset var(--cyan);
      border-radius: 15px;
      transition: all 0.2s;
    }
    &::placeholder {
      padding: 0.5rem;
      font-size: 0.8em;
    }
`

export const Button = styled.button`
  background: var(--gray-750);
  border: 1px solid transparent;
  border-radius: 15px;
  color: var(--gray-50);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  height: 2rem;
  margin-left: 2rem;
  padding: 1.5rem 3rem;
  outline: 0;
  transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
      border: 1px inset var(--cyan);
      transition: all 0.2s;
    }
    &:active {
      border: 1px inset var(--cyan);
    }
`
