import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Layout() {
  const [profileData, setProfileData] = useState("");
  const [profileRepos, setProfileRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.github.com/users/github");
        setProfileData(response.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!profileData.repos_url) return;

      try {
        setLoading(true);
        const response = await axios.get(`${profileData.repos_url}`);
        setProfileRepos(response.data.slice(0, 4));
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [profileData.repos_url]);

  if (loading) {
    console.log("loading...");
  }

  if (error) {
    console.log(error);
  }

  console.log(profileData);
  console.log(profileRepos);

  return (
    <div>
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
        <div className="absolute h-[120px] w-[120px] bg-[#20293A] top-[190px] left-[7%] rounded-xl flex justify-center items-center">
          <img
            className="rounded-xl w-[105px] h-[105px]"
            src={profileData.avatar_url}
            alt="profile picture"
          />
        </div>
        <div className="flex flex-wrap gap-5 w-[70%] mt-[120px] lg:mt-[12px] lg:ml-[140px]">
          <div className="bg-[#111729] h-[50px] w-auto flex justify-center items-center rounded-xl text-[#CDD5E0] px-5">
            <span className="border-r border-[#CDD5E0] pr-3">Followers</span>
            <span className="pl-3">{profileData.followers}</span>
          </div>
          <div className="bg-[#111729] h-[50px] w-auto flex justify-center items-center rounded-xl text-[#CDD5E0] px-5">
            <span className="border-r border-[#CDD5E0] pr-3">Following</span>
            <span className="pl-3">{profileData.following}</span>
          </div>

          {profileData?.location ? (
            <div className="bg-[#111729] h-[50px] w-auto min-w-[250px] flex justify-center items-center rounded-xl text-[#CDD5E0] px-5">
              <span className="border-r border-[#CDD5E0] pr-3">Location</span>
              <span className="pl-3">{profileData.location}</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <section id="user-name-bio" className="py-5">
          <h1 className="text-[#CDD5E0] text-[30px] font-semibold">
            {profileData?.name ? profileData.name : profileData?.login}
          </h1>
          <p className="text-[#CDD5E0] font-semibold">
            {profileData?.bio ? profileData.bio : ""}
          </p>
        </section>
        <section
          id="card-container"
          className="w-full grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6"
        >
          {profileRepos?.map((repo) => {
            return (
              <div className="h-auto w-full p-[20px_4px] bg-[#1D1B48] rounded-xl flex flex-col justify-center items-center">
                <div className="w-[90%] flex flex-col gap-4">
                  <h2 className="text-[#CDD5E0] text-[18px] font-semibold">
                    {repo?.name}
                  </h2>
                  <p className="text-[#97A3B6] text-[17px]">
                    {repo?.description}
                  </p>
                  <div className="flex w-full gap-3">
                    {repo?.license ? (
                      <div className="flex font-semibold items-center gap-1">
                        <img src="/Chield_alt.svg" alt="license" />
                        <span className="text-[#97A3B6] text-[17px]">
                          {repo?.license?.spdx_id}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    {repo?.forks ? (
                      <div className="flex font-semibold items-center gap-1">
                        <img src="/Nesting.svg" alt="nesting" />
                        <span className="text-[#97A3B6] text-[17px]">
                          {repo?.forks_count}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    {repo?.stargazers_count ? (
                      <div className="flex font-semibold items-center gap-1">
                        <img src="/Star.svg" alt="star" />
                        <span className="text-[#97A3B6] text-[17px]">
                          {repo?.stargazers_count}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {repo?.updated_at ? (
                    <span className="text-[#97A3B6] text-[12px]">
                      Updated 4 days ago
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </section>
        <Link
          className="text-[#CDD5E0] text-[17px] text-center font-semibold mx-auto my-[60px]"
          to={"https://github.com"}
        >
          View all repositories
        </Link>
      </section>
    </div>
  );
}
