import styles from '../TerminalPage.module.scss'

export const FileSystemPane = () => {
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
                    return (
                        <div className={styles.fileselector_text}>
                            {file.title}
                        </div>
                    );
                })}
            </div>
            <div className={styles.fileselector_type}>
                {files.map((file) => {
                    return (
                        <div>
                            {fileTypeMap(file.type)}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}