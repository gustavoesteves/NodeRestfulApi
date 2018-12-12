import * as request from "supertest";
import { server } from "../../server";

let testServer;

// example of integration test
describe('/api/users', () => {
    beforeEach(() => { testServer = server });
    afterEach(() => { testServer.close(); });
    describe('GET /', () => {
        it('should return all users', async () => {
            const result = await request(testServer).get('/api/users');
            expect(result.status).toBe(200);
        });
    });
});
