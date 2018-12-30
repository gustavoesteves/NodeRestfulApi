import supertest = require("supertest");
import { server } from "../../server";
import { UserModel } from "../../models/user.model";

describe('account test', () => {
    beforeAll(() => { });

    afterAll(async () => {
        await server.close();
        await UserModel.deleteMany({});
    });

    describe('post', () => {
        test('register - User already register', async () => {
            const newUser = new UserModel({
                name: 'aaaaa',
                username: 'a',
                email: 'a@a.com',
                password: 'aaaaa'
            });
            await newUser.save();
            return supertest(server)
                .post('/api/account/register')
                .send({
                    name: 'aaaaa',
                    username: 'a',
                    email: 'a@a.com',
                    password: 'aaaaa'
                })
                .expect(400)
                .then(res => {
                    expect(res.text).toBe('User already registered');
                });
        });
    });

    describe('get', () => { });
});