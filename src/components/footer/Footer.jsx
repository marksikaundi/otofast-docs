import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <span>&copy; {new Date().getFullYear()} Otofast Project</span>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt="Otofast Logo" />
        <Image src="/2.png" width={15} height={15} alt="Otofast Logo" />
        <Image src="/3.png" width={15} height={15} alt="Otofast Logo" />
        <Image src="/4.png" width={15} height={15} alt="Otofast Logo" />
      </div>
    </div>
  );
};

export default Footer;
