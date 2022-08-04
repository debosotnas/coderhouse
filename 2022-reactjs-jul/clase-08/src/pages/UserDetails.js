/*
   App 
OK    > UserDetails (page) 
        > UserDetailsContainer (comp/ajax) 
            > UserDetails (comp) 
*/

import UserDetailsContainer from "../components/UserDetailsContainer/UserDetailsContainer";

export default function UserDetails() {
    return (
        <div>
            <UserDetailsContainer></UserDetailsContainer>
        </div>
    );
}