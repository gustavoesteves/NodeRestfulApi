import { Server } from "http";
import { equal } from "assert";
import * as supertest from "supertest";
import { server } from "../../server";
import { UserModel } from "../../models/user.model";
import { NewUser } from "./newUser";

describe('User Controller', () => {
    let _server: Server;

    beforeAll(() => {
        _server = server;
    });

    afterAll(async () => {
        await _server.close();
        await UserModel.remove({});
    });

    it('testing database connection and save', async () => {
        await NewUser();
        expect(await UserModel.find()).not.toBeNull();
    });

    describe('GET /', () => {

    });

    describe('POST /', () => {
        it('could not find a user already registered', async () => {
            return await supertest(_server)
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

        it('if the name is less than 5 then it can not be saved', async () => {
            await UserModel.remove({});
            return await supertest(_server)
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

        it('register a new user', async () => {
            await UserModel.remove({});
            return await supertest(_server)
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