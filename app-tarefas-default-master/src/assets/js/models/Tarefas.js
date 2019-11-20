
class Tarefas {
  
  constructor(){
    this._tarefas = []
    this._tarefaView = new TarefaView()
  }

  adicionar(tarefa){
    this._tarefas.push(tarefa)
  }

  listar(){
    return this._tarefas
  }

  limpar(){
    this._tarefas = []
  }
  deletar(i){
    console.log("chegando aqui com id"+i)
    var index = this._tarefas.indexOf(i);
    if (index > -1) {
      this._tarefas.splice(index, 1);
    }
    
  }
}
