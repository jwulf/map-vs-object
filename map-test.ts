declare const process: any;

export function test({
  cacheSize,
  numExpiredCacheEntries,
  numCacheLookupQueries
}) {
  const hrstart = process.hrtime();
  const a = new Map();

  let hit = 0;
  let miss = 0;

  for (let i = 0; i < cacheSize; i++) {
    a.set(i, i);
  }

  for (let n = 0; n < numExpiredCacheEntries; n++) {
    const r = Math.round(Math.random() * cacheSize);
    a.delete(r);
  }

  for (let g = 0; g < numCacheLookupQueries; g++) {
    const r = Math.round(Math.random() * cacheSize);
    if (a.has(r)) {
      hit++;
    } else {
      miss++;
    }
  }

  const hrend = process.hrtime(hrstart);
  return hrend;
}
