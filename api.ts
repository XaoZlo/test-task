export async function request<V, T>(method: string, path: string, params?: Record<string, V>, headers?: Record<string, string>): Promise<T> {
    const response = await fetch(path, {
        method,
        headers,
        body: params != null ? JSON.stringify(params) : undefined,
    });

    return response.json().then(data => data as T);
}
