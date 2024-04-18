import api from './api.js'
const articlesAPI = {
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
    async getArticleByID(id) {
        try {
            return {
                title: 'Заголовок для статьи для редактирования',
                text: 'Содержание статьи для едактирования'
            }
            const url = 'blocks' + (page ? `/${page}` : '') + (code ? `/${code}` : '')
            let blocks = await api.get(url)
            return blocks ?? []
        } catch (er) {
            console.log("!! Произошла ошибка", er)
            throw er
        }
    }
    ,
    editArticle(id, props) {
        return 'редактируем блок'
        return fetch(`${urlServer}/api/editBlock`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({ id: blockID, props: blockProps, visible: blockVisible })
        });

    }
    
}
export default articlesAPI;