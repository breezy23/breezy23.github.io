import styles from '../styles/display.module.scss';
import {Resume} from "./display/Resume.tsx";
import {ReadMe} from "./display/Readme.tsx";
import {type JSX, useContext} from "react";
import {AppContext} from "../AppContext.tsx";

export const DisplayPane = () => {
    const { currentDocument } = useContext(AppContext)
    const componentToDisplay = (title: string) => {
        const displayMap: { "README.txt": JSX.Element; "Resume.md": JSX.Element } = {
            "README.txt": <ReadMe />,
            "Resume.md": <Resume />
        }

        return displayMap[title];
    }

    return (
        <div className={styles.display_pane}>
            {componentToDisplay(currentDocument)}
        </div>
    );
}