const fs = window.require('fs');

const basePath = 'C://inventory'

const option = 'utf8';

const exists = (path: string, isDir?: boolean, name?: string) => {
    const parsePath = basePath + path
    if (!fs.existsSync(parsePath)) {
        if (isDir) {
            fs.mkdirSync(parsePath)
        } else {
            const data = `{"${name}":[]}`
            write(path, data);
        }
    }
}

const read = (path: string): string | false => {
    const parsePath = basePath + path
    try {
        return fs.readFileSync(parsePath, option)
    } catch (error) {
        console.log(error)
        return false
    }
}

const write = (path: string, data: string): boolean => {
    const parsePath = basePath + path
    try {
        fs.writeFileSync(parsePath, data, option)
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export default {exists, read, write}