import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { GoLocation, GoLink } from "react-icons/go";
import { CardMedia, CardWrapper } from "./style";

export function UserData(props) {
  const data = useContext(UserContext);

  return (
    <>
      <CardWrapper>
        <div>
          Repos
          {data.map((userData) => 
            <span key={userData.public_repos}>{userData.public_repos}</span>
         )}
        </div>
        <div>
          Followers
          {data.map((userData) => 
            <span key={userData.followers}>{userData.followers}</span>
          )}
        </div>
        <div>
          Following
          {data.map((userData) => 
            <span key={userData.following}>{userData.following}</span>
          )}
        </div>
      </CardWrapper>
      <CardMedia>
        <div id="location">
          <GoLocation size={22} mr={5} />
          {data.map((userData) => 
            <span key={userData.location}>{userData.location}</span>
          )}
        </div>
        <div id="blog" aria-label="portfolio" role="link">
          <GoLink size={22} mr={10} />
          {data.map((userData) => 
            <span key={userData.blog}>
              <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                {userData.blog}
              </a>
            </span>
          )}
        </div>
      </CardMedia>
    </>
  );
}
