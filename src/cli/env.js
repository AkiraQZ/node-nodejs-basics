import * as process from 'node:process';

const parseEnv = () => {
    const regex = new RegExp('--');
    const env = process.env
    let result = []
    for (const key in env) {
        if (key.includes(prefix)) {
            const name = key.slice(prefix.length);
            const value = env[key];
            result += (`RSS${name}=${value} `);
        }
    }
    console.log(result.toString()
        .split(' ')
        .join(';'))
};

parseEnv();