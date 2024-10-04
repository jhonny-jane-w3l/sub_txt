import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady, mnemonicGenerate, mnemonicValidate } from '@polkadot/util-crypto';
import {appendFile, writeFile} from "fs"
import read_line from './readline.js';


async function createWallet() {

    class Wallet {
        constructor(publicAdress, seed) {
            this.adress = this.adress;
            this.key = this.key;
        }
    }
    // Attendre que l'interface WASM soit prête
    await cryptoWaitReady();
   // cryptoWaitReady();
    let i = 0;
    let tab = []
    const nombre = await read_line(); // Attendre la réponse de l'utilisateur
    while (i < Number(nombre)) {
        const wal = new Wallet("",{})
        const mnemonic = mnemonicGenerate(); // => string
        const isValidMnemonic = mnemonicValidate(mnemonic);
         // Vérifier si la phrase mnémotechnique est valide
         if (!isValidMnemonic) {
             console.error('Phrase mnémotechnique invalide');
             process.exit(1);
         }
        wal.key = mnemonic
        console.log("Phrase mnémotechnique : ", mnemonic);
     
         const keyring = new Keyring({ type: 'sr25519', ss58Format: 13 });
     
        try {
            const wallet = keyring.addFromUri(mnemonic);
            if (wallet)
            wal.adress = wallet.toJson();
            tab.push(wal)
            console.log(tab)
            console.log("Adresse du wallet : ", wallet.toJson());
        } catch (error) {
            console.error("Erreur lors de la création du wallet : ", error);
        }
        appendFile('message.txt', JSON.stringify(tab,null, 1)+ '\n', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
         i++;
    }
}

// Appeler la fonction createWallet
createWallet().catch(console.error);