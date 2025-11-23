const request = require("supertest");
const app = require("../server");
const chai = require("chai");
const expect = chai.expect;

describe("Courses API Unit Tests", () => {

  it("GET /api/courses should return array", async () => {
    const res = await request(app).get("/api/courses");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/courses should create course", async () => {
    const res = await request(app)
      .post("/api/courses")
      .send({ name: "NodeJS", duration: "4 weeks" });

    expect(res.status).to.equal(201);
    expect(res.body.message).to.equal("Course created");
  });

});
