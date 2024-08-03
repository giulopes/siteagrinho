document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');

    if (bookId) {
        const bookDetails = getBookDetails(bookId);
        document.getElementById('book-details').querySelector('h2').textContent = bookDetails.title;
        document.getElementById('book-cover').src = bookDetails.cover;
        document.getElementById('book-summary').textContent = bookDetails.summary;
        document.getElementById('book-review').textContent = bookDetails.review;
    }
});

function getBookDetails(id) {
    const books = {
        "1": {
            title: "Livro 1",
            cover: "imagens/livro1.jpg",
            summary: "Resumo do Livro 1...",
            review: "Resenha do Livro 1..."
        },
        "2": {
            title: "Livro 2",
            cover: "imagens/livro2.jpg",
            summary: "Resumo do Livro 2...",
            review: "Resenha do Livro 2..."
        }
        // Adicione mais livros conforme necessário
    };

    return books[id] || {};
}
