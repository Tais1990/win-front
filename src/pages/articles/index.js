
import React, {useState, useEffect} from "react";

import articlesAPI from '@/api/articlesAPI'
import WorkspaceLayout from "@/layouts/WorkspaceLayout/WorkspaceLayout";

export default function Articles({ articles }) {
  return (
    <WorkspaceLayout title="Текущие статьи">
      <h1>Тут будет таблица со статьяи</h1>
    </WorkspaceLayout>
  )
}
// в действительности - нет смысла выдяяляьб это так, т.к. это нам не обязателноно надо собирать на серваке
export async function getStaticProps(context) {
  const articles = await articlesAPI.getAll()
  return {
    props: { 
      articles
     }, 
  }
}
