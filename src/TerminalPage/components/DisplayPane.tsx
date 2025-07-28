import styles from '../styles/display.module.scss';
import {ReadMe} from "./display/Readme.tsx";
import { useContext} from "react";
import {AppContext} from "../AppContext.tsx";
import {About} from "./display/About.tsx";
import {Contact} from "./display/Contact.tsx";
import {Webpage} from "./display/Webpage.tsx";
import type { JSX } from 'react';

export const DisplayPane = () => {
    const { currentDocument } = useContext(AppContext)

    type DisplayKey = 'README' | 'About' | 'Contact' | 'breezy23.github.io';
    const displayMap: Record<DisplayKey, JSX.Element> = {
        "README": <ReadMe />,
        "About": <About />,
        "Contact": <Contact />,
        "breezy23.github.io": <Webpage />,
    };

    const componentToDisplay = (title: string) => {
        return displayMap[title as DisplayKey] || <div>Page not found</div>;
    };

    return (
        <div className={styles.display_pane}>
            {componentToDisplay(currentDocument)}
        </div>
    );
}