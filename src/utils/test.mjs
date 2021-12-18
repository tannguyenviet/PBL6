// import * as bcrypt from 'bcrypt';
// const saltRounds = 10;
// const myPlaintextPassword = 'tandeptrai';

// (async() => {
//     // Technique 1 (generate a salt and hash on separate function calls):
//     //const salt = await bcrypt.genSalt(saltRounds)
//     const salt = bcrypt.genSaltSync(10);
//     console.log(salt);
//     const hash = bcrypt.hashSync(myPlaintextPassword, salt);
//     console.log(hash);
//     //console.log(await bcrypt.hash(myPlaintextPassword, salt));
//     // Store hash in your password DB.
//     // Technique 2 (auto-gen a salt and hash):
//     console.log(await bcrypt.compare(myPlaintextPassword, '$2b$10$IGhGKlLPNmB0nV2dbostKenkm6em5qaLR5045dPWF0f.ze06rOznS'))

//     // const hashedPasswordLAnHAi = await bcrypt.hash('111', '$2b$10$S0VBT5SXpR/QgZjp');
//     // console.log(hashedPasswordLAnHAi)

//     // Store hash in your password DB.sssss
// })();

var tickets = [{ id: 1, date: 'Mar 12 2012 10:00:00 AM' }, { id: 2, date: 'Mar 8 2012 08:00:00 AM' }];


tickets = tickets.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
});
console.log(tickets)