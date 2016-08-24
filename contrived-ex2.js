const Task = require('data.task')
const fs = require('fs')
const futurize = require('futurize').futurize(Task)

const readFile = futurize(fs.readFile)
const writeFile = futurize(fs.writeFile)


const contrivedEx2 = () =>
  readFile('cfg.json', 'utf-8')
  .map(contents => contents.replace(/8/g, '6'))
  .chain(replaced => writeFile('cfg1.json', replaced))

contrivedEx2().fork(e => console.error(e),
            r => console.log('success!'))
// success!
