// Função delay aciona o .then após 1s
/**
 * #01
 */
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }
// umPorSegundo();

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {

    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
umPorSegundo();

/***********************************************************************************/
/**
 * #02
 */
// import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         }
//     );
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    }
    catch (err) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

/***********************************************************************************/
// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }
// Github.getRepositories('Alexbbianchi/Curso_web');
// Github.getRepositories('rocketseat/dslkvmskv');

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
        }
        catch (err) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('Alexbbianchi/Curso_web');
Github.getRepositories('rocketseat/dslkvmskv');

/***********************************************************************************/
// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }
// buscaUsuario('diego3g');

const buscaUsuario = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    }
    catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');
/***********************************************************************************/