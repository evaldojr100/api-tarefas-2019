class CategoriaService extends Service {
  
  constructor(){
    super()
    this._path = `${this._url}/categorias`
  }
  

  listarTodas(){
    return '{}' /* fetch(`${this._path}`)
            .then(res => {
              if (!res.ok) throw Error(res.statusText)
              return res.json()
            })
            .catch(erro => Mensagem.mostrar(erro, 'alert-danger'))*/
  }

  


}
