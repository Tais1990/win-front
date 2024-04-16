import api from './api.js'
const blockAPI = {
    async getAllBlocks(page = null) {
        try {
            const url = 'news' + (page ? `/${page}` : '')
            let blocks = await api.get(url)
            return blocks ?? []
        } catch (er) {
            console.log("!! Произошла ошибка", er)
            throw er
        }
    },
    async getBlock(page = null, code = null) {
        try {
            const url = 'blocks' + (page ? `/${page}` : '') + (code ? `/${code}` : '')
            let blocks = await api.get(url)
            return blocks ?? []
        } catch (er) {
            console.log("!! Произошла ошибка", er)
            throw er
        }
    }
    /*,
    editBlock(blockID, blockProps, blockVisible) {
        return fetch(`${urlServer}/api/editBlock`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({ id: blockID, props: blockProps, visible: blockVisible })
        });

    }
    */
}
export default blockAPI;