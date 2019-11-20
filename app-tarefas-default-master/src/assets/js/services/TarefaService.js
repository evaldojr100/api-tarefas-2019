class TarefaService extends Service {
  
  constructor(){
    super()
    this._path = `${this._url}/tarefas/`
    this._tarefas = new Tarefas()
    this._tarefaView = new TarefaView
  
    
  }

  listarTodas(descricao){
    console.log(this._path)
    return fetch(`${this._path}`)
            .then(res => {
              if (!res.ok) throw new Error(res.statusText)
              return res.json()
            })
            .catch(erro => Mensagem.mostrar(erro, 'alert-danger'))
  }

  //alterações juliano
  listarTodas_por_prioridade(prioridade, pagina){
    this._path = `http://localhost:3009/api/v1/tarefas/filtro/prioridade_pagination/?page=${pagina}&prioridade=${prioridade}`

    console.log(this._path)

    const parametros = {
      method: 'GET',
      headers:{
        "Content-Type": "application/json" ,
        "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE1NzM2OTE0NjUsImV4cCI6MTU3MzY5NDQ2NX0.981s9Y5Fg-snQWSeH4cxAhgL4UvN3A6AQSQCoXmpVd4"
      }
    }
    return fetch(`${this._path}`,parametros)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .catch(erro => Mensagem.mostrar(erro, 'alert-danger'))


  }

  listarPorId(tarefa){

  }

  inserir(tarefa){
    const parametros = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(tarefa)
    }
    // console.log(tarefa)
    return fetch(`${this._path}`, parametros)
            .then(res => {
              if (!res.ok) throw new Error(res.statusText)
              return res.json()
            })
            .catch(erro => Mensagem.mostrar(erro, 'alert-danger'))
  }

  alterar(tarefa){

  }

  deletar(_id){
    console.log("deletando " + _id)
    const parametros = {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    }
    // console.log(tarefa)
    return fetch(`${this._path}/` + _id, parametros)
            .then(res => {
              if (!res.ok) throw new Error(res.statusText)
              return res.json()
              
            })
            .then(this._tarefas.deletar(_id))
            .then(document.location.reload(true))
            .catch(e => console.log(e))

    

  }
}
