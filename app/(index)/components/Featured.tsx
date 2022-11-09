import Link from "next/link";
import React from "react";

type Featured = {
  _id: string;
  name: string;
  genre: string;
  duration: number;
  rating: number;
  views: number;
  coverImage: string;
  trailerImage: string;
};

async function getFeaturedData() {
  const res = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies"
  );
  const { data }: { success: boolean; data: Featured[] } = await res.json();

  return data;
}

const Featured = async () => {
  const data = await getFeaturedData();

  return (
    <div>
      {data.map((featured) => (
        <Link href={`/${featured._id}`} key={featured._id}>
            <img src={featured.coverImage} alt="featured-img" />
        </Link>
      ))}
    </div>
  );
};

export default Featured;
