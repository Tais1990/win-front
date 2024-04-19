import * as React from 'react';
import { Editor } from 'draft-js';
import { useEditorApi } from './context';
import cn from "classnames";
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from './config';

export default function TextEditor({ className, text }) {
  const editorApi = useEditorApi();
  return (
    <div className={cn("text-editor", className)}>
      <Editor
        spellCheck
        handleKeyCommand={editorApi.handleKeyCommand}
        customStyleMap={CUSTOM_STYLE_MAP}
        blockRenderMap={BLOCK_RENDER_MAP}
        editorState={editorApi.state}
        onChange={editorApi.onChange}
        keyBindingFn={editorApi.handlerKeyBinding}
      />
    </div>
  );
}

