
import React, {useState, useEffect} from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

export default function Article({}) {
  const router = useRouter()
  const { id } = router.query 
  return ( 
    <>
        <Head>
            <title>Article</title>
            <meta name="description" content="Articles" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
          <h1>Страница редактирования статьи {id}</h1>
        </main>
    </>  ) 
}


