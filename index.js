import createWallet from './createWallet.js'
import * as fs from 'fs';

async function main()
{
    if (fs.existsSync('message.json')) {
        console.log('Le fichier existe.');
        // Lire ou faire autre chose avec le fichier
        const data = fs.readFileSync('message.json', 'utf8');
        console.log(data);
    } else {
        console.log('Le fichier n\'existe pas, vous pouvez le créer.');
        await createWallet();
        console.log("walet crée");
        
    }
}

main().catch(console.error)