export type Thistory = {
  push: (path: string) => void;
};

export function ReloadUrlMove(path: string): void {
  window.location.href = path;
}

export function RouteUrlMove(history: Thistory, path: string): void {
  history.push(path);
}
