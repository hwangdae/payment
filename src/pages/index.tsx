import { MERCHANDISES } from "@/mockupData/Merchandise";
import React from "react";

const Home = () => {
  return (
    <main>
      <ul className="grid grid-cols-4 gap-4">
        {MERCHANDISES.map((merchandise) => {
          return (
            <li key={merchandise.id} className="border">
              <div className="w-[100%] m-8">
              <h1 className="mb-2">
                <img width={145} src={merchandise.image} />
              </h1>
              <h2 className="text-sm font-bold">{merchandise.maker}</h2>
              <h2 className="text-sm">{merchandise.description}</h2>
              <p>{merchandise.price.toLocaleString()}원</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
