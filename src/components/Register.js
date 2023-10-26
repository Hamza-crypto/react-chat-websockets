import React, { useEffect } from 'react';

const Register = () => {
    useEffect(() => {
        const url = 'http://35.173.50.140/api/v1/users';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const data = {
            first_name: 'Usman',
            last_name: 'Arshad',
            email: 'hamaza78aa@gaamail.com',
            password: 'password',
            role: 'creative'
        };

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []); // Empty dependency array to run the effect once when component mounts

    return <div>Your component content here</div>;
};

export default Register;