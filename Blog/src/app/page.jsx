import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return <div className={styles.container}>
  <div className={styles.textContainer}>
    <h1>Creative Thoughts Agency</h1>
    <p>..</p>
    {/* still working...... */}
  </div>
  <div className={styles.buttons}>
    <button className={styles.button}>Learn More</button>
    <button className={styles.button}>
      Contact
    </button>
  </div>
  <div className={styles.brands}>
    {/* <Image src="/brands.png" alt="Brands" fill className={styles.brandsImg} /> */}
  </div>
  <div className={styles.imageContainer}>
  <Image src="/hero.gif" alt="Hero" fill className={styles.heroImg} />
  //still working..

  </div>
  </div>
};

export default Home;