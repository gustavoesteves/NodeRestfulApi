import * as bcrypt from "bcrypt";

export async function hash(password: string, round: number): Promise<string> {
    const salt = await bcrypt.genSalt(round);
    return bcrypt.hash(password, salt);
}