export interface IHistory {
  push: (path: string) => void;
  replace: (path: string) => void;
}

export function ReloadUrlMove(path: string): void {
  window.location.href = path;
}

export function RouteUrlMove(history: IHistory, path: string): void {
  history.push(path);
}
