import { useHistory } from "react-router-dom";

export function ReloadUrlMove(path: string): void {
  window.location.href = path;
}

export function RouteUrlMove(path: string, replace?: boolean): void {
  const history = useHistory();
  if (replace) {
    history.replace(path);
  } else {
    history.push(path);
  }
}
