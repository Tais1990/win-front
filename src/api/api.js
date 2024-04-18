
const config = (await import(`../../config.js`)).default(process.env.NEXT_PUBLIC_NODE_ENV)
const api = {
    urlServer() {
        // return process.env.API_SERVER_ENV;
        return config.api.url;
    },
    async get(url) {
        try {            
            const userToken = (typeof window !== 'undefined') && localStorage && localStorage.getItem('userToken')
                ? localStorage.getItem('userToken')
                : null
            const response = await fetch(`${this.urlServer()}${url}`, {
                method: 'GET',
                headers: {
                    'x-access-token': `${userToken}`
                }
            });
            // TODO Реализовать обработку ошибко разных с сервера, а не только то, что сервер отключен
            const body = response.json();
            return body;
        } catch(error) {
            throw error;
        }
    },
    async post(url, form) {
        try {
            const response = await fetch(`${this.urlServer()}${url}`, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw (await response.json()).detail || 'Error in request'
            }
            return  await response.json()
        } catch(error) {
            throw error;
        }
    },
    async put(url, form) {
        try {
            const response = await fetch(`${this.urlServer()}${url}`, {
                method: 'PUT',
                body: JSON.stringify(form),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw (await response.json()).detail || 'Error in request'
            }
            return  await response.json()
        } catch(error) {
            throw error;
        }
    }
}
export default api;