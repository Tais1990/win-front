import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { createNews, fetchNews, login, updateNews } from '@/store/slices/ActionCreators.js'

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

            <br/><br/>
            <button onClick={() => {
                dispatch(createNews({
                    title: 'заголовок новой новсоти', 
                    text: 'текст новой новости'
                }))
            }}
            >Создание новости</button> 
            <br/><br/>
            <button onClick={() => {
                dispatch(createNews({
                    title: 'отложенная новость', 
                    text: 'когда-нибудь мы узнаем о чём',
                    pubDate: new Date("2025-04-19T15:59:06.978Z")
                }))
            }}
            >Создание новости с указанием даты</button> 
            <br/><br/>
            <button onClick={() => {
                dispatch(updateNews({
                    id: '66229ff32af07a55a081fb7e',
                    title: 'редактирование конкретной новсти', 
                    text: 'новый текст',
                    pubDate: new Date("2024-04-19T15:59:06.978Z")
                }))
            }}
            >Редактирование новости</button> 
        </div>
    )

}