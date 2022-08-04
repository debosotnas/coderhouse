import { Link } from 'react-router-dom';
import { BoxListContainer } from '../components';

export default function Users () {

    return (
        <div>
            <div style={{textAlign: 'center', fontSize: '20px', marginTop: '10px'}}>
                <Link to={'/'}>Go home!</Link>
            </div>
            <BoxListContainer></BoxListContainer>
        </div>
    );
}