import supertest = require("supertest");
import { server } from "../../../server";
import { UserModel } from "../../../models/user.model";
import { IUserModel } from "../../../interfaces/user.interface";

describe('account test', () => {
    let newUser: IUserModel;

    beforeAll(() => {
        newUser = new UserModel({
            name: 'aaaaa',
            username: 'a',
            email: 'a@a.com',
            password: 'A1@aaaa'
        });
    });

    afterAll(async () => {
        await server.close();
        await UserModel.deleteMany({});
    });

    describe('post - register', () => {
        test('User already register', async () => {
            await newUser.save();
            return supertest(server)
                .post('/api/account/register')
                .send({
                    name: 'aaaaa',
                    username: 'a',
                    email: 'a@a.com',
                    password: 'A1@aaaa'
                })
                .expect(400)
                .then(res => {
                    expect(JSON.parse(res.text)).toBe('User already registered');
                });
        });

        test('Invalid email', async () => {
            await UserModel.deleteMany({});
            return supertest(server)
                .post('/api/account/register')
                .send({
                    name: 'aaaaa',
                    username: 'a',
                    email: '@a.com',
                    password: 'A1@aaaa'
                })
                .expect(400)
                .then(res => {
                    expect(JSON.parse(res.text)).toBe('User validation failed: email: Is not a valid email');
                });
        });

        test('Invalid password', async () => {
            await UserModel.deleteMany({});
            return supertest(server)
                .post('/api/account/register')
                .send({
                    name: 'aaaaa',
                    username: 'a',
                    email: 'a@a.com',
                    password: 'A1@aaa'
                })
                .expect(400)
                .then(res => {
                    expect(JSON.parse(res.text)).toBe('Invalid password');
                });
        });

        test('Everything alright', async () => {
            await UserModel.deleteMany({});
            return supertest(server)
                .post('/api/account/register')
                .send({
                    name: 'aaaaa',
                    username: 'a',
                    email: 'a@a.com',
                    password: 'A1@aaaa'
                })
                .expect(200);
        });
    });

    describe('get - login', () => {
        test('Invalid password or email', async () => {
            return supertest(server)
                .get('/api/account/login')
                .send({
                    email: 'b@a.com',
                    password: 'a'
                })
                .expect(400)
                .then(res => {
                    expect(JSON.parse(res.text)).toBe('Invalid email or password.');
                });
        });

        test('Everything alright', () => {
            return supertest(server)
                .get('/api/account/login')
                .send({
                    email: 'a@a.com',
                    password: 'A1@aaaa'
                })
                .expect(200);
        });
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
            let user: any;
            await supertest(server)
                .get('/api/account/login')
                .send({
                    email: 'a@a.com',
                    password: 'A1@aaaa'
                })
                .expect(200)
                .then(res => {
                    user = JSON.parse(res.text);
                });

            return supertest(server)
                .get('/api/account/userinfo')
                .set('Authentication', 'Bearer ' + user.token)
                .send({ _id: user._id })
                .expect(200);
        });
    });

    describe('post - logout', () => {
        test('Everything alright', () => {
            return supertest(server)
                .post('/api/account/logout')
                .set('Authentication', '')
                .expect(200);
        });
    });
});