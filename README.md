# Map vs Object JavaScript Performance

This is a test for the relative performance of ES6 Map against a plain JS object.

I was especially interested in how the two perform when used as an in-memory cache where keys are added and removed.

My concern with JS objects was that V8's hidden class implementation would lead to a degradation when adding and removing keys (cache entries) at run-time, and that would be avoided by the Map implementation.

## Results 

The upshot is that the humble JS object is faster.

With a cache with 10m entries, we remove 2m entries at random. Then we do 100m cache lookups at random. On my 2019 Macbook running Node 9.6.0:

```
Map Execution time (hr): 26s 146.70093ms
Object Execution time (hr): 8s 248.619749ms
```
The object is 3x faster.

With Node 12.6.0:

```
Map Execution time (hr): 26s 587.736765ms
Object Execution time (hr): 7s 336.194303ms
```

The object is nearly 4x faster.

## Conclusion

The ES6 Map seems to be more of a developer ergonomic optimization than what I thought it was: a performance optimisation for key/value dictionaries where keys are added and removed at runtime.