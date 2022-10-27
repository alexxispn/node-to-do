import {inquirerMenu, pause, readInput} from "./helpers/inquirer.js";
import Tasks from "./models/tasks.js";

const main = async () => {
    let opt = "";
    const tasks = new Tasks();
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case "1":
                const description = await readInput("Description: ");
                tasks.createTask(description);
                break;
            case "2":
                console.log(tasks._list);
                break;
        }
        await pause();
    } while (opt !== "0");
}

main();

