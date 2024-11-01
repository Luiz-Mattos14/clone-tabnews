test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdateAt = new Date(responseBody.update_at).toISOString();

  //Espera que no responseBody.update_at seja igual à parsedUpdateAt
  expect(responseBody.update_at).toEqual(parsedUpdateAt);

  //Espera que no dependencies.database.version seja igual à 16.0 - STRING
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  //Espera que no dependencies.database.max_connections seja igual à 100 - NUMBER
  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
