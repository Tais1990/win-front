
import React, {useState, useEffect} from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

import articlesAPI from '@/api/articlesAPI'
import WorkspaceLayout from "@/layouts/WorkspaceLayout/WorkspaceLayout";
import ArticleEdit from "@/components/ArticleEdit/ArticleEdit";

export default function Article({ }) {
  const router = useRouter()
  const { id } = router.query 
  return (
    <WorkspaceLayout title="Редактирование статьи">
      <ArticleEdit id={id}></ArticleEdit>
    </WorkspaceLayout>
  )
}


