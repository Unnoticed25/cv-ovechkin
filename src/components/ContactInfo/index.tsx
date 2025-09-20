'use client'

import styles from "@/app/[lang]/page.module.css";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {getTranslations} from "@/utils/i18n";
import Link from "next/link";

interface IProps {
    translate: Record<string, string>;
}

export default function ContractInfo({translate}:IProps) {

    return (
        <div className={styles.mainInfo}>
            <div className={styles.contactItem}>
                <EmailIcon className={styles.icon}/>
                <Link href={''} target={"_blank"} rel={"noopener noreferrer"}><span className={styles.email}>{translate.email}</span></Link>
            </div>
            <div className={styles.contactItem}>
                <LocationOnIcon className={styles.icon}/>
                <span>{translate.accommodation}</span>
            </div>
            <div className={styles.contactItem}>
                <PhoneIcon className={styles.icon}/>
                <span>{translate.phone}</span>
            </div>
        </div>
    )
}