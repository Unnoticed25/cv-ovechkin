import Image from "next/image";
import styles from "./page.module.css"
import profileImg from "../../../public/img/photo.jpg"
import {getTranslations} from "@/utils/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContractInfo from "@/components/ContactInfo";
import Link from "next/link";
import TelegramBtn from "@/components/TelegramBtn";

interface IProps{
    params: Promise<{ lang: string }>
}

export default async function Home({params}:IProps) {
    const {lang} = await params;
    const t = getTranslations(lang);
    const tHeader = t.main.header;
    const tInfo = t.main.info;

    return (
        <div className={styles.page}>
            <LanguageSwitcher currentLang={lang}/>
            <main className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.profileContainer}>
                        <Image
                            className={styles.profileImg}
                            src={profileImg}
                            alt={'My photo'}
                            width={140}
                            height={140}
                            style={{objectFit: "cover", userSelect: 'none'}}
                        />
                        <TelegramBtn/>
                    </div>
                    <h1 className={styles.title}>{t.main.header.fio}</h1>
                    <Link href={"https://hh.ru/resume/3063eb6cff0c421e400039ed1f346943454b63"} target={"_blank"} rel={"noopener noreferrer"}><div className={styles.position}>{tHeader.position}</div></Link>
                    <ContractInfo translate={tHeader}/>
                </div>
                <hr/>
                <div className={styles.blockInfo}>
                    <div>
                        <h2>{tInfo.about.title_experience}</h2>
                        <p>{tInfo.about.text_experience}</p>
                        <h2>{tInfo.about.title_about}</h2>
                        <p>{tInfo.about.text_about}</p>
                    </div>
                    <div className={styles.verticalDivider}/>
                    <div><h2>{tInfo.skills.title_skills}</h2></div>
                </div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}
