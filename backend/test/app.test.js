import app from "../src/app.js";
import request from "supertest";

describe("Get index success /", () => {
    test('Get status code 200 and body msg expected', async () => {
        const resp = await request(app).get("/").send();
        expect(resp.status).toBe(200);
        let bodyMsg = '{\n    "message": "Welcome to Notifications API"\n}';
        expect(resp.text).toBe(bodyMsg);
    });
});


