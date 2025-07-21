import styles from '../styles/filesystem.module.scss'
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../AppContext.tsx";

export const FileSystemPane = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { setFilePath } = useContext(AppContext);

    const setSelection = () => {
        const selectedFile = files[selectedIndex]

        if (selectedFile.type === 'file') {
            setFilePath(files[selectedIndex].path)
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
    }

    const fileTypeMap = (type: string): string => {
        const map: {[key: string]: string} = {
            "file": "=FILE======>",
            "directory": "=DIRECTORY=>"
        };

        return map[type];
    };

    const files = [
        {
            title: "TempFile1",
            path: '~/TempFile1',
            type: "directory"
        },
        {
            title: "TempFile2",
            path: '~/TempFile2',
            type: "file"
        },
        {
            title: "TempFile3",
            path: '~/TempFile3',
            type: "file"
        },
        {
            title: "TempFile4",
            path: '~/TempFile4',
            type: "file"
        },
        {
            title: "TempFile5",
            path: '~/TempFile5',
            type: "file"
        },
        {
            title: "README.txt",
            path: '~/README.txt',
            type: "file"
        }
    ];

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            changeSelection(event.code)
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [selectedIndex])

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