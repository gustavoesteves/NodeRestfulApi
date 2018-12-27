import { Server } from "http";
import { equal } from "assert";
import supertest = require("supertest");
import { server } from "../../server";
import { UserModel } from "../../models/user.model";
import { NewUser } from "./data/newUser";

describe('Authentication Controller', () => {
    let _server: Server;

    beforeAll(() => {
        _server = server;
    });

    afterAll(async () => {
        await _server.close();
        await UserModel.remove({});
    });

    describe('POST /', () => {
        test('Invalid email or password', async () => {
            await NewUser();
            return await supertest(_server)
                .post('/api/auth')
                .send({
                    email: 'aaa@aaa.com',
                    password: 'a'
                })
                .expect(400)
                .then((value) => {
                    equal(value.text, 'Invalid email or password.');
                });
        });
    });

    describe('auth', () => {
        test('Access denied. No token provided.', () => {
            //
        });
    });
});