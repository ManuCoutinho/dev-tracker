import { GoLocation, GoLink } from "react-icons/go";
import { CardMedia, CardWrapper } from "./style";

export function UserData() {
  return (     
   <>
     <CardWrapper> 
       <div>
         Repos  
         <span> 52</span>
       </div>
       <div>
         Followers 
         <span> 356</span>
       </div>  
       <div>
         Following 
         <span> 62</span>
       </div>             
   </CardWrapper>
   <CardMedia>
       <div id="location"> <GoLocation size={22} mr={5}/> Brazil, PR</div>              
       <div id="blog"  aria-label="portfolio" role="link"><GoLink size={22} mr={5}/> Portfolio</div>        
   </CardMedia>
   </>
  );
}