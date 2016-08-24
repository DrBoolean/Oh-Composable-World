const { fromNullable } = require('data.either')

const cityByZip = zip =>
  'Salt lake!'

const contrivedEx4 = user =>
  fromNullable(user.address)
  .chain(a => fromNullable(a.match(/(\d{5})$/i)))
  .chain(zip => fromNullable(cityByZip(zip)))
  .fold(() => "can't find city", city => city)



contrivedEx4({})
// can't find city

contrivedEx4({address: 'Salt lake city 84101'})
// Salt lake!
