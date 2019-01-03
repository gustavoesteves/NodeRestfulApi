import supertest = require("supertest");
import { server } from "../../../server";
import { UserModel } from "../../../models/user.model";

describe('account test', () => {
    let email: string;
    let password: string;

    beforeAll(async () => {
        email = 'a@a.com';
        password = 'A1@aaaa';

        await supertest(server)
            .post('/api/account/register')
            .send({
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

    function execLogin() {
        return supertest(server)
            .get('/api/account/login')
            .send({
                email: email,
                password: password
            });
    }

    describe('get - login', () => {
        test('Invalid password or email', async () => {
            email = '@a.com';
            password = 'A1@aaaa';
            const res = await execLogin();
            expect(res.status).toBe(400);
            expect(JSON.parse(res.text)).toBe('Invalid email or password.');
        });

        test('Everything alright', async () => {
            email = 'a@a.com';
            password = 'A1@aaaa';
            const res = await execLogin();
            expect(res.status).toBe(200);
        });
    });
});