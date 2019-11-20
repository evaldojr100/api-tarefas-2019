class TarefaView {

  constructor(){
    
    this._grid = document.querySelector('#grid')

    // Adicionando um listernet no botão que carrega o formulário
    this._btnNovo = document.querySelector('#btn-novo')
    this._btnNovo.addEventListener('click', (event) => {
      event.preventDefault()
    })

    // Campos do Formulário
    this._campoDescricao = document.querySelector('#descricao')
    this._campoData = document.querySelector('#data')
    this._campoCategoria = document.querySelector('#categoria')
  }

  get campoDescricao(){
    return this._campoDescricao.value
  }

  get campoData(){
    return this._campoData.value
  }

  get campoCategoria(){
    return this._campoCategoria.options[this._campoCategoria.selectedIndex].value;
  }


  templateGrid(tarefas){
    return `
      ${tarefas.listar().map(tarefa => {
        return `
        <section class="task-background d-flex m-3"">
        <div>
          <input type="checkbox" class="mt-1">
        </div>
        <div class="flex-fill ml-2 mr-2">
          <div><a href="#" class="link-task">${tarefa.descricao}</a></div>
          <div class="text-muted font-text">${tarefa.data}</div>
          <div class="mt-2 font-text"><svg width="9" height="10" viewBox="0 0 9 10" fill="${tarefa.cor}" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="4.5" cy="5" rx="4.5" ry="5"/>
          </svg>${tarefa.categoria_desc}</div>
        </div>
        <div class="flex-column">
        <div>
          <a href="#"><img onclick="tarefaController.deletar(${tarefa.id})" src="assets/images/delete.svg" alt=""></a>
        </div>
          <div class="mt-3">
            <a href="#"><img onclick="tarefaController.trocarModalEditar(this),tarefaController.carregarFormulario(this),tarefaController.editar('${tarefa.descricao}','${tarefa.data}','${tarefa.categoria}','${tarefa.prioridade}')" src="assets/images/editar.svg" alt=""></a>
          </div>
        </div>

      </section>
        `
      }).join('')}
    `
  }

  montarGrid(tarefas){
    // tarefas.listar().map(t => console.log(t))
    this._grid.innerHTML = ''
    this._grid.innerHTML = this.templateGrid(tarefas)
  }  
}
