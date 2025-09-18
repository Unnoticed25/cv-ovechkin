import Image from "next/image";
import styles from "./page.module.css";
import profileImg from "../../public/img/photo.jpg"

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image
                    className={styles.profileImg}
                    src={profileImg}
                    alt={'My photo'}
                    width={180}
                    height={180}
                    quality={100}
                    style={{objectFit: "cover"}}
                />
            </main>
            {}
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}
