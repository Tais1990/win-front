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
    }
    
}
export default newsAPI;