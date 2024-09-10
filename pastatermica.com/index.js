document.getElementById('fetchButton').addEventListener('click', (event) => {
    event.preventDefault();
fetch('https://amiiboapi.com');
        then(response => response.fetch('https://amiiboapi.com'))
        then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>name:</strong> ${data.name}</p>
                <p><strong>character:</strong> ${data.character}</p>
                <p><strong>image:</strong> ${data.image}</p>
                <p><strong>head:</strong> ${data.head}</p>
                <p><strong>type:</strong> ${data.type}</p>
                <p><strong>amiiboseries:</strong> ${data.amiiboseries}</p>
            `;
        })
        
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});