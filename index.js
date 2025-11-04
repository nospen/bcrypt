const bcrypt = require('bcrypt');
const userpassword ="passowort";

const cmd = process.argv[2];
switch (cmd) {
    case "hash":
        hashPassword(userpassword);
        break;
    default:
        console.log("Unknown command");
}





async function hashPassword(userpassword) {
    const hasedPassword = await bcrypt.hash(userpassword, 12);
    console.log(hasedPassword);
    return hasedPassword;

}