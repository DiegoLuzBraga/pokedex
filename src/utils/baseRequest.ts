export const baseRequest = async <T>(
  url: string,
  handleRequest: (response: T) => void,
  notificate: (
    message: string,
    status: "default" | "error" | "success" | "warning" | "info"
  ) => void
) => {
  await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(async response => {
      const data = await response.json();
      handleRequest(data);
    })
    .catch(async error => {
      const data = await error.json();
      notificate(data.message, "error");
    });
};
