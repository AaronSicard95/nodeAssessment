process.env.NODE_ENV = "test";

const request = require("../supertest");

const app = require("./app");

beforeEach(function(){
    let develops = ({developers: ["newGuy", "Trish", "coderman"]});
})

afterEach(function(){
    develops = ({developers: []});
})

describe("POST /", function(){
    test("Get Dev Info", async function(){
        const resp = await request(app).post('/').send(develops);
        expect(resp.statusCode).toBe(200);
    })
})