export const SEARCH_USERS_SUCCESS = "SEARCH_USERS_SUCCESS";
export const SEARCH_RESULTS_FAILURE = "SEARCH_RESULTS_FAILURE";
export const SEARCH_RESULTS_LOADING_START = "SEARCH_RESULTS_LOADING_START";
export const SEARCH_RESULTS_LOADING_END = "SEARCH_RESULTS_LOADING_END";
export const SEARCH_REPO_SUCCESS = "SEARCH_REPO_SUCCESS"
export const UNSET_LOAD_MORE = "UNSET_LOAD_MORE"

export type user = {
  login: string,
  url: string,
  html_url: string,
  avatar_url: string,
  type: "User",
  repos_url: string,
  location: string | null,
  email: string,
  bio: string | null,
  followers: number,
  following: number,
  created_at: string,
  public_repos: number
}
export type repo = {
  full_name: string,
  owner: user,
  html_url: string,
  description: string,
  url: string,
  created_at: string,
  updated_at: string,
  stargazers_count?: number,
  language?: string,
}

export type usersPayload = {
  users: user[],
  searchText: string | number,
  pageNumber: number
};
export type reposPayload = {
  repos: repo[],
  searchText: string | number,
  pageNumber: number
};
export interface searchUsersSuccess {
  type: typeof SEARCH_USERS_SUCCESS;
  payload: usersPayload;
}

export interface searchRepoSuccess {
  type: typeof SEARCH_REPO_SUCCESS,
  payload: reposPayload
}
export interface searchresultsFailure {
  type: typeof SEARCH_RESULTS_FAILURE;
}

export interface loaderStart {
  type: typeof SEARCH_RESULTS_LOADING_START
}
export interface loaderEnd {
  type: typeof SEARCH_RESULTS_LOADING_END
}
export interface resetLoadMore {
  type: typeof UNSET_LOAD_MORE
}