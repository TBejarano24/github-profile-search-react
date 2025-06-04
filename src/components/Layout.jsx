import React from "react";

export default function Layout() {
  return (
    <div className="bg-[#20293A]">
      <section className="h-[230px] w-full bg-[url(/hero-image-github-profile.png)] bg-cover bg-center flex justify-center">
        <div className="grid grid-cols-[0.7fr_5fr] w-[85%] bg-[#20293A] h-[50px] rounded-md mt-6 max-w-[400px]">
          <button className="w-full">
            <img
              className="place-self-center"
              src="/Search.svg"
              alt="search-logo"
              width={"20px"}
            />
          </button>
          <input
            type="text"
            placeholder="username"
            className="placeholder:text-[#CDD5E0] text-[18px] text-[#CDD5E0]"
          />
        </div>
      </section>
      <section className="h-auto flex flex-col justify-center w-[85%] mx-auto">
        <div className="absolute h-[120px] w-[120px] bg-[#20293A] top-[190px] left-[30px] rounded-xl flex justify-center items-center">
          <img
            className="rounded-xl"
            src="https://placecats.com/millie_neo/105/105"
            alt="profile picture"
          />
        </div>
        <div className="flex flex-wrap gap-5 w-[70%] mt-[120px]">
          <div className="bg-[#111729] h-[50px] w-auto flex justify-center items-center rounded-xl text-[#CDD5E0] px-5">
            <span className="border-r border-[#CDD5E0] pr-3">Followers</span>
            <span className="pl-3">27389</span>
          </div>
          <div className="bg-[#111729] h-[50px] w-auto flex justify-center items-center rounded-xl text-[#CDD5E0] px-5">
            <span className="border-r border-[#CDD5E0] pr-3">Following</span>
            <span className="pl-3">0</span>
          </div>
          <div className="bg-[#111729] h-[50px] w-auto min-w-[250px] flex justify-center items-center rounded-xl text-[#CDD5E0] px-5">
            <span className="border-r border-[#CDD5E0] pr-3">Location</span>
            <span className="pl-3">San Francisco, CA</span>
          </div>
        </div>
        <section id="user-name-bio" className="py-5">
          <h1 className="text-[#CDD5E0] text-[30px] font-semibold">GitHub</h1>
          <p className="text-[#CDD5E0] font-semibold">
            How people build software
          </p>
        </section>
        <section
          id="card-container"
          className="w-full grid grid-cols-1 gap-y-6"
        >
          <div className="h-auto w-full p-[20px_4px] bg-[#1D1B48] rounded-xl flex flex-col justify-center items-center">
            <div className="w-[90%] flex flex-col gap-4">
              <h2 className="text-[#CDD5E0] text-[18px] font-semibold">
                .github
              </h2>
              <p className="text-[#97A3B6] text-[17px]">
                Community health files for the @GitHub organization
              </p>
              <div className="flex w-full gap-3">
                <div className="flex font-semibold items-center gap-1">
                  <img src="/Nesting.svg" alt="nesting" />
                  <span className="text-[#97A3B6] text-[17px]">2,369</span>
                </div>
                <div className="flex font-semibold items-center gap-1">
                  <img src="/Star.svg" alt="star" />
                  <span className="text-[#97A3B6] text-[17px]">703</span>
                </div>
              </div>
              <span className="text-[#97A3B6] text-[12px]">
                Updated 4 days ago
              </span>
            </div>
          </div>
        </section>
        <a
          className="text-[#CDD5E0] text-[17px] text-center font-semibold mx-auto my-[60px]"
          href="/"
        >
          View all repositories
        </a>
      </section>
    </div>
  );
}
