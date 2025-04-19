const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// membuat file data
const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

rl.question('masukan nama anda : ' , (nama) => {
    rl.question('masukan no Hp anda : ' , (noHP) => {
        rl.question('masukan email anda : ' , (email) => {
        const contact = {nama, noHP};
        const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
        const contacts = JSON.parse(fileBuffer);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

        crossOriginIsolated.log('terima kasih sudah masukan data.')
        rl.close();
        });
    });
})
