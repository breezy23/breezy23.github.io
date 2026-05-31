import styles from '../../styles/display.module.scss';
import AICert from '../../../assets/icons/AICert.png'
import {AsciiIcon} from "./AsciiIcon.tsx";
import react from '../../../assets/ascii-icons/react-1.txt?raw';
import javascript from '../../../assets/ascii-icons/JavaScript.txt?raw';
import typescript from '../../../assets/ascii-icons/TypeScript.txt?raw';
import python from '../../../assets/ascii-icons/python.txt?raw';
import java from '../../../assets/ascii-icons/Java.txt?raw';
import lua from '../../../assets/ascii-icons/lua.txt?raw';
import c from '../../../assets/ascii-icons/c.txt?raw';
import cpp from '../../../assets/ascii-icons/cpp.txt?raw';
import aws from '../../../assets/ascii-icons/aws.txt?raw';

export const About = () => {
    return (
        <div>
            <div>
                Hello, I'm Brandon Zaragoza! I'm a cloud software engineer working for <a href="https://www.synk.com/" target="_blank">Synk</a>.
                I have a strong background in backend engineering, with expereince building and maintaing scalable scalable REST APIs
                and real-time data pipelines for ingesting, processing, and analyzing large amounts of sensor IoT data via AWS IoT Core.
                In addition, I also have significant frontend experience, working on a production application used by real customers, where I built and
                maintained user facing features using React, TypeScript, and SASS CSS.
            </div>
            <div>
                I first began programming began in high school, where I created small game modifications in Java while
                taking computer science courses. This early exposure gave me hands on experience with working with APIs
                and following best practices, as well as sparking an interest that initial interest in software development,
                which I would begin to pursue in college.
            </div>
            <div>
                During college, I held a part-time position at John Deere, which is where I gained my experience working
                with agile methodologies and a modern web application tech stack. This role challenged me to adapt
                quickly, collaborate effectively, and continuously expand my technical skillset. These abilities were
                further strengthened during my apprenticeship at Source Allies, where I worked as a consultant. In that
                role, I rapidly got up to speed with unfamiliar technologies to design and develop generative AI-driven solutions
                tailored to our client needs.
            </div>
            <div>
                Outside of work, I’m constantly exploring new programming concepts, frameworks, and tools to stay sharp
                and grow as a software engineer. I also enjoy photography as a creative outlet and am continually working to
                improve in that area as well.
            </div>
            <br/>
            <div>
                Certifications:
                <div className={styles.image_container}>
                    <a
                        href={'https://www.credly.com/badges/aa18615f-114e-4e5c-b9d6-71db3bb60779/linked_in?t=sz6vo0'}
                        target={'_blank'}
                    >
                        <img
                            alt={'AWS AI Practitioner Certification'}
                            className={styles.normal_icon}
                            src={AICert}
                        />
                    </a>
                </div>
                Skillset:
                <div className={styles.image_container}>
                    <AsciiIcon asciiText={aws} />
                    <AsciiIcon asciiText={python} />
                    <AsciiIcon asciiText={react} />
                    <AsciiIcon asciiText={javascript} />
                    <AsciiIcon asciiText={typescript} />
                    <AsciiIcon asciiText={java} />
                    <AsciiIcon asciiText={lua} />
                    <AsciiIcon asciiText={c} />
                    <AsciiIcon asciiText={cpp} />
                </div>
            </div>
        </div>
    )
}