const api = {
    urlServer() {
        // return process.env.API_SERVER_ENV;
        return "http://localhost:3201/api/"
    },
    async get(url) {
        try {
            const response = await fetch(`${this.urlServer()}${url}`, { method: 'GET' });
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