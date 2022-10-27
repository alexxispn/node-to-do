import colors from "colors";
import readline from "readline/promises";

colors.enable();
const rl = readline.createInterface({input: process.stdin, output: process.stdout});


export const showMenu = async () => {
    console.clear();
    console.log("================================".green);
    console.log("  Select an option".white);
    console.log("================================\n".green);

    console.log(`${"1.".green} Create task`);
    console.log(`${"2.".green} List tasks`);
    console.log(`${"3.".green} List completed tasks`);
    console.log(`${"4.".green} List pending tasks`);
    console.log(`${"5.".green} Complete task(s)`);
    console.log(`${"6.".green} Delete task`);
    console.log(`${"0.".green} Exit\n`);

    const opt = await rl.question("Select an option: ");
    return opt;
};

export const pause = async () => {
    const message = `
Press ${"ENTER".green} to continue`;
    await rl.question(message);
}
