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

export function ReloadUrlMove(path?: string): void {
  if (path) {
    window.location.href = path;
  } else {
    window.location.reload();
  }
}

export function checkProductOrigin(): boolean {
  const origin = window.location.origin;

  if (origin === "https://ddakdae.com") {
    return true;
  }
  console.log("not origin maybe default res");
  return false;
}

export function getUrlInfo() {
  const protocol = window.location.protocol;
  const host = window.location.host;
  const origin = window.location.origin;

  return { protocol, host, origin };
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
