import styles from '../styles/display.module.scss';
import {ReadMe} from "./display/Readme.tsx";
import {useContext} from "react";
import {AppContext} from "../AppContext.tsx";
import {About} from "./display/About.tsx";
import {Contact} from "./display/Contact.tsx";

export const DisplayPane = () => {
    const { currentDocument } = useContext(AppContext)
    const componentToDisplay = (title: string) => {
        const displayMap = {
            "README": <ReadMe />,
            "About": <About />,
            "Contact": <Contact />
        }

        return displayMap[title];
    }

    return (
        <div className={styles.display_pane}>
            {componentToDisplay(currentDocument)}
        </div>
    );
}