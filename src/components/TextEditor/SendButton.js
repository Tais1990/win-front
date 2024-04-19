import * as React from 'react';
import { useEditorApi } from './context';
import { stateToHTML } from "draft-js-export-html";

// Кнопка отправки текста
export default function SendButton() {
  const editorApi = useEditorApi();
  const send = () => {
    console.log('Отправка данных бек', stateToHTML(editorApi.state.getCurrentContent()));
  }
  return (
    <div>
      <button onClick={send}> Отправить данные на бек </button>
    </div>
  );
}

