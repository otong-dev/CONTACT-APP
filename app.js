const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

// membuat folder data jika belum ada
const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada 
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}


const pertanyaan1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('masukan nama anda : ', (nama) => {
            resolve(nama);
        });
    });
};

const pertanyaan2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('masukan email anda : ', (email) => {
            resolve(email);
        });
    });
};


const main = async() => {
    const nama = await pertanyaan1();
    const email = await pertanyaan2();

    const contact = {nama, email};   
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    console.log(`halo ${nama} email kamu ${email}`);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(contacts);
    rl.close();
};

main();






// rl.question('masukan nama anda : ', (nama) => {
//     rl.question('masukan noHP anda : ', (noHP) => {
//         const contact = {nama, noHP};
//         const file = fs.readFileSync('data/contacts.json', 'utf8');
//         const contacts = JSON.parse(file);
//         contacts.push(contact);
//         console.log(`halo ${nama} noHP kamu ${noHP}`);
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         console.log(contacts);
//         rl.close();
//     });
// });