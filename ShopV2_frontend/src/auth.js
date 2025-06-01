export function login(username, password) {
    return fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Login failed");
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("token", data.access_token);
        window.location.href = "/index.html";
    });
}

export function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login.html";
}

export function getToken() {
    return localStorage.getItem("token");
}
