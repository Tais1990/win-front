import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState, useRef } from "react";
import {  uploadFiles } from '@/store/slices/ActionCreators.js'


export default function UploadImage({index=0, props={src: null}, callback=()=>{}}) {
    const dispatch = useDispatch()
    let [file, setFile] = useState(null)
    let [src, setSrc] = useState(props?.src)

    return (
        <div className={`upload-image`}>
            <img src={src} className={`${ src ? '' : 'hide'}`}></img>
            <label className={`${!src ? '' : 'hide'}`} htmlFor={`image_${index}`}><div>Загрузить файл</div></label>
            <input id={`image_${index}`} type="file" accept=".jpg, .png" onChange={(event) => {
                let file_ = event.target.files[0]
                var reader = new FileReader();
                reader.onloadend = function() {
                    setSrc(reader.result)
                    callback({file: file_})
                    setFile(file_)
                }
                reader.readAsDataURL(file_);
            }}           
            /> 
        </div>
    )

}