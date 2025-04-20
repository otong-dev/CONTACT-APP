const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question('masukan nama anda : ', (nama) => {
    rl.question('masukan noHP anda : ', (noHP) => {
        const contact = {nama, noHP};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        console.log(`halo ${nama} noHP kamu ${noHP}`);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log(contacts);
        rl.close();
    })
})