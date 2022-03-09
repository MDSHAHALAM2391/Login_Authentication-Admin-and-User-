import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    // AUTH_GET_PERMISSIONS,
    AUTH_LOGIN,
    // AUTH_LOGOUT,
    // AUTH_ERROR,
    // AUTH_CHECK,
} from 'react-admin';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const submitHandler = () => {

    history.push('/Home');// redirect function to homepage
}

export default (type, params, props) => {

    // const history = useHistory();
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     // history.('/Home');

    //user role admin anad password
    if (type === AUTH_LOGIN) {
        const { gmail, password } = params;

        if (gmail === 'user' && password === 'password') {
            localStorage.setItem('role', 'user');
            localStorage.removeItem('not_authenticated');
            return Promise.resolve();

        }

        //admin  role   username and password
        if (gmail === 'admin' && password === 'password') {
            localStorage.setItem('role', 'admin');
            localStorage.removeItem('not_authenticated');
            submitHandler();
            return Promise.resolve();

        }
        localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    }

    return (
        <div className='login' >

            <Container fluid>
                <Row >
                    <Col sm={8} className='text-center'>
                        <h1 className='sign mt-30'>Sign In</h1>
                        <p>Free access to our dashboard.</p>
                        <form onSubmit={submitHandler}>
                            <label htmlFor="">Username</label><br />
                            <input type="name" required placeholder='Username' />
                            <br /> <br />
                            <label htmlFor="">Password</label><br />
                            <input type="Password" placeholder='password' /><br /><br />
                            <Button className='btn' required type="submit" variant="primary" size="lg" onClick={submitHandler}>Sign In</Button>
                        </form><br /> <br />

                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};
