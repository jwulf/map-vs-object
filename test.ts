import {
  cacheSize,
  numExpiredCacheEntries,
  numCacheLookupQueries
} from "./config";

import { test as mapTest } from "./map-test";
import { test as objectTest } from "./object-test";

const mapHrend = mapTest({
  cacheSize,
  numExpiredCacheEntries,
  numCacheLookupQueries
});
console.info(
  "Map Execution time (hr): %ds %dms",
  mapHrend[0],
  mapHrend[1] / 1000000
);

const objectHrend = objectTest({
  cacheSize,
  numExpiredCacheEntries,
  numCacheLookupQueries
});
console.info(
  "Object Execution time (hr): %ds %dms",
  objectHrend[0],
  objectHrend[1] / 1000000
);
