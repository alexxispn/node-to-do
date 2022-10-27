import {pause, showMenu} from "./helpers/messages.js";
import {inquirerMenu} from "./helpers/inquirer.js";


const main = async () => {
    let opt = "";
    do {
        opt = await showMenu();
        console.log({opt});
        if (opt !== "0") await pause();
    } while (opt !== "0");
};

main();

