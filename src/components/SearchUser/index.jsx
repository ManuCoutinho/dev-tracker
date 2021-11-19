import { BsSearch } from "react-icons/bs";
import { useState} from "react";
import { Container, Form, Button, Input} from "./style"

export function SearchUser(){ 
  const [user, setUser] = useState(""); 

  function handleOnChange(text) {
    setUser(text);
   
  }  
  return (
    <Container>
      <Form>        
        <Input type="text" id="search"          
          value={user}
          onChange={ (e) => handleOnChange(e.target.value) }
        />
        <label htmlFor="search"         
        aria-label="search">
        <BsSearch size={18}/> Github username
        </label>
        
      </Form>
      <Button type="submit" 
        name="search">
          Search
        </Button>        
    </Container>
  )
}