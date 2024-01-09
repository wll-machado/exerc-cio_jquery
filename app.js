$(document).ready(function() {
    // Função para adicionar tarefa à lista
    function addTask(taskName) {
        const taskItem = `<li>${taskName} <img src="https://imgs.search.brave.com/C79doTJfywnMFl3eIByeH_4fyyswXF_cLveuZMyRHo8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9jaGVja21h/cmstY3Jvc3MvY2hl/Y2ttYXJrLWJveC1p/Y29uLnN2Zw.svg" alt="icone"></li>`;
        $("#taskList").append(taskItem);
    }

    // Submissão do formulário
    $("#taskForm").submit(function(event) {
        event.preventDefault();
        const taskName = $("#taskName").val();
        if (taskName) {
            addTask(taskName);
            $("#taskName").val(""); // Limpar o campo de entrada
        }
    });

    // Adicionar efeito de risco ao clicar na tarefa
    $("#taskList").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
