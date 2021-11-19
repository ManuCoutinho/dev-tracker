import {useState, useEffect} from 'react';
import { SearchUser } from '../SearchUser';


export function UserSearcher() {    
  //const user = SearchUser.user.value; 
  const user =  '';
  const [userData, setUserData] = useState([]);   
  
  useEffect(() => {
     fetch(`https://api.github.com/users/${user}/repos`)
     .then(response => response.json()).then(data => setUserData(data))
  }, []);
  return (
    <span>aqui infos do usuario</span>
     
  )
}