import ky from 'ky'

const api = ky.create(
    {prefixUrl: 'http://localhost:8080/'}
);


export default api

export const instance = 'http://localhost:4444/';