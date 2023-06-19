import * as crypto from 'node:crypto'

const file = 'files\fileToCalculateHashFor.txt'

async function calculateHash () {
  const hash = crypto.createHash('sha256', file).digest('hex')
  console.log(hash);
};

await calculateHash();