import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h2 className={styles.title}>
          Better design for your digital products.
        </h2>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teamfrom the
          global tech industry.
        </p>
        <button className={styles.btn}> See Our Works</button>
      </div>
      <div className={styles.items}>
        <Image src={Hero} alt=""  className={styles.img}/>
      </div>
    </div>
  );
}
