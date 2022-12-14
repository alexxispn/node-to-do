import {inquirerMenu, pause, readInput, showChecklist, listTasksDelete, confirm} from "./helpers/inquirer.js";
import Tasks from "./models/tasks.js";
import {readFile, saveFile} from "./helpers/saveFile.js";

const main = async () => {
    let opt = "";
    const tasks = new Tasks();
    const tasksDB = readFile();
    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    } else {
        console.log("No tasks saved");
    }
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case "1":
                const description = await readInput("Description: ");
                tasks.createTask(description);
                break;
            case "2":
                tasks.listTasks();
                break;
            case "3":
                tasks.listDoneTasks(true);
                break;
            case "4":
                tasks.listDoneTasks(false);
                break;
            case "5":
                const ids = await showChecklist(tasks.listArr);
                tasks.toggleCompleted(ids);
                break;
            case "6":
                const id = await listTasksDelete(tasks.listArr);
                if (id !== "0") {
                    const ok = await confirm("Are you sure?");
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log("Task deleted");
                    }
                }
                break;
        }
        saveFile(tasks.listArr);
        await pause();
    } while (opt !== "0");
}

main();

