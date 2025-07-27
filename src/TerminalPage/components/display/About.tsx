import styles from '../../styles/display.module.scss';
import AICert from '../../../assets/icons/AICert.png'

export const About = () => {
    return (
        <div>
            <div>
                Hello! I'm Brandon Zaragoza, a recently graduated Software Developer with a strong foundation in web
                development and a passion for continuous learning. Currently, my expertise lies in modern web
                technologies due to hands on professional experience. Ultimately, I’m driven by curiosity and a
                desire to grow beyond my comfort zone, constantly expanding and growing my techinical skillset.
            </div>
            <div>
                I began programming began in high school, where I created small game modifications in Java while
                taking computer science courses. That early hands-on exposure sparked a lasting passion for software
                development that continues to motivate and push me today.
            </div>
            <div>
                During college, I held a part-time position at John Deere, where I gained valuable experience working
                with agile methodologies and a modern web application tech stack. This role challenged me to adapt
                quickly, collaborate effectively, and continuously expand my technical skillset. These abilities were
                further strengthened during my apprenticeship at Source Allies, where I worked as a consultant. In that
                role, I rapidly got up to speed with unfamiliar technologies to design and develop AI-driven solutions
                tailored to our client needs.
            </div>
            <div>
                Outside of work, I’m constantly exploring new programming concepts, frameworks, and tools to stay sharp
                and grow as an engineer. I also enjoy photography as a creative outlet and am continually working to
                improve in that area as well.
            </div>
            <br/>
            <div>
                Skillset:
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
            </div>
        </div>
    )
}