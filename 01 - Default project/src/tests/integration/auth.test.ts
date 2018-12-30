import { Server } from "http";
import { equal } from "assert";
import supertest = require("supertest");
import { server } from "../../server";
import { UserModel } from "../../models/user.model";

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
            const newUser = new UserModel({
                name: 'aaaaa',
                email: 'a@a.com',
                username: 'a',
                password: 'aaaaa'
            });
            await newUser.save();
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
});