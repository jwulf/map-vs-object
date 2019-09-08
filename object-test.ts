declare const process: any;

export function test({
  cacheSize,
  numExpiredCacheEntries,
  numCacheLookupQueries
}) {
  const hrstart = process.hrtime();
  const a = {};

  let hit = 0;
  let miss = 0;

  for (let i = 0; i < cacheSize; i++) {
    a[i] = i;
  }
  for (let n = 0; n < numExpiredCacheEntries; n++) {
    const r = Math.round(Math.random() * cacheSize);
    a[r] && delete a[r];
  }

  for (let g = 0; g < numCacheLookupQueries; g++) {
    const r = Math.round(Math.random() * cacheSize);
    if (a[r]) {
      hit++;
    } else {
      miss++;
    }
  }

  const hrend = process.hrtime(hrstart);
  return hrend;
}
