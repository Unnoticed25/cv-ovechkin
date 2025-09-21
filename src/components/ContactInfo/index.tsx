'use client'

import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ContentCopy from '@mui/icons-material/ContentCopy';
import styles from "./index.module.scss"
import Link from "next/link";

interface IProps {
    tHeader: Record<string, string>;
    tHints: Record<string, string>;
}

export default function ContractInfo({tHeader, tHints}: IProps) {
    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    const handleCopy = async (text: string, itemName: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(itemName);
            setTimeout(() => setCopiedItem(null), 2000);
        } catch (error) {
            console.error('Ошибка копирования:', error);
        }
    };

    return (
        <>
            {copiedItem && (
                <div className={styles.tooltip}>
                    {copiedItem} {tHints.copied}
                </div>
            )}
            <div className={styles.mainInfo}>
                <div className={styles.contactItem}>
                    <EmailIcon className={styles.icon}/>
                    <Link href={'mailto:sanchous20@gmail.com'}>
                        <span
                            className={styles.email}
                            onClick={async (e) => {
                                e.preventDefault();
                                await handleCopy('sanchous20@gmail.com', tHints.email);
                            }}
                        >
                            {tHeader.email}
                            <ContentCopy className={styles.copy}/>
                        </span>
                    </Link>
                </div>

                <div className={styles.contactItem}>
                    <LocationOnIcon className={styles.icon}/>
                    <span>{tHeader.accommodation}</span>
                </div>

                <div className={styles.contactItem}>
                    <PhoneIcon className={styles.icon}/>
                    <span
                        className={styles.phone}
                        onClick={() => handleCopy(tHeader.phone, tHints.phone)}
                    >
                        {tHeader.phone}
                        <ContentCopy className={styles.copy} />
                    </span>
                </div>
            </div>
        </>
    )
}