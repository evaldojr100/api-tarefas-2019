class CategoriaController {
  
  constructor(){
    this._categorias = new Categorias()
    this._categoriaService = new CategoriaService()
    this._categoriaView = new CategoriaView()
  }

  montar(){
    this._categorias.limpar()
    this._categoriaService.listarTodas()
      // Adiciona as categorias
      .then(categorias => {
        categorias.map(categoria => this._categorias.adicionar(categoria))
      })
      // Chama a view
      .then(() => this._categoriaView.montarListagem(this._categorias))
  }


  
  listar(){
    this._categorias.limpar()
    this._categoriaService.listarTodas()
      // Adiciona as categorias recebidas na lista de categorias
      .then(categorias => {
        categorias.map(categoria => {
          console.log(categoria)
          this._categorias.adicionar(categoria)}
          )
      })
      // Passa os dados para a View
      .then(() => this._categoriaView.montarGrid(this._categorias))
  }




  carregarFormularioCategoria(){
    
    // Mostra o formulário
    $('#modalCategoria').modal('show')

    // var elemento = document.getElementById("categoriaTarefa");
    

    // this._categorias.limpar()
    // this._categoriaService.listarTodas()
    //   // Adiciona as categorias
    //   .then(categorias => {
    //     categorias.map())
    //   })
  }

  inserirCategoria(){
    
    const categoria = new Categoria(this._categoriaView.campoDescricaoCategoria, this._categoriaView._campoCor)


    
    // Enviar a categoria
    this._categoriaService.inserirCategoria(categoria.toJSON())
      .then(res => console.log(res))
  }

 
}
