import { useContext } from "react";
import { UserData } from "../UserData";
import { UserContext } from "../../UserContext";

import { Container, ContainerAvatar, ContentSummary, Title } from "./style";

export function UserSummary() {
  const data = useContext(UserContext);

  return (
    <Container>
      <ContainerAvatar>
        {data.map((userData) => (
          <img
            key={Math.random() * 100}
            src={userData.avatar_url}
            alt={`avatar do ${userData.name}`}
            width="150"
          ></img>
        ))}
      </ContainerAvatar>
      <ContentSummary>
        <Title>
          {data.map((userData) => (
            <div>
              <h2 key={Math.random() * 100}>{userData.name}</h2>
              <span key={Math.random() * 100}>{userData.login}</span>
            </div>
          ))}
          <div>
            {data.map((userData) => (
              <p key={Math.random() * 100}>{userData.created_at}</p>
            ))}
          </div>
        </Title>
        <div>
          {data.map((userData) => (
            <p key={Math.random() * 100}>{userData.bio}</p>
          ))}
        </div>
        <UserData />
      </ContentSummary>
    </Container>
  );
}
