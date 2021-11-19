import { TitleWrapper } from "../TitleWrapper";
import { SearchUser } from "../SearchUser";
import { UserSummary } from "../UserSummary";
import { Container } from "./style";


export function ContainerWrapper(){
  return (   
      <Container>
        <TitleWrapper/>
        <SearchUser/>      
        <UserSummary/>      
      </Container>    
  )    
}