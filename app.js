
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extension = ['.com', '.net', '.us', '.io'];

    let listaDominios = [];
    let mensaje = "";
        

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let m = 0; m < extension.length; m++) {
                    mensaje= pronoun[i] + adj[j]+ noun[k]+ extension[m];
                    listaDominios.push(mensaje);
                }            
            }
        }
    }

    console.log(listaDominios);
  