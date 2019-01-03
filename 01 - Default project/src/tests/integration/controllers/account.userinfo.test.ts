import supertest = require("supertest");
import { server } from "../../../server";
import { UserModel } from "../../../models/user.model";

describe('account test', () => {
    let token: string;
    let _id: string;

    beforeAll(async () => {
        const newUser = new UserModel({
            name: 'aaaaa',
            username: 'a',
            email: 'a@a.com',
            password: 'A1@aaaa'
        });
        await newUser.save();
        _id = newUser._id;
        token = await newUser.schema.methods.generateAuthToken(_id);
    });

    afterAll(async () => {
        await server.close();
        await UserModel.deleteMany({});
    });

    describe('get - UserInfo', () => {
        test('Access denied. No token provided.', async () => {
            return supertest(server)
                .get('/api/account/userinfo')
                .send({ _id: 'a' })
                .expect(400)
                .then(res => {
                    expect(JSON.parse(res.text)).toBe('Access denied. No token provided.');
                });
        });

        test('Invalid token', async () => {
            return supertest(server)
                .get('/api/account/userinfo')
                .auth('Authentication', 'a')
                .expect(500);
        });

        test('Valid token', async () => {
            return supertest(server)
                .get('/api/account/userinfo')
                .set('Authentication', 'Bearer ' + token)
                .send({ _id: _id })
                .expect(200);
        });
    });
});