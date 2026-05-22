export function getPublicAssetPath(path?: string) {
  if (!path) {
    return undefined;
  }

  return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
}
