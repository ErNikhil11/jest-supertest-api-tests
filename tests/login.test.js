const request = require("supertest");
require("dotenv").config();
const errorMessages = require("../fixtures/errorMessage.json");
const baseUrl = process.env.BASE_URL;

const { invalidUser, passwordMissing, emailMissing } =
  errorMessages.loginErrorMessages;

describe("User Login Test positive scenarios", () => {
  test("[TC-1],should login user with valid email and password", async () => {
    //making a post request on login endpoint
    const res = await request(baseUrl)
      .post("/api/login")
      .send({
        email: "emma.wong@reqres.in",
        password: "Password1!",
      })
      .set("Content-Type", "application/json");

    //making assertion on response body
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});

describe("User Login Test- negative scenarios", () => {
  test("[TC-1]-should failed to login user with unregistered email", async () => {
    //making a post request on login endpoint
    const res = await request(baseUrl)
      .post("/api/login")
      .send({
        email: "unknown.wong@reqres.in",
        password: "Password1!",
      })
      .set("Content-Type", "application/json");

    //making assertion on response body
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toEqual(invalidUser); //validating error message
  });

  test("[TC-2]-should failed to login with incorrect password", async () => {
    //making a post request on login endpoint
    const res = await request(baseUrl)
      .post("/api/login")
      .send({
        email: "emma.wong@reqres.in",
        password: "Pass",
      })
      .set("Content-Type", "application/json");

    //making assertion on response body
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("[TC-3]-should failed to login without a password", async () => {
    //making a post request on login endpoint
    const res = await request(baseUrl)
      .post("/api/login")
      .send({
        email: "emma.wong@reqres.in",
      })
      .set("Content-Type", "application/json");

    //making assertion on response body
    console.log(res.body);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toEqual(passwordMissing); //validating error message
  });

  test("[TC-4]-should failed to login without a email", async () => {
    //making a post request on login endpoint
    const res = await request(baseUrl)
      .post("/api/login")
      .send({
        password: "Password1",
      })
      .set("Content-Type", "application/json");

    //making assertion on response body
    console.log(res.body);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toEqual(emailMissing); //validating error message
  });
});
