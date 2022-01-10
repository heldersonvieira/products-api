import bcrypt from 'bcrypt';

export const encryptPassword = async (password) => {
    const passwordHash = await bcrypt.hash(password, 8);
    return passwordHash;
}
