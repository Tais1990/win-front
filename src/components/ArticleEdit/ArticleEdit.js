import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { fetchArticle } from '@/store/slices/ActionCreators.js'

import dynamic from 'next/dynamic';
const TextEditor = dynamic(() => import('../TextEditor'), { ssr: false });
import {TextEditorProvider} from '../TextEditor'
import ToolPanel from '../ToolPanel/ToolPanel';
import SendButton from '../TextEditor/SendButton';

import UploadImage from '../Upload/UploadImage';
import UploadFile from '../Upload/UploadFile';
import UploadMany from '../Upload/UploadMany';

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
            <UploadImage/>
            {/* <UploadImage src='https://i.ibb.co/RTcFtrq/DVnew-Year-3-938x1024.jpg'/> */}
            {/* <UploadFile/> */}
            <hr/>
            {/* <UploadMany
                data = {[{text: 'текст 11'}, {text: 'текст 2'}]}
                component={ (index, props, callback) => (<Test index={index} props={props} callback={callback}/>)}/>
            <hr/> */}
            <br/>
            <UploadMany
                data = {[{src: 'https://i.ibb.co/RTcFtrq/DVnew-Year-3-938x1024.jpg'}]}
                component={ (index, props, callback) => (<UploadImage index={index} props={props} callback={callback}/>)}/>
            <br/>
            <hr/>
            
            <SendButton/>


            {/* Другие компоненты загрузки картинок и файлов */}
         </TextEditorProvider>
    )

}