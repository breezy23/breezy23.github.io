import styles from '../styles/filesystem.module.scss'
import data from '../data/directories.json'
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../AppContext.tsx";

export const FileSystemPane = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { currentDirectory, setCurrentDirectory, setFilePath, setCurrentDocument } = useContext(AppContext);

    const selectedDirectory = data.find(dir => dir.path === currentDirectory);
    const files = selectedDirectory?.files || [];

    const setSelection = () => {
        const selectedFile = files[selectedIndex]

        setFilePath(files[selectedIndex].path);

        if (selectedFile.type === 'file') {
            setCurrentDocument(selectedFile.title);
        } else if (selectedFile.type == 'directory') {
            setSelectedIndex(0);

            if (selectedFile.title !== "../") {
                setCurrentDirectory(`${currentDirectory}${selectedFile.title}/`);
            } else {
                setCurrentDirectory(selectedFile.path);
            }
        }
    }
    const changeSelection = (key: string) => {
        switch (key) {
            case 'ArrowUp':
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));

                break;
            case 'ArrowDown':
                setSelectedIndex(prev => (prev < files.length - 1 ? prev + 1 : prev));

                break;
            case 'Enter':
                setSelection();

                break;
        }
    };

    const fileTypeMap = (type: string): string => {
        const map: {[key: string]: string} = {
            "file": "=FILE======>",
            "directory": "=DIRECTORY=>"
        };

        return map[type];
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            changeSelection(event.code)
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [files, selectedIndex])

    return (
        <div className={styles.filesystem}>
            <div className={styles.fileselector_title}>
                {files.map((file, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                        <div
                            className={`${styles.text} ${isSelected ? styles.selected : ''}`}
                            key={file.title}
                        >
                            {file.title}
                        </div>
                    );
                })}
            </div>
            <div className={`${styles.fileselector_type}`}>
                {files.map((file, index) => {
                    const isSelected = index === selectedIndex;

                    return (
                        <div
                            className={`${styles.text} ${isSelected ? styles.selected : ''}`} key={`${file.title}-type`}>
                            {fileTypeMap(file.type) }
                        </div>
                    );
                })}
            </div>
        </div>
    )
}