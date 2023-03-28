import Image from "next/image";
import Backdrop from "./components/Backdrop";
import Popular from "./components/Popular";
import Trending from "./components/Trending";

export default async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=adb3841793caaf6a9e966e7d19f45b17"
  );
  const data = await res.json();

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=adb3841793caaf6a9e966e7d19f45b17"
  );
  const newData = await response.json();
  console.log(newData);

  return (
    <main className="wrapper min-h-screen">
      <Backdrop />

      <Trending movies={data} />

      <Popular movies={newData} />
    </main>
  );
}
