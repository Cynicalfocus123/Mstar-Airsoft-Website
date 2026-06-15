import { getSafeLocalAssetPath } from './safeUrl';

export function getPublicAssetPath(path?: string) {
  return getSafeLocalAssetPath(path);
}
