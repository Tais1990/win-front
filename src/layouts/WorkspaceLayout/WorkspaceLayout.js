import React from "react";
import Link from "next/link";
import api from "@/api/api";
import Head from 'next/head'
export default function WorkspaceLayout({children, title = 'Test Requered', description = '123', keywords = '123'}) {
    return (
        <>
            <Head>
                <title>{title || 'Test Reque'}</title>
                <meta name="description" content={description || ''} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || ''} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='layout__blocks'>
                {/* <Modal> */}
                    {/* <Blocks blocks={blocks} formsBlocks={formsBlocks} collectiveBlocks={collectiveBlocks} headers={headers}/> */}
                    {children}
                {/* </Modal> */}
            </main>
        </> 
    )    
}