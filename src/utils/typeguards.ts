/* eslint-disable @typescript-eslint/no-explicit-any */
import { GithubError, GithubUser } from 'types';

export const isGitHubUser = (user: any): user is GithubUser => 'id' in user;
export const isGitHubError = (user: any): user is GithubError => 'message' in user;
