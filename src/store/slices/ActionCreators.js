import {createAsyncThunk} from "@reduxjs/toolkit";
import articlesAPI from "@/api/articlesAPI";
import authAPI from "@/api/authAPI";
import newsAPI from "@/api/newsAPI";

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

