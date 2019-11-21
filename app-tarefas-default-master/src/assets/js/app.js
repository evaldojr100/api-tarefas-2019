const categoriaController = new CategoriaController()
categoriaController.montar()

const tarefaController = new TarefaController()
tarefaController.listar("")



//alterações juliano
var link_prioridade_alta = document.getElementById("prioridade_alta");
link_prioridade_alta.addEventListener("click", function(){tarefaController.listar_por_prioridade(1,1)});

var link_prioridade_media = document.getElementById("prioridade_media");
link_prioridade_media.addEventListener("click", function(){tarefaController.listar_por_prioridade(2,1)});

var link_prioridade_baixa = document.getElementById("prioridade_baixa");
link_prioridade_baixa.addEventListener("click", function(){tarefaController.listar_por_prioridade(3,1)});

var link_deletados = document.getElementById("btn-lixeira");
link_deletados.addEventListener("click", function(){tarefaController.listar_por_deletados(1)});
//fim da alteração juliano


