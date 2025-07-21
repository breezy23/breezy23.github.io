import styles from '../TerminalPage.module.scss'
import {useState} from "react";

export const FileSystemPane = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

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
            type: "directory"
        },
        {
            title: "TempFile2",
            type: "file"
        },
        {
            title: "TempFile3",
            type: "file"
        },
        {
            title: "TempFile4",
            type: "file"
        },
        {
            title: "TempFile5",
            type: "file"
        },
    ];

    return (
        <div className={styles.filesystem}>
            <div className={styles.fileselector_title}>
                {files.map((file) => {
                    const isSelected = true;
                    return (
                        <div className={`${styles.text} ${isSelected ? styles.selected : ''}`}>
                            {file.title}
                        </div>
                    );
                })}
            </div>
            <div className={`${styles.fileselector_type}`}>
                {files.map((file) => {
                    const isSelected = true;

                    return (
                        <div className={`${styles.text} ${isSelected ? styles.selected : ''}`}>
                            {fileTypeMap(file.type) }
                        </div>
                    );
                })}
            </div>
        </div>
    )
}