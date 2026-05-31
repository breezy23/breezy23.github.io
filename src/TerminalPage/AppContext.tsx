import {createContext} from 'react';

export interface AppContextType {
    filePath: string;
    setFilePath: (path: string) => void;
    currentDocument: string;
    setCurrentDocument: (document: string) => void;
    currentDirectory: string;
    setCurrentDirectory: (directory: string) => void;
}

export const defaultContext: AppContextType = {
    filePath: '~/README.txt',
    setFilePath: () => {},
    currentDocument: 'README',
    setCurrentDocument: () => {},
    currentDirectory: '~/',
    setCurrentDirectory: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContext);