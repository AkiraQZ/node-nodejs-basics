import fs, { access } from 'fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';


const fileCompress ='files/fileToCompress.txt';
const fileArchive = 'files/Archive.gz';

const compress = async () => {
  await pipeline(
    fs.createReadStream(fileCompress),
    zlib.createGzip(),
    fs.createWriteStream(fileArchive),
  )
};

await compress()