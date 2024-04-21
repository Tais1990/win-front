import api from './api.js'
const filesAPI = {
    async upload(files) {
        try {
            const url = `files/upload`
            const formData = new FormData()
            files.forEach(file => {
                formData.append("files", file)                
            });
            return await api.postFormData(url, formData)
        } catch (error) {
            throw error
        }
    },    
}
export default filesAPI;