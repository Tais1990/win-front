import api from './api.js'
const authAPI = {
    async signin(email, password) {
        console.log('sigup', email, password);
        try {
            const url = `auth/login`
            return await api.post(url, {email, password})
        } catch (error) {
            throw error
        }
    },
    async signup(name, email, password) {
        try {
            const url = `auth/register`
            return await api.post(url, {name, email, password})
        } catch (error) {
            throw error
        }
    },
    
}
export default authAPI;