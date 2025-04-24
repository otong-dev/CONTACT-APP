// const fs = require('fs');
//  const readline = require('readline');
//  const rl = readline.createInterface({
//      input : process.stdin,
//      output : process.stdout,
//  });
 
//  // membuat folder data jika belum ada
//  const dirPath = './data'
//  if(!fs.existsSync(dirPath)) {
//      fs.mkdirSync(dirPath);
//  }
 
//  // membuat file contacts.json jika belum ada 
//  const dataPath = './data/contacts.json';
//  if(!fs.existsSync(dataPath)) {
//      fs.writeFileSync(dataPath, '[]', 'utf-8')
//  }
//  const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve,reject) => {
//         rl.question(pertanyaan , (nama) => {
//             resolve(nama);
//         })
//     })
//  }
const contacts  = require('./contacts.js')
    const main = async() => {
        const nama = await contacts.tulisPertanyaan("masukan nama anda :");
        const email = await contacts.tulisPertanyaan("masukan email anda :");
        const noHP= await contacts.tulisPertanyaan("masukan noHP anda :");
    
        contacts.simpanContact(nama,email,noHP)
    // const contact = {nama, noHP, email};
    // const file = fs.readFileSync('data/contacts.json', 'utf8');
    // const contacts = JSON.parse(file);
    // contacts.push(contact);
    // console.log(`halo ${nama} noHP kamu ${noHP}`);
    // fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    // console.log(contacts);
    // rl.close();
    };
    
    main();