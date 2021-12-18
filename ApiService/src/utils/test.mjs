import * as bcrypt from 'bcrypt';
const saltRounds = 10;
const myPlaintextPassword = '2232r4321';

(async() => {
    // Technique 1 (generate a salt and hash on separate function calls):
    console.log(salt);

    const hash = await bcrypt.hash(myPlaintextPassword, salt);
    // Store hash in your password DB.
    console.log(hash);
    // Technique 2 (auto-gen a salt and hash):
    console.log(await bcrypt.compare(myPlaintextPassword, hash))


    // Store hash in your password DB.
})();