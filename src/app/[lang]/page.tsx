import Image from "next/image";
import styles from "./page.module.css"
import profileImg from "../../../public/img/photo.jpg"
import {getTranslations} from "@/utils/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContractInfo from "@/components/ContactInfo";
import Link from "next/link";
import TelegramBtn from "@/components/TelegramBtn";
import HhBtn from "@/components/HhBtn";

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
            <main className={`${styles.main} transition`}>
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
                        <div className={styles.hhContainer}>
                            <TelegramBtn/>
                            <HhBtn/>
                        </div>
                    </div>
                    <h1 className={styles.title}>{t.main.header.fio}</h1>
                    <Link href={"https://hh.ru/resume/3063eb6cff0c421e400039ed1f346943454b63"} target={"_blank"} rel={"noopener noreferrer"}><div className={styles.position}>{tHeader.position}</div></Link>
                    <ContractInfo tHeader={tHeader} tHints={t.hints}/>
                </div>
                <hr/>
                <div className={styles.blockInfo}>
                    <div className={styles.aboutWrapper}>
                        <h2>{tInfo.about.title_experience}</h2>
                        <div className={styles.textAbout} dangerouslySetInnerHTML={{ __html: tInfo.about.text_experience}}/>
                        <h2>{tInfo.about.title_about}</h2>
                        <div className={styles.textAbout} dangerouslySetInnerHTML={{ __html: tInfo.about.text_about}}/>
                        <h2>{tInfo.about.title_education}</h2>
                        <div className={styles.textAbout} dangerouslySetInnerHTML={{ __html: tInfo.about.text_education}}/>
                    </div>
                    <div className={styles.verticalDivider}/>
                    <div>
                        <h2>{tInfo.skills.title_skills}</h2>
                        <div className={styles.skills}>
                            {tInfo.skills.text_skills.split(',').map((el: string) => {
                                    return (
                                        <p className={styles.textSkills} key={el}>{el}</p>
                                    )
                                }
                            )}
                            <h2 style={{width: '100%', marginTop: 12}}>{tInfo.skills.title_add}:</h2>
                            {tInfo.skills.text_skills_add.split(',').map((el: string) => {
                                    return (
                                        <p className={styles.textSkillsAdd} key={el}>{el}</p>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
