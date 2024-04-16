## Explain time complexity for the following code blocks

```javascript
let a = 0,
  b = 0;
for (i = 0; i < N; i++) {
  a = a + Math.random();
}
for (j = 0; j < M; j++) {
  b = b + Math.random();
}
```

It has two `for` loops were the first `for` loopruns `N` times and the second runs `M` times.
Hence the total time complexity is `O(m + n)` ~ `O(n)`
space complexity is `O(1)`

```javascript
let a = 0;
for (i = 0; i < N; i++) {
  for (j = N; j > i; j--) {
    a = a + i + j;
  }
}
```

It has two _nested_ `for` loops where one runs from 0 to N and the other runs from N to 0
Hence time complexity is `O(n*n)`

```javascript
let i = 0,
  j = 0,
  k = 0;
for (i = Math.floor(n / 2); i <= n; i++) {
  for (j = 2; j <= n; j = j * 2) {
    k = k + Math.floor(n / 2);
  }
}
```

Here, though it has two `for` loops, the first loop runs only half of n `n/2`, but the inner
loop runs from 2 to n but increments in multiples of 2 `log n`
Hence the complexity is `O(n * log n)`

```javascript
let a = 0,
  i = N;
while (i > 0) {
  a += i;
  i = Math.floor(i / 2);
}
```

Here, the `while` loop runs from 0 to n, but the value of `i` halves every itteration.
Hence the time complexity is `O(log n)`

```javascript
for (var i = 0; i < n; i++) i *= k;
```

Here, the loop runs from 0 to n, but the value of `i` gets incremented as a multiple of `k`.
Hence the time complexity is `O(logk N)` (log N base k)

```javascript
var value = 0;
for (var i = 0; i < n; i++) {
  for (var j = 0; j < i; j++) {
    value += 1;
  }
}
```

It has two nested loops where the first loop runs from 0 to n and the inner loop runs from 0 to n - 1
Hence the time complexity is `O(n * (n -1))` ~ `O(n^2)`

---

Q: What does it mean when we say that an algorithm X is asymptotically more efficient than Y?
A: X will always be better choice for larger inputs

Q: Which of the following best describes the useful criterion for comparing the efficiency of algorithms?
A: Both time and space complexity

Q: How is time complexity measured?
A: By counting the number of primitive operations performed by the algorithm on a given input size.

Q: Algorithm A and B have a worst-case running time of O(n) and O(logn), respectively. Therefore, algorithm B always runs faster than algorithm A.
A : true
