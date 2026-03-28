import { useState, useEffect } from 'react';
import type { Project, GitHubRepo } from '../types';
import { config } from '../data';

export function useGitHubRepos(username: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
        );
        if (!res.ok) throw new Error('Failed to fetch repos');
        const data: GitHubRepo[] = await res.json();
        const pinned = config.pinnedRepos;
        
        const filtered = data
          .filter((r) => pinned.includes(r.name))
          .sort((a, b) => pinned.indexOf(a.name) - pinned.indexOf(b.name))
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: config.repoDescriptions?.[r.name] ?? r.description ?? '',
            html_url: r.html_url,
            homepage: r.homepage,
            topics: r.topics ?? [],
            stars: r.stargazers_count,
            language: r.language,
          }));

        setProjects(filtered);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  return { projects, loading, error };
}
