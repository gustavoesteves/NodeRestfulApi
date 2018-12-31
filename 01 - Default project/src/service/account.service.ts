import { compare, genSalt, hash } from "bcrypt";
import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

async function userinfo(id: string) {
    console.log('service userinfo');
    return await UserModel.findById(id).select('-password');
}

async function validate(user: IUser) {
    //validate
    const _user = await UserModel.findOne({ email: user.email });
    if (!_user)
        throw 'Invalid email or password.';
    if (!await compare(user.password, _user.password))
        throw 'Invalid email or password.';

    return Object({
        token: await _user.schema.methods.generateAuthToken(),
        _id: _user._id
    });
}

async function register(user: IUser) {
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
        token: await newUser.schema.methods.generateAuthToken(),
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email
    };
}

export default { register, userinfo, validate }