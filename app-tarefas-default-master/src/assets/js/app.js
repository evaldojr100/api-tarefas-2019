const categoriaController = new CategoriaController()

categoriaController.montar()

var carrega = document.getElementById("btn-novo")
carrega.addEventListener("click", function(){categoriaController.listar()})

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

var link_deletados = document.getElementById("categoriaTarefa");

var btn_salvar_tarefas = document.getElementById("btn-salvarT");

var campo_descricao = document.getElementById("descricaoTarefa");

var campo_data = document.getElementById("dataTarefa");
var categoria = document.getElementById("categoriaTarefa");
var prioridade = document.getElementById("prioridadetarefa_Tarefa");


btn_salvar_tarefas.addEventListener("click", function(){tarefaController.inserir(campo_descricao.value,campo_data.value,categoria.value,prioridade.value,1)});
