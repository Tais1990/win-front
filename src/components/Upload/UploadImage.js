import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState, useRef } from "react";
import {  uploadFiles } from '@/store/slices/ActionCreators.js'


export default function UploadImage({index=0, props={src: null}, callback=()=>{}}) {
    const dispatch = useDispatch()
    let [file, setFile] = useState(null)
    let [src, setSrc] = useState(props?.src)
    // let prevRef = useRef(null)

    // let test = (file_, src_) => {
    //     setFile(file_)
    //     setSrc(src_)
    //     console.log('Пробуем измменить', file_, src_);
    //     console.log(src, file);

    // }

    return (
        <div className={`upload-image`}>
            <img src={src} className={`${ src ? '' : 'hide'}`}></img>
            <label className={`${!src ? '' : 'hide'}`} htmlFor={`image${index}`}><div>Загрузить файл</div></label>
            <input id={`image${index}`} type="file" accept=".jpg, .png" onChange={(event) => {
                let file_ = event.target.files[0]
                var reader = new FileReader();
                reader.onloadend = function() {
                    setSrc(reader.result)
                    callback({file: file_})
                    // let ref1 = document.getElementById(`image_prev_${index}`)
                    // if (true || ref1) {
                    //     // ref1.src = reader.result;
                    //     setSrc(reader.result)
                    //     // console.log('src', src);
                    // }
                    setFile(file_)
                    // setSrc(reader.result)
                    // console.log('src', setFile, reader.result, src);
                }
                // setFile(file_)
                // reader.onloadend= function() {
                //     test(file_, reader.result)
                // }
                reader.readAsDataURL(file_);
            }}           
            /> 
             {/* <button onClick={() => {
                dispatch(uploadFiles({files: [file, file]}))
             }}>Отправвить на сервер</button> */}
             {/* <button onClick={() => {
                console.log('Проверка стейта', file, src);
             }}>Проверить стейт</button>
             <button onClick={() => {
                setSrc('test')
             }}>заполнение стейта</button> */}

        </div>
    )

}