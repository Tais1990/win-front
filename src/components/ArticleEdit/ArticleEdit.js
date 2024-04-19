import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { fetchArticle } from '@/store/slices/ActionCreators.js'

import dynamic from 'next/dynamic';
const TextEditor = dynamic(() => import('../TextEditor'), { ssr: false });
import {TextEditorProvider} from '../TextEditor'
import ToolPanel from '../ToolPanel/ToolPanel';
import SendButton from '../TextEditor/SendButton';

export default function ArticleEdit({id}) {
    const dispatch = useDispatch()
    const articleStore = useSelector((state) => state.article) 

    useEffect(() => {
        dispatch(fetchArticle({id}));
    }, [id]);

    // Обработка крутилки и ошибки

    let defaultValue = '<h1>текст по умолчанию</h1>'
    // TODO разобраться, почему дефолтное значение не парситься на предмент выбранного форматирования

    
    // стейт с данными о доп материалах - картинках и документов

    return (
        <TextEditorProvider defaulTtext={defaultValue}>
            <ToolPanel/>
            <TextEditor/>
            <SendButton/>
            {/* Другие компоненты загрузки картинок и файлов */}
         </TextEditorProvider>
    )

}