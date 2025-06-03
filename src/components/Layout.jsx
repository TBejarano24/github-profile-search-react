import React from "react";

export default function Layout() {
  return (
    <div>
      <section className="h-[170px] w-full bg-[url(/hero-image-github-profile.png)] bg-cover bg-center flex justify-center">
        <div className="grid grid-cols-[0.7fr_5fr] w-[85%] bg-[#20293A] h-8 rounded-md mt-4 max-w-[400px]">
          <button className="w-full">
            <img
              className="place-self-center"
              src="/Search.svg"
              alt="search-logo"
              width={"17px"}
            />
          </button>
          <input
            type="text"
            placeholder="username"
            className="placeholder:text-[#fffb] text-[12px] text-[#fffb]"
          />
        </div>
      </section>
      <section className="h-[300px] bg-[#20293A]">
        <div className="flex flex-wrap absolute h-[30px] bg-amber-100"></div>
      </section>
    </div>
  );
}
