import {createAsyncThunk} from "@reduxjs/toolkit";
import articlesAPI from "@/api/articlesAPI";
import authAPI from "@/api/authAPI";
import newsAPI from "@/api/newsAPI";
import filesAPI from "@/api/filesAPI";

export const fetchArticle = createAsyncThunk(
    'api/articles/get',
    async ({id}, thunkAPI) => {
        try {
            const response = id ? await articlesAPI.getArticleByID(id) : {};
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const sendArticle = createAsyncThunk(
    'api/article/post',
    async ({id, form}, thunkAPI) => {
        try {
            if (form.id) {
                return await articlesAPI.editArticle(id, form);
            } else {
                // return await documentAPI.create(id, form)
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const registerUser = createAsyncThunk(
    'api/auth/signup',
    async ({name, email, password}, thunkAPI) => {
        try {
            return await authAPI.signup(name, email, password)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const login = createAsyncThunk(
    'api/auth/signin',
    async ({email, password}, thunkAPI) => {
        try {
            const data = await authAPI.signin(email, password);
            // аозможно, не самый разумный вариант
            localStorage.setItem('userToken', data.accessToken)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const fetchNews = createAsyncThunk(
    'api/news/get',
    async (_, thunkAPI) => {
        try {
            const response = await newsAPI.getMyNews();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createNews = createAsyncThunk(
    'api/news/post',
    async ({title, text, pubDate}, thunkAPI) => {
        try {
            const data = await newsAPI.create(title, text, pubDate)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updateNews = createAsyncThunk(
    'api/news/put',
    async ({id, title, text, pubDate}, thunkAPI) => {
        try {
            const data = await newsAPI.update(id, title, text, pubDate)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const deleteNews = createAsyncThunk(
    'api/news/delete',
    async ({id}, thunkAPI) => {
        try {
            const data = await newsAPI.delete(id)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const publishNews = createAsyncThunk(
    'api/news/put',
    async ({id}, thunkAPI) => {
        try {
            const data = await newsAPI.publish(id)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const uploadFiles = createAsyncThunk (
    'api/files/post',
    async ({ files }, thunkAPI) => {
        try {
            const filesUrl = await filesAPI.upload(files)
            return filesUrl
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

