import {createContext, ReactNode, useState} from 'react';

type AppContextType = {
    filePath: string;
    setFilePath: (newPath: string) => void;
};

const defaultContext: AppContextType = {
    filePath: '~/README.txt',
    setFilePath: () => {}
};


export const AppContext = createContext<AppContextType>(defaultContext);
export const AppProvider = ({children}: {children: ReactNode}) => {
    const [filePath, setFilePath] = useState('~/README.txt');

    return (
        <AppContext.Provider value={{ filePath, setFilePath }}>
            {children}
        </AppContext.Provider>
    );
};