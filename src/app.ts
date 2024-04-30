import { createUser } from "./registerUser";

async function showMenu() {
    await createUser();
}

showMenu();