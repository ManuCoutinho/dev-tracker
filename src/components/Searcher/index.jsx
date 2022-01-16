import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

import { Title } from "../Title";
import { UserSummary } from "../UserSummary";
import { UserContext } from "../../UserContext";

import { Container, ContainerSearcher, Form, Input, Button } from "./style";

export function ContainerWrapper() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [state, setState] = useState(0);

   const userNotFound = () => toast.error(
    "Usuário não localizado!", {    
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });

  const userRequired = () => toast.warn(
    "Digite o GitHub username", {    
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });

  async function getUser(e) {  
    e.preventDefault(); 
    if(user !== ""){
      await fetch(`https://api.github.com/users/${user}`)
        .then((response) => {
          if (response.status === 200) {          
              setUser('');
              setState(response.status); 
              return response.json().then((data) => setData(data));
          } else if (response.status === 404) {                    
              userNotFound();
              setState(response.status); 
          }
      });   
    } else {
      userRequired()
    }
  } 
  
  return (
    <UserContext.Provider value={[data]}>
      <Container>
        <Title />
        <ContainerSearcher >
          <Form onSubmit={getUser}>           
            <Input
              type="text"    
              id="user"  
              value={user}                  
              placeholder="GitHub username"
              onChange={(e) => setUser(e.target.value)}                              
            />
            
            <ToastContainer 
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}              
              draggable
              pauseOnHover
            />
            <Button type="submit">
              Search
            </Button>
          </Form>
        </ContainerSearcher>
       {state ===200 &&  <UserSummary />}
      </Container>
    </UserContext.Provider>
  );
}
