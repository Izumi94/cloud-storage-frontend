import axios from 'axios';

export const getFiles = (dirId) => {
    return async dispath => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/files${dirId ? '?parent=' + dirId : ''}`,
                { headers: { Autorization: `Bearer ${localStorage.getItem('token')}` } },
            );
            console.log(response);
        }
        catch (err) {
            console.log(err)
        }
    }
}