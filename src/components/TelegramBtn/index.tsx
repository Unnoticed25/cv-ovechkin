'use client'

import styles from "./index.module.scss"
import Link from "next/link";
import telegram from "@/../public/svg/Telegram.svg";
import Image from "next/image";

export default function TelegramBtn() {

    return (
        <div className={styles.wrapper}>
            <Link href={'https://t.me/Unnoticed00'} className={styles.tgLink}>
                <Image
                    src={telegram}
                    alt={'Telegram'}
                    width={28}
                    height={28}
                />
            </Link>
        </div>
    )
}