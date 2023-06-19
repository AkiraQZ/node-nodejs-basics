

import * as process from 'node:process';
import * as stream from 'node:stream';

async function transform() {
    const transform = new stream.Transform({
        transform(chunk, enc, cb){
            chunk = chunk.toString().split('').reverse().join('')
            cb(null, chunk)
        }
    })

process.stdin.pipe(transform).pipe(process.stdout)

};


await transform();