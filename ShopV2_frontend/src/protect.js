import { getToken } from "./auth.js";

export function protectPage() {
    const token = getToken();
    if (!token) {
        window.location.href = "/login.html";
    }
}
