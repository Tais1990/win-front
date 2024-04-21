import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { uploadFiles } from '@/store/slices/ActionCreators';

let arrayStatus = {
    new: 'new',
    deleted: 'deleted',
    existent: 'existent'
}

export default function UploadMany({data, component}) {
    const dispatch = useDispatch()
    const filesStore = useSelector((state) => state.file) 
    let [state, setState] = useState(data.map(x => ({
        data: x,
        status: arrayStatus.existent
    })))
    return (
        <div className='upload-many'>
            <div className='upload-many__items'>
                {state && state.map((item, index) =>
                    <div key={index} className={`upload-many__item upload-many__item_${item.status}`}>
                        {component(index, item.data, (value) => {
                            let newState = [...state]
                            newState[index] = {...item, data: value}
                            setState(newState)
                        })}
                        {/* TODO реализовать возможность восстановление элемента */}
                        <button className ={`delete ${item.status == arrayStatus.deleted ? 'hide' : ''}`} onClick={() => {
                            let newState = [...state]
                            newState[index] = {...item, status: arrayStatus.deleted}
                            setState(newState)
                        }}>Удалить</button>
                    </div>                
                    )
                }
            </div>
            <button className='add' onClick={() => {setState([...state, {data: null, status: arrayStatus.new}])}}>Добавить</button><br/>
            <button onClick={() => {
                let files = state.filter(x => x.status !== arrayStatus.deleted).map(x => x.data?.file).filter(x => x)
                dispatch(uploadFiles({files}))
                console.log(filesStore);
            }}> Отправить данные</button>
            <div>{filesStore.error}</div>
            {filesStore.isSuccessful && <div>Files was successful load</div>}
            {/* <div>{articlesStore}</div> */}
            <br/><br/>
        </div>
    )

}