import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { fetchArticle } from '@/store/slices/ActionCreators.js'


export default function UploadFile({}) {
    // const dispatch = useDispatch()
    // const articleStore = useSelector((state) => state.article) 

    // useEffect(() => {
    //     dispatch(fetchArticle({id}));
    // }, [id]);

    // // Обработка крутилки и ошибки
    let [file, setFile] = useState(null)

    return (
        <div>
            <h1>КОмпонент загрузки домента</h1>
            <input type="file" onChange={(event) => {
                console.log('Загрузка файла', event.target.files);
            }} />
        </div>
    )

}