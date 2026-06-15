const internalHashPattern = /^#\/[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)?(?:#[a-z0-9][a-z0-9-]*)?$/i;
const localAssetPattern = /^\/(?:[a-z0-9._-]+\/)*[a-z0-9._-]+$/i;
const youtubeEmbedHosts = new Set(['www.youtube.com', 'www.youtube-nocookie.com']);
const approvedVideoHosts = new Set([
  'pub-f5e1fd2c513f432b9abc4e51398be430.r2.dev',
  'pub-f6fca3f41b8943aaac45cf128d4740d7.r2.dev',
]);

export function getSafeInternalHash(value: string, fallback = '#/home') {
  return internalHashPattern.test(value) ? value : fallback;
}

export function getSafeLocalAssetPath(value?: string) {
  if (!value || !localAssetPattern.test(value) || value.includes('..') || value.includes('\\')) {
    return undefined;
  }

  return `${import.meta.env.BASE_URL}${value.slice(1)}`;
}

export function getSafeYouTubeEmbedUrl(value: string) {
  try {
    const url = new URL(value);
    const isEmbedPath = /^\/embed\/[a-z0-9_-]+$/i.test(url.pathname);
    return url.protocol === 'https:' && youtubeEmbedHosts.has(url.hostname) && isEmbedPath
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

export function getSafeVideoUrl(value?: string) {
  const localPath = getSafeLocalAssetPath(value);
  if (localPath) return localPath;
  if (!value) return undefined;

  try {
    const url = new URL(value);
    const hasVideoExtension = /\.(?:mp4|webm)$/i.test(url.pathname);
    return url.protocol === 'https:' && approvedVideoHosts.has(url.hostname) && hasVideoExtension
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}
