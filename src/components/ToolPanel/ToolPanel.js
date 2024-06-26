import * as React from 'react';
import cn from "classnames";

import { useEditorApi } from "../TextEditor";
import { BlockType, InlineStyle } from '../TextEditor/config';

export default function ToolPanel({ } ) {
  const {
    toHtml,
    addLink,
    toggleBlockType,
    currentBlockType,
    toggleInlineStyle,
    hasInlineStyle,
  } = useEditorApi();
  return (
    <div className="tool-panel">
      <button
        className={cn(
          "tool-panel__item",
          currentBlockType === BlockType.h1 && "tool-panel__item_active"
        )}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.h1);
        }}
      >
        Заголовок
      </button>
      <button
        className={cn(
          "tool-panel__item",
          currentBlockType === BlockType.h2 && "tool-panel__item_active"
        )}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.h2);
        }}
      >
        Подзаголовок
      </button>
      <button
        className={cn(
          "tool-panel__item",
          currentBlockType === BlockType.blockquote && "tool-panel__item_active"
        )}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.blockquote);
        }}
      >
        Цитата
      </button>
      <button
        className={cn(
          "tool-panel__item",
          currentBlockType === BlockType.code && "tool-panel__item_active"
        )}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.code);
        }}
      >
        Код
      </button>
      <button
        className={cn(
          "tool-panel__item",
          currentBlockType === BlockType.default && "tool-panel__item_active"
        )}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlockType(BlockType.default);
        }}
      >
        Простой
      </button>

      {Object.values(InlineStyle).map((v) => (
        <button
          key={v}
          className={cn(
            "tool-panel__item",
            hasInlineStyle(v) && "tool-panel__item_active"
          )}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle(v);
          }}
        >
          {v}
        </button>
      ))}


    </div>
  );
}