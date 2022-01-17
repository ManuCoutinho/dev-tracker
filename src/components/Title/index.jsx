import logoImg from "../../assets/logo.svg"
import { Header } from "./style";

export function Title() {
  return(
    <Header>
        <h1>DEV.tracker </h1>
        <img src={ logoImg} alt="Logo"/>
    </Header>
  )
}