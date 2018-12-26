import { equal } from "assert";
import * as supertest from "supertest";
import { server } from "../../server";
import { UserModel } from "../../models/user.model";
import { NewUser } from "./newUser";

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

    describe('GET /', () => {

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
                    equal(value.text, '{"message":"User already registered"}');
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
                    equal(value.text,
                        '{"message":"User validation failed: name: Path `name` (`aaaa`) is shorter than the minimum allowed length (5)."}');
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
});