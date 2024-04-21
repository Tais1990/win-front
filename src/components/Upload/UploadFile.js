import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState, useRef } from "react";
import {  uploadFiles } from '@/store/slices/ActionCreators.js'


export default function UploadDoc({index=0, props={src: null}, callback=()=>{}}) {
    const dispatch = useDispatch()
    let [file, setFile] = useState(null)
    let [src, setSrc] = useState(props?.src)

    return (
        <div className={`upload-file`}>
            <div className={`preview ${ src ? '' : 'hide'}`}>{file?.name}</div>
            <label className={`${!src ? '' : 'hide'}`} htmlFor={`doc_${index}`}><div>Загрузить файл</div></label>
            <input id={`doc_${index}`} type="file" onChange={(event) => {
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