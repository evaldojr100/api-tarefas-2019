class CategoriaView{

  constructor(){
    // this._grid = document.querySelector('#grid')

    // Adicionando um listernet no botão que carrega o formulário
    this._btnCategoria = document.querySelector('#btn-categoria')
    this._btnCategoria.addEventListener('click', (event) => {
      event.preventDefault()
    })

    // Campos do Formulário
    this._campoDescricaoCategoria = document.querySelector('#descricao')
    this._campoCor = document.querySelector('#cor') 
    this._listagem = document.querySelector('#lista-categorias')
  }
  get campoDescricaoCategoria(){
    return this._campoDescricaoCategoria.value
  }

  get campoCor(){
    return this._campoCor.value
  }
  
    templateListagem(categorias){
      return `
        ${categorias.listar().map(categoria => {
          return `
          <li>
            <a onclick = "tarefaService.listarTodas_por_categoria(${categoria.id}, ${0})" href="#" class="link-category">
            <svg width="9" height="10" viewBox="0 0 9 10" fill="${categoria.cor}" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="4.5" cy="5" rx="4.5" ry="5" />
            </svg> ${categoria.descricao}
            </a>
          </li>
          `
        }).join('')}
      `
    }

  montarListagem(categorias){
    // categorias.listar().map(c => console.log(c))
    this._listagem.innerHTML = ''
    this._listagem.innerHTML = this.templateListagem(categorias)
  }
}
