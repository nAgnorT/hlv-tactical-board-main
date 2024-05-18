export const useLogin = async (form: object) => {
  const response = await fetch("https://api.zentlemen.vn/ddapp/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  const data = await response.json();
  return data;
};
