import React from 'react';
import { Form, Button} from 'react-bootstrap';




class UserLogin extends React.Component {
    render() {
        return (
            <div className="loginform">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Adresse e-mail" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Mot de passe" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Me connecter</Button>
                </Form>

            </div>
        )
    }
}
export default UserLogin;

