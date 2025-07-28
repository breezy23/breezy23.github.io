import styles from '../../styles/display.module.scss'
import { ReactIcon } from './ReactIcon.tsx';
import { AsciiIcon } from './AsciiIcon.tsx'
import vite from "../../../assets/ascii-icons/vite.txt?raw"

export const ReadMe = () => {
    return (
        <div>
            <div>
                Hello! This is a small webapp I built to serve as both my personal home on the web and a long-overdue replacement for my old portfolio (which hasn't been touched in years— oops).
            </div>
            <div>
                Think of this site like a little file system. Use the up/down arrow keys to browse, and hit Enter to open files!
            </div>
            <br/>
            <div>
                Made with:
                <div className={styles.image_container}>
                    <ReactIcon />
                    <AsciiIcon asciiText={vite} />
                </div>
            </div>
            <br/>
            <div >
                And lots and lots of ❤! Thanks for stopping by!
            </div>
        </div>
    );
}