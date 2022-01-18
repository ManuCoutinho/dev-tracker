import styled from "styled-components";
import {shade} from "polished";

export const Container = styled.main`
  display: flex;  
  flex-direction: column;
  justify-content: center;  
  margin: 0 auto;  
  width: 60%;

  @media (max-width: 61.25em) {
      width: 90%;
  }
`

export const ContainerSearcher = styled.section`
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  -moz-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
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
  background: inherit;
  color: ${({theme}) => theme.text};
  border: transparent;
  font-size: 1em;
  padding: 1rem;
  outline: 0;
  transition: all 0.2s;
  width: 100%;
    &:focus {
      border: 1px inset ${({theme}) => theme.element};
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
  background: ${({theme}) => theme.secondary};
  border: 1px solid transparent;
  border-radius: 15px;
  color: ${({theme}) => theme.text};
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  height: 2rem;
  margin-left: 2rem;
  padding: 1.5rem 3rem;
  outline: 0;
  transition: color 0.2s;

    &:hover {
      border: 1px inset${({theme}) => theme.element};
      background: ${({theme}) => shade(0.1, theme.secondary)};
      transition: color 0.2s;
    }
    &:active {
      border: 1px inset${({theme}) => theme.card};
      background: ${({theme}) => shade(0.1, theme.secondary)};
    }
`
