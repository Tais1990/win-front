import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { registerUser } from '@/store/slices/ActionCreators.js'

export default function RegisterForm({}) {

    const dispatch = useDispatch()
    return (
        <div>
            <h1>КОмпонент регистрации пользователя</h1> 
            <button onClick={() => {
                dispatch(registerUser({
                    name: 'тестовый пользователь1', 
                    email: 't1@mail.ru', 
                    password: 'pass123'
                }))
            }}
            >Регистрация пользователя</button>           
        </div>
    )

}