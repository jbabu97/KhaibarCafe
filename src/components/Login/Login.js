import React from 'react';
import GoogleIcon from '../../icons/google.png';

const Login = () => {
    return (
        <div>
            <button className="btn btn-dark"><img src={GoogleIcon} alt=""/> Go with Google</button>
        </div>
    );
};

export default Login;