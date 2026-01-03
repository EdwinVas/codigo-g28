const BASE_URL = "https://693b88da9b80ba7262cd8e74.mockapi.io";
//contraseña linder123456

export async function getDevices() {
    try {
        const response = await fetch(`${BASE_URL}/products`);

        if (!response.ok) {
            return {
                ok: false,
                message: "Error al intentar obtener datos.",
            };
        }

        const data = await response.json();
        return { ok: true, data };
    } catch (error) {
        return {
            ok: false,
            message: String(error),
        };
    }
}

export async function getUsers() {
    const response = await fetch(`${BASE_URL}/user`);
    const data = await response.json();
    return data;
}