const { TestWatcher } = require("jest");
const request = require("supertest")
const app = require("../../app")
const newTodo = require("../mock-data/new-todo.json")

const endpointUrl = "/todos/";

let firstTodo;

describe(endpointUrl, () => {
    test("GET" + endpointUrl, async () => {
        const response = await request(app).get(endpointUrl);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy;
        expect(response.body[0].title).toBeDefined();
        expect(response.body[0].done).toBeDefined();
        firstTodo = response.body[0];
    })
    test("GET by id" + endpointUrl + ":todoId", async () => {
        const response = await request(app).get(endpointUrl + "61dc60c29ebd0ed416f39d06");
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(firstTodo.title);
        expect(response.body.done).toBe(firstTodo.done);
    })
    it("POST " + endpointUrl, async () => {
        const response = await request(app)
            .post(endpointUrl)
            .send(newTodo);
        expect(response.statusCode).toBe(201);
        //expect(response.body.title).toBe(newTodo.title);
    })
    it("should response 500 when receive something wrong", async () => {
        const response = await request(app)
        .post(endpointUrl)
        .send({title: "Vini Teste"}); //missing "done" propriety
        expect(response.statusCode).toBe(500);
    })
})