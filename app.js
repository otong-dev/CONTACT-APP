const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question('masukan nama anda : ', (nama) => {
    rl.question('masukan umur anda : ', (umur) => {
        const contact = {nama, umur};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        console.log(`halo ${nama} kamu berumur ${umur} tahun`);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log(contacts);
        rl.close();
    })
})