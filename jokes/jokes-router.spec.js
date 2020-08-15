const request = require("supertest");
const server = require("../api/server.js");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InRlc3RlciIsImNyZWF0ZWRfYXQiOjE1OTc0MTI5MTQ0MjIsImlhdCI6MTU5NzQxMjkxNCwiZXhwIjoxNjI4OTQ4OTE0fQ.m5vyOQee2AaybGjtidAX9MOA9rJa6bBNmGicl7ItibE";

describe("Jokes Router", () => {
    describe("GET /api/jokes", () => {
        let res = {};
        beforeAll(async () => {
            res = (await request(server).get("/api/jokes").auth(token, {type: "bearer"}));
        });

        test("should return status 200 OK", () => {

            expect(res.status).toBe(200);
        });

        test("should return an array", () => {
            expect(res.body).toBeInstanceOf(Array);
        });
    })
});