import {createContext, ReactNode, useState} from 'react';

type AppContextType = {
    filePath: string;
    setFilePath: (newPath: string) => void;
    currentDocument: string;
    setCurrentDocument: (doc: string) => void;
};

const defaultContext: AppContextType = {
    filePath: '~/README.txt',
    setFilePath: () => {},
    currentDocument: 'README.txt',
    setCurrentDocument: () => {}
};


export const AppContext = createContext<AppContextType>(defaultContext);
export const AppProvider = ({children}: {children: ReactNode}) => {
    const [filePath, setFilePath] = useState('~/README.txt');
    const [currentDocument, setCurrentDocument] = useState('README.txt');

    return (
        <AppContext.Provider value={{ filePath, setFilePath, currentDocument, setCurrentDocument }}>
            {children}
        </AppContext.Provider>
    );
};