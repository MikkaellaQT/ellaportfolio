import { Link } from 'next-view-transitions';
import { HiCursorClick } from 'react-icons/hi';

import { GITHUB_API_URL, GITHUB_USERNAME } from '@/lib/constants';
import { featuredRepositories } from '@/app/data/data';
import Heading from './heading';
import RepoCard from './repo-card';

async function fetchRepositoriesData() {
  // Validate environment variables
  if (!GITHUB_API_URL || !GITHUB_USERNAME) {
    console.error('GitHub API URL or username is not configured');
    return [];
  }

  try {
    const reposData = await Promise.all(
      featuredRepositories.map(async (repoName) => {
        try {
          const url = `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`;
          const response = await fetch(url, {
            next: { revalidate: 3600 }
          });

          if (!response.ok) {
            console.warn(`Repository ${repoName} not found (${response.status})`);
            return null;
          }

          return await response.json();
        } catch (error) {
          console.error(`Error fetching ${repoName}:`, error);
          return null;
        }
      })
    );
    
    return reposData.filter(Boolean);
  } catch (error) {
    console.error('Failed to fetch repositories:', error);
    return [];
  }
}

export default async function FeaturedRepo() {
  const repositories = await fetchRepositoriesData();

  if (repositories.length === 0) {
    return (
      <section className="py-8">
        <Heading title="Featured Projects" />
        <div className="text-center py-8">
          <p className="text-gray-500">Unable to load featured projects at this time.</p>
          <Link 
            href={`https://github.com/${GITHUB_USERNAME}`}
            className="mt-4 inline-flex items-center text-blue-500 hover:underline"
            target="_blank"
          >
            Visit my GitHub <HiCursorClick className="ml-1" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <Heading title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {repositories.map((repo) => (
          <RepoCard key={repo.id} repository={repo} />
        ))}
      </div>
    </section>
  );
}