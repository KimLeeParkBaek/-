import React, { useEffect } from 'react';
import axios from 'axios';

function LoginPage() {
    useEffect(() => {
        axios.get('/login')
        .then(response => console.log(response.data))
    }, [])
    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <h2>LOGIN</h2>
        </div>
    )
}

export default LoginPage;