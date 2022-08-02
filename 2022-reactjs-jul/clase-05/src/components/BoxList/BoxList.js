import Box from "../Box/Box";
import './BoxList.css';

export default function BoxList({ userList }) {
    return (
        <div className="box-list">
            
            {userList.map((user) => {
                return (
                    <Box
                        key={user.id}
                        id={user.id}
                        img={user.picture}
                        name={user.firstName}
                        last={user.lastName}
                     />
                );
            })}
        </div>
    );
}
