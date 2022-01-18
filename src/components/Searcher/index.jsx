import { useState } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";

import { UserSummary } from "../UserSummary";
import { UserContext } from "../../utils/UserContext";

import { Container, ContainerSearcher, Form, Input, Button } from "./style";

export function ContainerWrapper() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [state, setState] = useState(0);

  const userNotFound = () =>
    toast.error("User not found!");

  const userRequired = () =>
    toast.warn("Type the GitHub username");

  async function getUser(e) {
    e.preventDefault();
    if (user !== "") {
      await fetch(`https://api.github.com/users/${user}`).then((response) => {
        if (response.status === 200) {
          setUser("");
          setState(response.status);
          return response.json().then((data) => setData(data));
        } else if (response.status === 404) {
          userNotFound();
          setState(response.status);
        }
      });
    } else {
      userRequired();
    }
  }

  return (
    <UserContext.Provider value={[data]}>
      <Container>       
        <ContainerSearcher>
          <Form onSubmit={getUser}>
            <Input
              type="text"              
              value={user}
              placeholder="Type the GitHub username"
              onChange={(e) => setUser(e.target.value)}
            />
            <ToastContainer
              style={{ fontSize: "14px" }}
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              pauseOnFocusLoss={false}
              transition={Flip}
              closeOnClick
              rtl={false}
              role="alert"
              draggable
              pauseOnHover
            />
            <Button type="submit">Search</Button>
          </Form>
        </ContainerSearcher>
        {state === 200 && <UserSummary />}
      </Container>
    </UserContext.Provider>
  );
}
