import './module'
import './scss/index.scss'

async function start() {
  return await Promise.resolve('test');
}

start().then(console.log);

console.log('Working!')