export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string | null;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    // New fields
    languages?: string[];
    techStack?: string[];
}

export interface GitHubRepo {
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    topics: string[];
}

export async function getGitHubUser(username: string): Promise<GitHubUser | null> {
    const headers = {
        'User-Agent': 'TomasAstro-Portfolio',
        'Accept': 'application/vnd.github.v3+json'
    };

    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
        if (!userResponse.ok) {
            console.error(`Failed to fetch GitHub user: ${userResponse.statusText}`);
            return null;
        }

        const userData: GitHubUser = await userResponse.json();

        // Fetch repositories to get languages and techstack
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers });
        if (reposResponse.ok) {
            const repos: GitHubRepo[] = await reposResponse.json();

            // Extract unique languages
            const languageMap = new Map<string, number>();
            const topics = new Set<string>();

            repos.forEach(repo => {
                if (repo.language) {
                    languageMap.set(repo.language, (languageMap.get(repo.language) || 0) + 1);
                }
                if (repo.topics) {
                    repo.topics.forEach(topic => topics.add(topic));
                }
            });

            // Sort languages by frequency
            userData.languages = Array.from(languageMap.entries())
                .sort((a, b) => b[1] - a[1])
                .map(entry => entry[0]);

            // Tech stack can be a mix of common topics or just topics
            userData.techStack = Array.from(topics);
        }

        return userData;
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        return null;
    }
}

