import supertest = require("supertest");
import { server } from "../../../server";

describe('account test', () => {
    beforeAll(() => { });

    afterAll(async () => {
        await server.close();
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