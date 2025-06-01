import { getToken } from "./auth.js";

const BASE_URL = "http://localhost:8000/api";

export function getProducts() {
    return fetch(`${BASE_URL}/products`, {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }).then(res => res.json());
}

export function getOrders() {
    return fetch(`${BASE_URL}/orders`, {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }).then(res => res.json());
}

export function addProduct(product) {
    return fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getToken()
        },
        body: JSON.stringify(product)
    }).then(res => {
        if (!res.ok) throw new Error("Failed to add product");
        return res.json();
    });
}
