const request = require("supertest");
const app = require("../server");
const chai = require("chai");
const expect = chai.expect;

describe("Users API Integration Tests", () => {

  it("POST /api/users → create user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({
        name: "Karthik",
        email: "karthik@example.com"
      });

    expect(res.status).to.equal(201);
    expect(res.body.message).to.equal("User created");
  });

  it("GET /api/users → get all users", async () => {
    const res = await request(app).get("/api/users");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

});
