import Image from "next/image";
import styles from "./Hero.module.css";

type Hero = {
  _id: string;
  name: string;
  genre: string;
  duration: number;
  rating: number;
  views: number;
  coverImage: string;
  trailerImage: string;
};

async function getHeroData() {
  const res = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero"
  );
  const { data }: { success: boolean; data: Hero } = await res.json();

  return data;
}

const Hero = async () => {
  const data = await getHeroData();

  return (
    <div className={styles.container}>
      <div>
        <h1>{data.name}</h1>
        <p className={styles.rating}>
            {"★".repeat(data.rating).padEnd(5, "☆")}
        </p>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum at
        blanditiis aliquam fugit quaerat quae praesentium ex. Quaerat hic
        facere, ea, mollitia rerum, quisquam laudantium fugit quibusdam soluta
        quam nulla!
      </p>
      <ul>
        <li>Genre: {data.genre}</li>
        <li>Duration: {data.duration} minutes</li>
        <li>Ratings: {data.rating} </li>
      </ul>
      <Image className={styles.coverImage} src={data.coverImage} alt={data.name} fill />
    </div>
  );
};

export default Hero;
