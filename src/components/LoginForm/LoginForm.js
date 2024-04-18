import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { fetchNews, login } from '@/store/slices/ActionCreators.js'

export default function LoginForm({}) {
    const dispatch = useDispatch()
    const newsStore = useSelector((state) => state.news) 

    useEffect(() => {
        console.log('Изменилось сторе', newsStore);
    }, [newsStore]);

    return (
        <div>
            <h1>КОмпонент авторизация пользоватея</h1>
            <br/><br/>
            <button onClick={() => {
                dispatch(login({
                    email: 't@mail.ru', 
                    password: 'pass123'
                }))
            }}
            >Верная авторизация</button>  
            <br/><br/>
            <button onClick={() => {
                dispatch(login({
                    email: 't@mail.ru', 
                    password: 'pass12'
                }))
            }}
            >Ошибочная авторизация</button>  
            <br/><br/>
            <button onClick={() => {
                dispatch(login({
                    email: 'e@mail.ru', 
                    password: 'pass12'
                }))
            }}
            >Несуществующий юзер</button>  

            <br/><br/>
            <button onClick={() => {
                console.log('Запрашиваем данные');
                dispatch(fetchNews())
            }}
            >Запросить данные</button> 
        </div>
    )

}