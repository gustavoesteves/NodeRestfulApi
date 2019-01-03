import { UserModel } from "../../../models/user.model";
import { IUserModel } from "../../../interfaces/user.interface";

describe('User methods', () => {
    let newUser: IUserModel;

    beforeAll(() => {
        newUser = new UserModel({
            name: 'aaaaa',
            username: 'a',
            email: 'a@a.com',
            password: 'aaaaa@1'
        });
    });

    describe('Validate Email', () => {
        test('Invalid Email', async () => {
            newUser.email = '@a.com';
            const err = newUser.validateSync();
            expect(err.message).toBe('User validation failed: email: Is not a valid email');
        });

        test('Everything is alright', async () => {
            newUser.email = 'a@a.com';
            const err = newUser.validateSync();
            if (err != undefined)
                expect(err.message).toBe('User validation failed: email: Is not a valid email');
        });
    });

    describe('Validate Password', () => {
        test('Invalid password', async () => {
            newUser.password = 'aaaaaaa';
            const err = newUser.schema.methods.validatePassword(newUser.password);
            expect(err).toBeFalsy();
        });

        test('Everything is alright', async () => {
            newUser.password = 'aaaaa@1';
            const err = newUser.validateSync();
            if (err != undefined)
                expect(err.message).toBe('User validation failed: password: Is not a valid password');
        });
    });

    describe('Genarate Token', () => {
        test('Invalid Token', async () => {

        });
    });
});