import { UserData } from "../UserData";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Container, ContentSummary, Title } from "./style";

export function UserSummary() {
  const data = useContext(UserContext);  
  return (
    <>
      <Container>
        <div>
          {data.map(userData => 
            <img
              key={userData.avatar_url}
              src={userData.avatar_url}
              alt={`avatar do ${userData.name}`}
            ></img>
        )}
        </div>
        <ContentSummary>
          <Title>
            {data.map(userData => 
              <div>
                <h2 key={userData.name}>{userData.name}</h2>
                <span key={userData.login}>{userData.login}</span>
              </div>
           )}
            <div>
              {data.map(userData => 
                <p key={userData.created_at}>
                  {userData.created_at}</p>
                
             )}
            </div>
          </Title>
          <div>
            {data.map(userData => 
              <p key={userData.bio}>{userData.bio}</p>
            )}
          </div>
        </ContentSummary>
        <UserData />
      </Container>
    </>
  );
}
