export type THistory = {
  push: (path: string) => void;
  replace: (path: string) => void;
};

export function ReloadUrlMove(path: string): void {
  window.location.href = path;
}

export function RouteUrlMove(history: THistory, path: string): void {
  history.push(path);
}
