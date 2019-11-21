class TarefaController {

  constructor(){
    this._tarefas = new Tarefas()
    this._tarefaService = new TarefaService()
    this._tarefaView = new TarefaView()
  }

  listar(){
    this._tarefas.limpar()
    this._tarefaService.listarTodas()
      // Adiciona as tarefas recebidas na lista de tarefas
      .then(tarefas => {
        tarefas.map(tarefa => {
          console.log(tarefa)
          this._tarefas.adicionar(tarefa)
        }
          
          )
      })
      // Passa os dados para a View
      .then(() => this._tarefaView.montarGrid(this._tarefas))
  }

   //método desenvolvido pelo juliano
   listar_por_prioridade (prioridade,pagina){
    console.log(prioridade)
    this._tarefas.limpar();
    this._tarefaService.listarTodas_por_prioridade(prioridade,pagina)
    .then(tarefas => {
      tarefas.map(tarefa => {
        console.log(tarefa)
        this._tarefas.adicionar(tarefa)}
        )
    })
    .then(() => this._tarefaView.montarGrid(this._tarefas))
  }

  listar_por_deletados (pagina){
    console.log(pagina)
    this._tarefas.limpar();
    this._tarefaService.listarTodas_por_deletado(pagina)
    .then(tarefas => {
      tarefas.map(tarefa => {
        console.log(tarefa)
        this._tarefas.adicionar(tarefa)}
        )
    })
    .then(() => this._tarefaView.montarGrid(this._tarefas))
  }
  //fim do método desenvolvido por juliano

  carregarFormulario(){
    
    // Mostra o formulário
    $('#modalTarefa').modal('show')
  }

  trocarModalEditar(){
    const modalTarefa = document.querySelector('#tituloModalTarefa')
    modalTarefa.innerText = 'Editar Tarefa'

    document.getElementById('btn-alterarT').style.display = 'inline-block'
    document.getElementById('btn-salvarT').style.display = 'none'

  }

  trocarModalSalvar(){
    const modalTarefa = document.querySelector('#tituloModalTarefa')
    modalTarefa.innerText = 'Criar Tarefa'

    document.getElementById('btn-alterarT').style.display = 'none'
    document.getElementById('btn-salvarT').style.display =  'inline-block'

  }

  editar(descricao,data,categoria,prioridade){
    const Data = document.querySelector('#dataTarefa')
    Data.value = data

    const Descricao = document.querySelector('#descricaoTarefa')
    Descricao.value = descricao

    const Categoria = document.querySelector('#categoriaTarefa')
    Categoria.value = innerText(categoria)

    const Prioridade = document.querySelector('#prioridadeTarefa')
    if(prioridade == 1){
          let pri= "Alta"
          Prioridade.value = innerText(pri)
    }
    else if(prioridade == 2){
          let pri = "Média"
          Prioridade.value = innerText(pri)
    }
    else if(prioridade == 3){
          let pri = "Baixa"
         Prioridade.value == innerText(pri)

    }
  }

  inserir(){
    
    // Capturar os dados
    // const descricao = document.querySelector('#descricao').value
    // const datahorario = document.querySelector('#data').value
    // const categoria_id = document.querySelector('#categoria').value
    
    const tarefa = new Tarefa(this._tarefaView.campoDescricao, this._tarefaView.campoData, this._tarefaView.campoCategoria)

    // Criar a tarefa
    // const tarefa = new Tarefa(descricao, datahorario, categoria_id)
    
    // Enviar a tarefa
    this._tarefaService.inserir(tarefa.toJSON())
      .then(res => console.log(res))
  }

  alterar(){

  }

  deletar(id){
    this._tarefaService.deletar(id)
    // Passa os dados para a View
    
  }
}
