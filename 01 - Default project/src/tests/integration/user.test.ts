import { equal } from "assert";
import * as supertest from "supertest";
import { server } from "../../server";
import { UserModel } from "../../models/user.model";
import { NewUser } from "./data/newUser";

describe('User Controller', () => {

    beforeAll(() => {
    });

    afterAll(async () => {
        await server.close();
        await UserModel.remove({});
    });

    test('testing database connection and save', async () => {
        await NewUser();
        expect(await UserModel.find()).not.toBeNull();
    });

    describe('POST /', () => {
        test('could not find a user already registered', async () => {
            return await supertest(server)
                .post('/api/users')
                .send({
                    name: 'aaaaa',
                    email: 'aaa@aaa.com',
                    username: 'aaaa',
                    password: 'aaaa'
                })
                .expect(400)
                .then((value) => {
                    equal(value.text, 'User already registered');
                });
        });

        test('if the name is less than 5 then it can not be saved', async () => {
            await UserModel.remove({});
            return await supertest(server)
                .post('/api/users')
                .send({
                    name: 'aaaa',
                    email: 'aaa@aaa.com',
                    username: 'aaaa',
                    password: 'aaaa'
                })
                .expect(400)
                .then((value) => {
                    equal(value.text, 'User validation failed: name: Path `name` (`aaaa`) is shorter than the minimum allowed length (5).');
                });
        });

        test('register a new user', async () => {
            await UserModel.remove({});
            return await supertest(server)
                .post('/api/users')
                .send({
                    name: 'aaaaa',
                    email: 'aaa@aaa.com',
                    username: 'aaaa',
                    password: 'aaaa'
                })
                .expect(200);
        });
    });


    describe('GET /', () => {
        let token: string;
        let _id: string;
        test('Invalid token', async () => {
            return await supertest(server)
                .get('/api/users')
                .send({
                    email: 'aaa@aaa.com',
                    password: 'aaaa'
                })
                .expect(400);
        });

        test('Create a new User and get a token and _id user', async () => {
            await UserModel.remove({});
            await supertest(server)
                .post('/api/users')
                .send({
                    name: 'aaaaa',
                    email: 'aaa@aaa.com',
                    username: 'aaaa',
                    password: 'aaaa'
                })
                .expect(200)
                .expect((res) => {
                    token = 'Bearer ' + res.header.authentication;
                    _id = res.body._id;
                });
        });

        test('User not found', (done) => {
            supertest(server)
                .get('/api/users')
                .set('Authentication', token)
                .send({ _id: _id + 'a' })
                .expect(500, (err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        test('Everything is alright', (done) => {
            supertest(server)
                .get('/api/users')
                .set('Authentication', token)
                .send({ _id: _id })
                .expect(200, (err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

    });
});