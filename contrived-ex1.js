const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x)
})

const contrivedEx1 = str =>
  Box(str.trim())
  .map(trimmed => new Number(trimmed))
  .map(number => number + 1)
  .fold(nextNumber =>
    String.fromCharCode(nextNumber))

contrivedEx1('  64 ')
// 'A'
