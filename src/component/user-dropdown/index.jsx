import  React  from 'react';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

let UserDropDown =(props) => {
    return (
       
        <div>
        <div className="usergreet text-left">Bonjour,<em className="text-primary">{props.user.name}</em>. Nous sommes ravis de vous revoir </div>
        <ul className="list-unstyled text-left">
            <li><Link to={`/user/${props.user.id}/account`}>Mon Compte</Link></li>
            <li><Link to='/user/:handle/account'>Mes commandes</Link></li>
        </ul>

        </div>
        
    )
}
export default UserDropDown;


