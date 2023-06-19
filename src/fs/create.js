import * as fs from 'node:fs/promises';

  const name = 'fresh.txt'
  const content = 'I am fresh and young'
  const path = 'files/'


async function create() {
    const err = new Error('FS operation failed');
    try {
        await fs.open(path + name);

        throw err;
    } catch (e) {
        if (e.code) {
            fs.writeFile(path + name, content);
            console.log('Success!');
        } else {
            throw err;
        }
    }
    
}

await create();