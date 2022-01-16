import trackIcon from "../../assets/icon.svg"
import { Header } from "./style";

export function Title() {
  return(
    <Header>
        <h1>DEV.tracker </h1>
        <img src={trackIcon} alt="Logo"/>
    </Header>
  )
}