import {useState} from 'react';
import type {ReactNode} from 'react';
import {AppContext} from './AppContext';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [filePath, setFilePath] = useState('~/README.txt');
    const [currentDocument, setCurrentDocument] = useState('README');
    const [currentDirectory, setCurrentDirectory] = useState('~/');

    return (
        <AppContext.Provider
            value={{
                filePath,
                setFilePath,
                currentDocument,
                setCurrentDocument,
                currentDirectory,
                setCurrentDirectory,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};