import Image from "next/image";
import styles from "./page.module.css"
import profileImg from "../../../public/img/photo.jpg"
import {getTranslations} from "@/utils/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';


export default async function Home({params}) {
    const {lang} = await params;
    const t = getTranslations(lang);
    const tHeader = t.main.header;

    return (
        <div className={styles.page}>
            <LanguageSwitcher currentLang={lang}/>
            <main className={styles.main}>
                <div className={styles.header}>
                    <Image
                        className={styles.profileImg}
                        src={profileImg}
                        alt={'My photo'}
                        width={140}
                        height={140}
                        quality={100}
                        style={{objectFit: "cover", userSelect: 'none'}}
                    />
                    <h1 className={styles.title}>{t.main.header.fio}</h1>
                    <div className={styles.position}>{tHeader.position}</div>
                    <div className={styles.mainInfo}>
                        <div className={styles.contactItem}>
                            <EmailIcon className={styles.icon}/>
                            <span>{tHeader.email}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <LocationOnIcon className={styles.icon}/>
                            <span>{tHeader.accommodation}</span>
                        </div>
                        <div className={styles.contactItem}>
                            <PhoneIcon className={styles.icon}/>
                            <span>{tHeader.phone}</span>
                        </div>
                    </div>

                </div>
                <hr/>
                <div></div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}
