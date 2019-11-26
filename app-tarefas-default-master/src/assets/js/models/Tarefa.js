class Tarefa {
 
  constructor(descricao, data, categoria_id, prioridade,id_user){
    this._descricao = descricao
    this._data = data
    this._categoria_id = categoria_id
    this._prioridade = prioridade
    this._id_user = id_user

  }

  toJSON() {
    return {
      descricao: this._descricao,
      data:  this._data,
      categoria_id:   this._categoria_id,
      prioridade = this._prioridade,
      id_user = this._id_user
    };
  }
  
}
