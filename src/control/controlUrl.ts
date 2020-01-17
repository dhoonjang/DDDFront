export interface IHistory {
  replace: (path: string) => void;
  push: (path: string) => void;
}

export function makeGetUrl(baseUrl: string, url: string, params: any): string {
  const getUrl = new URL(baseUrl + url);
  if (params) {
    getUrl.search = new URLSearchParams(params).toString();
  }
  return String(getUrl);
}

export function ReloadUrlMove(path: string): void {
  window.location.href = path;
}

export function RouteUrlMove(
  history: IHistory,
  path: string,
  replace?: boolean
): void {
  if (replace) {
    history.replace(path);
  } else {
    history.push(path);
  }
}
