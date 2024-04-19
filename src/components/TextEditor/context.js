import React from "react";
import {useEditor} from "./useEditor";
const TextEditorContext = React.createContext(undefined);
export const useEditorApi = () => {
    const context = React.useContext(TextEditorContext)
    if (context === undefined) {
        throw new Error('useEditorApi must be used within TextEditorProvider');
    }      
    return context;
}
export function TextEditorProvider({ children, defaulTtext }) {
    const editorApi = useEditor(defaulTtext);

    return (
        <TextEditorContext.Provider value={editorApi}>
            { children }
        </TextEditorContext.Provider>
    )
}