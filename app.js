const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('masukan nama anda : ', (nama) => {
    rl.question('masukan umur anda : ', (umur) => {
        const data = { nama , umur};
        console.log(data);
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const datas = JSON.parse(file);
        console.log(datas)
        datas.push(data);
        console.log('terima kasih telah masukan data');
        fs.writeFileSync('data/contacts.json', JSON.stringify(datas));
        rl.close()
    });
});