export function getLocalItem(key: string): string | null {
  return window.localStorage.getItem(key);
}

export function setLocalItem(key: string, value: string): void {
  window.localStorage.setItem(key, value);
}

export function clearLocal(): void {
  window.localStorage.clear();
}
