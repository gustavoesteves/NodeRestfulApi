import * as bcrypt from "bcrypt";

export async function comparing(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
}