import {createAsyncThunk} from "@reduxjs/toolkit";
import formAPI from "@/api/formAPI";
import documentAPI from '@/api/documentAPI';
import blockAPI from "@/api/newsAPI";
import propsAPI from "@/api/propsAPI";
/*
export const fetchForm = createAsyncThunk(
    'api/post/get',
    async (_, thunkAPI) => {
        try {
            console.log('Пытаемся обратиться в запро');
            const response = await formAPI.get('test');
            console.log('Результат из запроса', response);
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить анные о формах")
        }
    }
)
*/
export const sendForm = createAsyncThunk(
    'api/form/post',
    async({code, form}, thunkAPI) => {
        try {
            return await formAPI.send(code, form);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchDocuments = createAsyncThunk(
    'api/documents/get',
    async ({codeTable}, thunkAPI) => {
        try {
            const response = await documentAPI.getAll(codeTable);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const sendDocument = createAsyncThunk(
    'api/documents/post',
    async ({codeTable, form}, thunkAPI) => {
        try {
            if (form.id) {
                return await documentAPI.update(codeTable, form)
            } else {
                return await documentAPI.create(codeTable, form)
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchFormSettings = createAsyncThunk(
    'api/formSettings/get',
    async (_, thunkAPI) => {
        try {
            const response = await blockAPI.getAllBlocks('forms')
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchCollectiveSettings = createAsyncThunk(
    'api/collectiveSettings/get',
    async (_, thunkAPI) => {
        try {
            const response = await blockAPI.getAllBlocks('collective')
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchPropsByID = createAsyncThunk(
    'api/props/get',
    async ({id}, thunkAPI) => {
        try {
            const response = await propsAPI.getByID(id)
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchPropsByCodeBlock = createAsyncThunk(
    'api/props/get',
    async ({codeBlock}, thunkAPI) => {
        try {
            const response = await propsAPI.getByCodeBlock(codeBlock)
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
