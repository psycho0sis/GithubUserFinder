import { GithubUser } from 'types';

export const isGitHubUser = (user: any): user is GithubUser => 'id' in user;
