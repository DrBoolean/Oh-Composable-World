const Either = require('data.either')
const fs = require('fs')

const getConfig = () =>
  Either.try(fs.readFileSync)('cfg.json')

const contrivedEx3 = () =>
  getConfig()
  .map(JSON.parse)
  .fold(e => 3000, c => c.port)

contrivedEx3()
// 8888
