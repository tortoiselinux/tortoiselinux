// components/Repos.tsx
import React from "react";
import { IRepo } from "../interfaces";

export default async function Repos() {
  const data = await getData();

  return (
    <div>
      {data.map((repo: IRepo) => (
        <div key={repo.id} className="repo">
          <div className="repo-name">
            <a href={`https://github.com/` + repo.full_name}>{repo.name}</a>
          </div>
          <div className="repo-description">
            {repo.description || "Sem descrição"}
          </div>
        </div>
      ))}
    </div>
  );
}

async function getData() {
  const res = await fetch("https://api.github.com/users/tortoiselinux/repos", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
