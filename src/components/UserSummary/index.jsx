import { UserData } from "../UserData";
import { Container, ContentSummary, Title } from "./style";
export function UserSummary(){
  return(      
    <>          
      <Container>
        <div>
              <img src="https://source.unsplash.com/random/100x100" alt="avatar do usuário">
              </img>
        </div>        
          <ContentSummary>
            <Title>
              <div>
                <h2>Nome do Usuário </h2> 
                <span>@user</span> 
              </div>
              <div>
                  <p>Joined 25 Jan 2021</p>
              </div>
            </Title>
              
            <div>
                <p>
                    Bio: Lorem ipsum dolor sit amet consectetur, adipisicing elit.              
                </p> 
            </div>          
          </ContentSummary>
          <UserData/>    
      </Container>
    </>
  )
};