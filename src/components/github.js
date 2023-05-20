import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Octokit } from "@octokit/core";

export default function GitHub() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("Pierre81385");
  const [gitStats, setGitStats] = useState([]);

  async function GitStats() {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_KEY,
    });

    await octokit
      .request("GET /repos/{owner}/{repo}/stats/commit_activity", {
        owner: "Pierre81385",
        repo: "matchdotdog",
        headers: {
          accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((response) => response.json())
      .then((json) => setGitStats(json))
      .catch((error) => setGitStats(error));
  }

  return (
    <Container>
      <Button
        onClick={() => {
          GitStats();
        }}
      >
        Send Task Request
      </Button>
      {gitStats ? <pre>{JSON.stringify(gitStats, null, 2)}</pre> : "Loading..."}
    </Container>
  );
}
