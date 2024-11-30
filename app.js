function create_card(categoria, pergunta, resposta) {
    var content = document.getElementById('content');
    var card = document.createElement('article');
    var answer_visible = false

    card.className = 'card';

    card.innerHTML = `
    <div class="card_conteudo">
    <h3>${categoria}</h3>
    <div class="card_conteudo_question">
        <p>${pergunta}</p>
    </div>
    <div class="card_conteudo_answer">
        <p>${resposta}</p>
    </div>
    </div>`;

    function flip_card() {
        card.classList.toggle('active', answer_visible);
        answer_visible = !answer_visible
    }

    card.addEventListener('active', flip_card)

    content.appendChild(card)
}