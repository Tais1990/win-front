import api from './api.js'
const newsAPI = {
    async getAll() {
        try {
            return [
                {
                    title: 'Заголовок для статьи',
                    text: 'Содержание статьи'
                },
                {
                    title: 'Заголовок для статьи1',
                    text: 'Содержание статьи2'
                }
            ]
            const url = 'news'
            let articles = await api.get(url)
            return articles ?? []
        } catch (er) {
            console.log("!! Произошла ошибка", er)
            throw er
        }
    },
    async getMyNews() {
        try {
            const url = 'news/my'
            let news = await api.get(url)
            return news ?? []
        } catch (er) {
            console.log("!! Произошла ошибка", er)
            throw er
        }
    },
    async create(title, text, pubDate) {
        try {
            const url = `news`
            return await api.post(url, {title, text, pubDate})
        } catch (error) {
            throw error
        }
    },
    async update(id, title, text, pubDate) {
        try {
            const url = `news`
            return await api.put(url, {id, title, text, pubDate})
        } catch (error) {
            throw error
        }
    },
    async delete(id) {
        try {
            const url = `news/${id}`
            return await api.delete(url)
        } catch (error) {
            throw error
        }
    }
    
}
export default newsAPI;