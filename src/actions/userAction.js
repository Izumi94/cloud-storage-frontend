import axios from 'axios';

export const registration = async () => {
    try {
        const response = await axios.post('http://localhost:5050/api/auth/registration', {
            name,
            email, 
            password,
        });
        alert(response.data);
    } catch (error) {
        alert(error);
    }
};