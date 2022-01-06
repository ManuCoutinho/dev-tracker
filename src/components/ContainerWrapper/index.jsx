import { useState } from "react";
import { Title } from "../Title";
import { UserSummary } from "../UserSummary";
import { UserContext } from "../../UserContext";
import { BsSearch } from "react-icons/bs";
import { Container, ContainerSearcher, Form, Input, Button } from "./style";

export function ContainerWrapper() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");

  function handleOnChange(event) {
    event.preventDefault();
    return setUser(event.target.value);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    await fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setData(data));     
  }

  return (
    <UserContext.Provider value={[data]}>
      <Container>
        <Title />
        <ContainerSearcher onSubmit={handleOnSubmit}>
          <Form>
            <BsSearch style={{ position: "absolute" }} />
            <Input
              type="text"
              id="search"
              placeholder="GitHub username"
              value={user}
              onChange={handleOnChange}
            />
          </Form>
          <Button type="submit" name="search" onClick={handleOnSubmit}>
            Search
          </Button>
        </ContainerSearcher>
        <UserSummary />
      </Container>
    </UserContext.Provider>
  );
}
