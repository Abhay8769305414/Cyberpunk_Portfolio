import { getGitHubRepos } from "@/lib/github";
import PortfolioClient from "@/components/PortfolioClient";

// ISR Revalidation interval in seconds
export const revalidate = 60;

export default async function HomePage() {
  const repos = await getGitHubRepos();

  return <PortfolioClient initialRepos={repos} />;
}
