const request = require("supertest");
const errorMessages = require("../fixtures/errorMessage.json");
require("dotenv").config();
const baseUrl = process.env.BASE_URL;

const { undefinedEmail_User } = errorMessages.registrationErrorMessages;

describe("User Registration Tests- Positive scenarios", () => {
  test("[TC-1]-should register user with valid email and password", async () => {
    //making a post request on registration endpoint
    const res = await request(baseUrl)
      .post("/api/register")
      .send({
        email: "emma.wong@reqres.in",
        password: "Password1!",
      })
      .set("Content-Type", "application/json");

    //adding assertions on response body
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});

describe("User Registration Tests- negative scenarios", () => {
  test("[TC-1]-attempt to register using email that is not on the predefined list", async () => {
    //making a post request on registration endpoint
    const res = await request(baseUrl)
      .post("/api/register")
      .send({
        email: "nikhil@gmail.com",
        password: "Password1!",
      })
      .set("Content-Type", "application/json");

    //adding assertions on response body
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toEqual(undefinedEmail_User); //validating error message
  });

  test("[TC-2]-attempt to register with a password shorter than 6 characters", async () => {
    //making a post request on registration endpoint
    const res = await request(baseUrl)
      .post("/api/register")
      .send({
        email: "george.bluth@reqres.in",
        password: "Pa",
      })
      .set("Content-Type", "application/json");

    //adding assertions on response body
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("[TC-3]-attempt to register with a password that doesn't contain an uppercase letter, number or special characters", async () => {
    //making a post request on registration endpoint
    const res = await request(baseUrl)
      .post("/api/register")
      .send({
        email: "eve.holt@reqres.in",
        password: "aaaaaaaa",
      })
      .set("Content-Type", "application/json");

    //adding assertions on response body
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("[TC-4] - attempt to register  with already registered email", async () => {
    //making a post request on registration endpoint
    const res = await request(baseUrl)
      .post("/api/register")
      .send({
        email: "emma.wong@reqres.in",
        password: "Password1!",
      })
      .set("Content-Type", "application/json");

    //adding assertions on response body
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
