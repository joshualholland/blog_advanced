import bcrypt from 'bcrypt-nodejs';

const SALT_ROUNDS = bcrypt.genSaltSync(12);

function generateHash(password) {
    return bcrypt.hashSync(password, SALT_ROUNDS);
};

function checkPassword(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};

export { generateHash, checkPassword };