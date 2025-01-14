const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function apiService(limit = 20){
    try{
        const response = await fetch(`${API_URL}?_limit=${limit}`);

        if(!response.ok) {
            alert("Error na requisição com a API");
        }

        const data = await response.json();
        console.log('Requisição feita com sucesso!')

        return data;
    } catch {
        alert('Error ao buscar os dados!');
        console.log('Problema na requisição com a API')
        return null;
    }
}