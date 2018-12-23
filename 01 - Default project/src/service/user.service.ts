import { genSalt, hash } from "bcrypt";
import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

async function get(id: string) {
    return await UserModel.findById(id).select('-password');
}

async function post(user: IUser) {
    if (await UserModel.findOne({ email: user.email }))
        throw 'User already registered';

    let newUser = new UserModel({
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password
    });
    const salt = await genSalt(10);
    newUser.password = await hash(user.password, salt);
    await newUser.save();

    return await {
        token: await UserModel.schema.methods.generateAuthToken,
        _id: user._id,
        name: user.name,
        email: user.email
    };
}

export default { get, post }