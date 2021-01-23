const API_URL = "http://localhost:3001";

function request(endpoint, method = "GET", data = null) {
  const config = {
    method,
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer token",
    },
  };
  if(method === "POST" || method === "PATCH") {
    config.body = JSON.stringify(data);
  }
  const url = `${API_URL}/${endpoint}`;
  return fetch(url, config).then((response) => {
    return response.json();
  });
}

function get(endpoint) {
  return request(endpoint);
}
function post(endpoint, data) {
  return request(endpoint, "POST", data);
}
function patch(endpoint, data) {
  return request(endpoint, "PATCH", data);
}
function _delete(endpoint) {
  return request(endpoint, "DELETE");
}

export default {
    get,
    post,
    patch,
    delete:_delete
};