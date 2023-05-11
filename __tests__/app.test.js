const request = require("supertest");
const app = require("../app.js");
const seed = require("../db/seed.js");
const categories = require("../db/data/test-data/categories.js");
const snacks = require("../db/data/test-data/snacks.js");
const connection = require("../db/connection.js");

beforeEach(() => {
  return seed({ categories, snacks });
});

afterAll(() => {
  return connection.end();
});

describe("/api", () => {
  test("GET - status: 200 - responds with status message", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ msg: "api up and running!" });
      });
  });
});

describe("/api/snacks", () => {
  test("GET - status: 200 - responds with array of snacks", () => {
    return request(app)
      .get("/api/snacks")
      .expect(200)
      .then((response) => {
        expect(response.body.snacks.length).toBe(7);
        response.body.snacks.forEach((snack) => {
          expect(typeof snack.snack_id).toBe("number");
          expect(typeof snack.snack_name).toBe("string");
          expect(typeof snack.snack_description).toBe("string");
          expect(typeof snack.price).toBe("number");
          expect(typeof snack.category_id).toBe("number");
        });
      });
  });
  test("GET - status: 200 - sorts by snack_name by default", () => {
    return request(app)
      .get("/api/snacks")
      .expect(200)
      .then((res) => {
        expect(res.body.snacks).toBeSortedBy("snack_name");
      });
  });
  test("GET - status: 200 - can sort by valid column specified in query", () => {
    return request(app)
      .get("/api/snacks?sort_by=price")
      .expect(200)
      .then((res) => {
        expect(res.body.snacks).toBeSortedBy("price");
      });
  });
  test("GET - status: 400 - invalid sort criteria", () => {
    return request(app)
      .get("/api/snacks?sort_by=nonsense")
      .expect(400)
      .then((res) => {
        expect(res.body.msg).toBe("invalid sort query!");
      });
  });
  test("GET - status: 200 - can filter snacks according to category specified in query", () => {
    return request(app)
      .get("/api/snacks?category=biscuit")
      .expect(200)
      .then((res) => {
        expect(res.body.snacks.length).toBe(2);
        res.body.snacks.forEach((snack) => {
          expect(snack.category_name).toBe("biscuit");
        });
      });
  });
  test("GET - status: 404 - category not found", () => {
    return request(app)
      .get("/api/snacks?category=nonsense")
      .expect(404)
      .then((res) => {
        expect(res.body.msg).toBe("category not found!");
      });
  });
  test("GET - status: 200 - responds with empty array for category with no snacks", () => {
    return request(app)
      .get("/api/snacks?category=nuts")
      .expect(200)
      .then((res) => {
        expect(res.body.snacks).toEqual([]);
      });
  });
  test("POST - status: 201 - responds with the newly created snack", () => {
    const testNewSnack = {
      snack_name: "7up",
      snack_description: "it's light!",
      price: 70,
      category_id: 3
    };
    return request(app)
      .post("/api/snacks")
      .send(testNewSnack)
      .expect(201)
      .then((response) => {
        const postedSnack = response.body.snack;
        expect(postedSnack.snack_name).toBe("7up");
        expect(postedSnack.snack_description).toBe("it's light!");
        expect(postedSnack.price).toBe(70);
        expect(postedSnack.category_id).toBe(3);
        expect(postedSnack.snack_id).toBe(8);
      });
  });
});

describe("/api/snacks/:snack_id", () => {
  test("GET - status: 200 - responds with snack object", () => {
    return request(app)
      .get("/api/snacks/1")
      .expect(200)
      .then((response) => {
        const snack = response.body.snack;
        expect(snack.snack_id).toBe(1);
        expect(snack.snack_name).toBe("hobnobs");
        expect(snack.price).toBe(100);
      });
  });
  test("GET - status: 400 - invalid snack ID", () => {
    return request(app)
      .get("/api/snacks/nonsense")
      .expect(400)
      .then((response) => {
        expect(response.body.msg).toBe("bad request!");
      });
  });
  test("GET - status: 404 - valid but non-existent snack ID", () => {
    return request(app)
      .get("/api/snacks/10000")
      .expect(404)
      .then((response) => {
        expect(response.body.msg).toBe("not found!");
      });
  });
});
