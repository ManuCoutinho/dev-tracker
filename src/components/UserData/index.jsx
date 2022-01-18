import { useContext } from "react";
import { UserContext } from "../../utils/UserContext";
import { GoLocation, GoLink } from "react-icons/go";
import { CardMedia, CardWrapper } from "./style";

export function UserData() {
  const data = useContext(UserContext);

  return (
    <>
      <CardWrapper>
        <div>
          Repos
          {data.map((userData) => (
            <span key={Math.random() * 100}>{userData.public_repos}</span>
          ))}
        </div>
        <div>
          Followers
          {data.map((userData) => (
            <span key={Math.random() * 100}>{userData.followers}</span>
          ))}
        </div>
        <div>
          Following
          {data.map((userData) => (
            <span key={Math.random() * 100}>{userData.following}</span>
          ))}
        </div>
      </CardWrapper>
      <CardMedia>
        <div>
          <GoLocation size={22} mr={5} />
          {data.map((userData) => (
            <span key={Math.random() * 100}>{userData.location}</span>
          ))}
        </div>
        {data.map(
          (userData) =>
            userData.blog !== "" && (
              <div
                key={Math.random() * 100}
                id="blog"
                aria-label="portfolio"
                role="link"
              >
                <GoLink size={22} mr={10} key={Math.random() * 100} />
                <span key={Math.random() * 100}>
                  <a
                    key={Math.random() * 100}
                    href={userData.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.blog}
                  </a>
                </span>
              </div>
            )
        )}
      </CardMedia>
    </>
  );
}
