'use client'

import styles from "./index.module.scss"
import Link from "next/link";
import hh from "@/../public/svg/headhunter.svg";
import Image from "next/image";

export default function HhBtn() {

    return (
        <div className={styles.wrapper}>
            <Link href={'https://hh.ru/resume/3063eb6cff0c421e400039ed1f346943454b63'} className={styles.hhLink} target={"_blank"} rel={"noopener"}>
                <Image
                    src={hh}
                    alt={'Head Hunter'}
                    width={28}
                    height={28}
                />
            </Link>
        </div>
    )
}