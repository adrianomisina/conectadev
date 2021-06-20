// @ts-nocheck
import mock from'../utils/mock.js';

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'adrianomisina',
//     'email':'adriano.misina@gmail.com'
// });

mock.onPost('/api/home/login').reply((config) => {
    console.log(config)
    const {email, password} = JSON.parse(config.data)

    if(email !== 'adriano.misina@gmail.com' || password !== '123456' ) {
        return [400, { message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        nome: 'Adriano Misina',
        username: 'adrianomisina',
        email:'adriano.misina@gmail.com'
    }

    return [200, {user}]
});
