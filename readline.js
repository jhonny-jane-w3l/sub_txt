import readline from 'readline';

function read_line() {
    return new Promise((resolve) => {
        const read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });

        read.question("Combien de wallet veux-tu créer ? ", (nombre) => {
            console.log(`Tu as demandé de créer ${nombre} wallet(s)!`);
            read.close();
            resolve(nombre); // Résout la promesse avec la valeur de `nombre`
        });
    });
}

export default read_line;