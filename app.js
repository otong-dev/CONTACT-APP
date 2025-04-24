const main = async() => {
    const nama = await tulisPertanyaan("masukan nama anda :");
    const email = await tulisPertanyaan("masukan email anda :");
    const noHP= await tulisPertanyaan("masukan noHP anda :");

    const contact = {nama, email, noHP};   
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    console.log(`halo ${nama} email kamu ${email}`);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(contacts);
    rl.close();
};

main();