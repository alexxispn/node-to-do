import path from "path";
import fs from "fs";

export const saveFile = (data) => {
    const file = path.join('./db/data.json');
    fs.writeFileSync(file, JSON.stringify(data));
}

export const readFile = () => {
    const file = path.join('./db/data.json');
    if (!fs.existsSync(file)) {
        return null;
    }
    const info = fs.readFileSync(file, {encoding: 'utf-8'});
    return JSON.parse(info);
}
