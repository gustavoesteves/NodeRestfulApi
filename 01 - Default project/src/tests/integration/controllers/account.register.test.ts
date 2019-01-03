import supertest = require("supertest");
import { server } from "../../../server";
import { UserModel } from "../../../models/user.model";
import { IUserModel } from "../../../interfaces/user.interface";

describe('account test', () => {
    describe('post - register', () => {
        let newUser: IUserModel;
        let email: string;
        let password: string;

        beforeAll(() => {
            email = 'a@a.com';
            password = 'A1@aaaa';

            newUser = new UserModel({
                name: 'aaaaa',
                username: 'a',
                email: email,
                password: password
            });
        });

        afterAll(async () => {
            await server.close();
            await UserModel.deleteMany({});
        });

        function execRegister() {
            return supertest(server)
                .post('/api/account/register')
                .send({
                    name: 'aaaaa',
                    username: 'a',
                    email: email,
                    password: password
                });
        }

        test('User already register', async () => {
            await newUser.save();
            const res = await execRegister();
            expect(res.status).toBe(400);
            expect(JSON.parse(res.text)).toBe('User already registered');
        });

        test('Invalid email', async () => {
            email = 'a.com';
            await UserModel.deleteMany({});
            const res = await execRegister();
            expect(res.status).toBe(400);
            expect(JSON.parse(res.text)).toBe('User validation failed: email: Is not a valid email');
        });

        test('Invalid password', async () => {
            email = 'a@a.com';
            password = 'a';
            await UserModel.deleteMany({});
            const res = await execRegister();
            expect(res.status).toBe(400);
            expect(JSON.parse(res.text)).toBe('Invalid password');
        });

        test('Everything alright', async () => {
            password = 'A1@aaaa';
            await UserModel.deleteMany({});
            const res = await execRegister();
            expect(res.status).toBe(200);
        });
    })
});