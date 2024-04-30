
import { Roles } from './roles.enum';
import { User } from './users.interface';

export async function createUser(): Promise<User> {
    console.log('\nRegister user data');

    const name = await GetUserCredential('name');
    const email = await GetUserCredential('email');
    const password = await GetUserCredential('password');
    const role = await GetUserRole();

    const user: User = {
        name,
        email,
        password,
        role,

    };

    setTimeout(() => {
        console.log('\nUser successfully created');
        console.log('name: ' + user.name);
        console.log('email: ' + user.email);
        console.log('password: ' + user.password);
        console.log('role: ' + user.role);
    }, 2000);

    return user;
};

function GetUserCredential(credentialType: string): Promise<string> {
    return new Promise(resolve => {
    
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            readline.question(`Enter ${credentialType}: `, (credential: string) => {
                resolve(credential);
                readline.close();
            });
        })
};

function GetUserRole(): Promise<Roles> {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve: (role: Roles) => void) => {
        setTimeout(() => {
            readline.question(`Type user role (User or Admin): `, (role: string) => {
                const UppercaseRole = role.toUpperCase();

                if (UppercaseRole === Roles.Admin || UppercaseRole === Roles.User) {
                    resolve(UppercaseRole);
                } else {
                    resolve(Roles.User);
                    console.log('\ninvalid role assigning User');
                }

                readline.close();
            });
        }, 1000)
    });

};