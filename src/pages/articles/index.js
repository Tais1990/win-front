
import React, {useState, useEffect} from "react";
import Head from "next/head";

export default function Articles({}) {
  return ( 
    <>
        <Head>
            <title>Articles</title>
            <meta name="description" content="Articles" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
          <h1>Список статей дя редактирования</h1>
        </main>
    </>  ) 
}


