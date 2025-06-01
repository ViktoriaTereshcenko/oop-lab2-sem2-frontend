import { loginUser } from "../auth.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ access_token: "abc.def.ghi" }),
  })
);

test("loginUser зберігає токен", async () => {
  localStorage.clear();
  await loginUser("admin", "1234");
  expect(localStorage.getItem("access_token")).toBe("abc.def.ghi");
});
