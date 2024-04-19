import * as React from "react";
import { useEditorApi } from "../context";

export default function Link({ contentState, entityKey, children }) {
  const { setEntityData } = useEditorApi();
  const { url, className } = contentState.getEntity(entityKey).getData();

  const handlerClick = () => {
    const newUrl = prompt("URL:", url);
    if (newUrl) {
      setEntityData(entityKey, { url: newUrl });
    }
  };

  return (
    <a href={url} onClick={handlerClick} className={className}>
      {children}
    </a>
  );
};