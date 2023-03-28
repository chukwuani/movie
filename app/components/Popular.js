import React from "react";

export default function Popular({ movies }) {
  const img = "https://image.tmdb.org/t/p/original";
  return (
    <section className="feed">
      <nav className="feed-nav w-full flex items-center justify-between">
        <h1 className="text-white">Popular ❤️</h1>
        {/* <a className="text-blue-400" href="#">
          See all
        </a> */}
      </nav>
      <div className="container">
        {movies.results.map((item) => (
          <div className="card" key={item.title}>
            <img src={img + item.poster_path} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
