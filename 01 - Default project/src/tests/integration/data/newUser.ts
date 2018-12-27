import { genSalt, hash } from "bcrypt";
import { UserModel } from "../../../models/user.model";

export async function NewUser() {
    const newUser = new UserModel({
        name: 'aaaaa',
        email: 'aaa@aaa.com',
        username: 'aaaa',
        password: 'aaaa'
    });
    const salt = await genSalt(10);
    newUser.password = await hash(newUser.password, salt);
    await newUser.save();
    return newUser;
}