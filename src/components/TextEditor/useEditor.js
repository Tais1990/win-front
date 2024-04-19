import {
  KeyBindingUtil,
  getDefaultKeyBinding,
  CompositeDecorator,
  EditorState,
  RichUtils } from 'draft-js';
import * as React from 'react';

import { EntityType, InlineStyle } from "./config"
import { HTMLtoState, stateToHTML } from "./convert"
import LinkDecorator from "./Link";

const decorator = new CompositeDecorator([LinkDecorator]);

export const useEditor = (html=null) => {
  const [state, setState] = React.useState(() =>
    html && (typeof window !== 'undefined')
      ? EditorState.createWithContent(HTMLtoState(html), decorator)
      : EditorState.createEmpty(decorator)
  );

  const toggleBlockType = React.useCallback((blockType) => {
    setState((currentState) =>
      RichUtils.toggleBlockType(currentState, blockType)
    );
  }, []);

  const currentBlockType = React.useMemo(() => {
    const selection = state.getSelection();
    const content = state.getCurrentContent();
    const block = content.getBlockForKey(selection.getStartKey());
    return block.getType();
  }, [state]);

  const toggleInlineStyle = React.useCallback((inlineStyle) => {
    setState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, inlineStyle)
    );
  }, []);

  const hasInlineStyle = React.useCallback(
    (inlineStyle) => {
      const currentStyle = state.getCurrentInlineStyle();
      return currentStyle.has(inlineStyle);
    },
    [state]
  );

  const setEntityData = React.useCallback((entityKey, data) => {
    setState((currentState) => {
      const content = currentState.getCurrentContent();
      const contentStateUpdated = content.mergeEntityData(entityKey, data);
      return EditorState.push(
        currentState,
        contentStateUpdated,
        "apply-entity"
      );
    });
  }, []);

  const addEntity = React.useCallback(
    (
      entityType,
      data,
      mutability
    ) => {
      setState((currentState) => {
        const contentState = currentState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          entityType,
          mutability,
          data
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newState = EditorState.set(currentState, {
          currentContent: contentStateWithEntity,
        });
        return RichUtils.toggleLink(
          newState,
          newState.getSelection(),
          entityKey
        );
      });
    },
    []
  );

  const addLink = React.useCallback(
    (url) => {
      addEntity(EntityType.link, { url }, "MUTABLE");
    },
    [addEntity]
  );

  const handleKeyCommand = React.useCallback(
    (command, editorState) => {
      if (command === "accent") {
        toggleInlineStyle(InlineStyle.ACCENT);
        return "handled";
      }

      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        setState(newState);
        return "handled";
      }

      return "not-handled";
    },
    [toggleInlineStyle]
  );

  const handlerKeyBinding = React.useCallback((e) => {
    if (e.keyCode === 81 && KeyBindingUtil.hasCommandModifier(e)) {
      return "accent";
    }

    return getDefaultKeyBinding(e);
  }, []);

  const toHtml = React.useCallback(
    () => stateToHTML(state.getCurrentContent()),
    [state]
  );

  return React.useMemo(() => ({
    state,
      onChange: setState,
      toggleBlockType,
      currentBlockType,
      toggleInlineStyle,
      hasInlineStyle,
      toHtml,
      addLink,
      setEntityData,
      handleKeyCommand,
      handlerKeyBinding,
  }), [
    state,
      toggleBlockType,
      currentBlockType,
      toggleInlineStyle,
      hasInlineStyle,
      toHtml,
      addLink,
      setEntityData,
      handleKeyCommand,
      handlerKeyBinding,
  ])
}