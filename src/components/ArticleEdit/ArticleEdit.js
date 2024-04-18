import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { fetchArticle } from '@/store/slices/ActionCreators.js'

export default function ArticleEdit({id}) {
    console.log('редатикероние карточки', id);

    const dispatch = useDispatch()
    const articleStore = useSelector((state) => state.article) 

    useEffect(() => {
        dispatch(fetchArticle({id}));
    }, [id]);

    // Обработка крутилки и ошибки

    return (
        <div>
            <h1>КОмпонент редактирования статьи</h1>
            {articleStore.isSuccessful &&
                <div>
                    <h1>{articleStore.article.title}</h1>
                    <h1>{articleStore.article.text}</h1>
                </div>}
        </div>
    )

}