import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns:
    calc(50vw - 50%)
    repeat(3, 1fr)
    calc(50vw - 50%);
  padding-top: 10%;
`

export const ContainerSearcher = styled.section`
  background: var(--bg-card);
  grid-column: 2 / -2;
  margin: 0 auto 3rem auto;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Form = styled.form`
  font-size: 1.3rem;
  position: relative;
  min-width: 350px;
  display: flex;
  flex-direction: column;

    &:focus-within label {
      transform: translateY(-10px) scale(0.65);
      color: rgba(255, 255, 255, 0.7);
    }

  label {
    position: absolute;
    pointer-events: none;
    transform: translate(0, 1.6rem) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }
`

export const Input = styled.input`
  background: var(--bg-card);
  color: var(--text);
  border: transparent;
  font-size: 1em;
  padding: 1rem;
  outline: 0;
  width: 100%;
`

export const Button = styled.button`
  background: var(--blue-el);
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--text);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  height: 2rem;
  margin-left: 2rem;
  padding: 1.5rem 3rem;
  outline: 0;
  transition: 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
`
