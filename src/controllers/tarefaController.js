const conexao = require('../config/conexao')
const { validationResult } = require('express-validator')

exports.listarperpage = (req, res) => {

  const page = req.query.page
  const query = "select * from tarefas LIMIT ?,?"

  if (parseInt(page) < 1 || isNaN(parseInt(page) && isFinite(page))) {
    res.status(400)
    res.json({ "message": "Página inválida!" })
  } else {
    conexao.query(query, [(parseInt(page) - 1) * 10, (parseInt(page) - 1) * 10 + 10], (err, rows) => {
      if (err) {
        res.status(500)
        res.json({ "message": "Internal Server Error" })
        console.log(err)
      } else if (rows.length > 0) {
        res.status(200)
        res.json(rows)
      } else {
        res.status(404)
        res.json({ "message": "Nenhuma tarefa encontrada" })
      }
    })
  }
}

exports.listarResolvido_paginado = (req, res) => {
 /*  rota http://localhost:3009/api/v1/tarefas/filtro/resolvidos_pagination/?page=1 */
  const page = req.query.page
  const query = " select *  from tarefas where realizado = 1 LIMIT ?,?;"
  

  if (parseInt(page) < 1 ) {
    res.status(400)
    res.json({ "message": "Página inválida!" })
  } else {
    conexao.query(query, [(parseInt(page) - 1) * 10, (parseInt(page) - 1) * 10 + 10], (err, rows) => {
      if (err) {
        res.status(500)
        res.json({ "message": "Internal Server Error" })
        console.log(err)
      } else if (rows.length > 0) {
        res.status(200)
        res.json(rows)
      } else {
        res.status(404)
        res.json({ "message": "Nenhuma tarefa encontrada" })
      }
    })
  }
}

exports.listarPorPrioridade_paginado = (req, res) => {
 /*  http://localhost:3009/api/v1/tarefas/filtro/prioridade_pagination/?page=2&prioridade=1 */
   const page = req.query.page
   const prioridade = req.query.prioridade;
   const query = " select tarefas.descricao, tarefas.data, tarefas.realizado,categorias.descricao as 'categoria_desc',categorias.cor from tarefas,categorias where tarefas.categoria_id=categorias.id and tarefas.prioridade = ? LIMIT ?,?;"
   
 
   if (parseInt(page) < 1 ) {
     res.status(400)
     res.json({ "message": "Página inválida!" })
   } else {
     conexao.query(query, [prioridade,(parseInt(page) - 1) * 10, (parseInt(page) - 1) * 10 + 10], (err, rows) => {
       if (err) {
         res.status(500)
         res.json({ "message": "Internal Server Error" })
         console.log(err)
       } else if (rows.length > 0) {
         res.status(200)
         res.json(rows)
       } else {
         res.status(404)
         res.json({ "message": "Nenhuma tarefa encontrada" })
       }
     })
   }
 }
 
 exports.listarPorDeletados = (req, res) => {
  /*  http://localhost:3009/api/v1/tarefas/filtro/deletados_pagination/?page=1*/
    const page = req.query.page
  
    const query = "select tarefas.descricao, tarefas.data, tarefas.realizado,categorias.descricao as 'categoria_desc',categorias.cor from tarefas,categorias where tarefas.categoria_id=categorias.id and tarefas.deletado = 1 "
    
  
    if (parseInt(page) < 1  || isNaN(parseInt(page) && isFinite(page))) {
      res.status(400)
      res.json({ "message": "Página inválida!" })
    } else {
      conexao.query(query, [(parseInt(page) - 1) * 10, (parseInt(page) - 1) * 10 + 10], (err, rows) => {
        if (err) {
          res.status(500)
          res.json({ "message": "Internal Server Error" })
          console.log(err)
        } else if (rows.length > 0) {
          res.status(200)
          res.json(rows)
        } else {
          res.status(404)
          res.json({ "message": "Nenhuma tarefa encontrada" })
        }
      })
    }
  }

  exports.listarPorCategoria = (req, res) => {
    /* http://localhost:3009/api/v1/tarefas/filtro/categoria_pagination/?page=2&categoria_id=1*/
      const page = req.query.page
      const categoria_id = req.query.categoria_id
    
      const query = " select * from tarefas where categoria_id = ?;"
      
    
      if (parseInt(page) < 1  || isNaN(parseInt(page) && isFinite(page))) {
        res.status(400)
        res.json({ "message": "Página inválida!" })
      } else {
        conexao.query(query, [categoria_id,(parseInt(page) - 1) * 10, (parseInt(page) - 1) * 10 + 10], (err, rows) => {
          if (err) {
            res.status(500)
            res.json({ "message": "Internal Server Error" })
            console.log(err)
          } else if (rows.length > 0) {
            res.status(200)
            res.json(rows)
          } else {
            res.status(404)
            res.json({ "message": "Nenhuma tarefa encontrada" })
          }
        })
      }
    }

    /* */
    exports.listarVencidos = (req, res) => {
      /* http://localhost:3009/api/v1/tarefas/filtro/categoria_pagination/?page=2&categoria_id=1*/
        const page = req.query.page
       
      
        const query = " select * from tarefas where data < now() limit ?, ?; "
        
      
        if (parseInt(page) < 1  || isNaN(parseInt(page) && isFinite(page))) {
          res.status(400)
          res.json({ "message": "Página inválida!" })
        } else {
          conexao.query(query, [(parseInt(page) - 1) * 10, (parseInt(page) - 1) * 10 + 10], (err, rows) => {
            if (err) {
              res.status(500)
              res.json({ "message": "Internal Server Error" })
              console.log(err)
            } else if (rows.length > 0) {
              res.status(200)
              res.json(rows)
            } else {
              res.status(404)
              res.json({ "message": "Nenhuma tarefa encontrada" })
            }
          })
        }
      }
exports.listar = (req, res) => {

    const query = "select tarefas.descricao, tarefas.data, tarefas.realizado,categorias.descricao as 'categoria_desc',categorias.cor from tarefas,categorias where tarefas.categoria_id=categorias.id"

    conexao.query(query , (err, rows) =>{
        if(err){
            res.status(500)
            res.json({"message" : "Internal Server Error"})
            console.log(err)
        }else if(rows.length > 0){
            res.status(200)
            res.json(rows)
        }else{
            res.status(404)
            res.json({"message": "Nenhuma Tarefa Encontrada"})
        }
    })
}


exports.listarPorId = (req, res) => {

    const erros = validationResult(req)
    if(!erros.isEmpty()){

        return res.status(422).json({"erros": erros.array()})
        
    }else{

        const id  = req.params.id
        const query = "select * from tarefas where id = ?"

        conexao.query(query, [id], (err, rows) =>{
            if(err){const erros = validationResult(req)
                if(!erros.isEmpty()){
                    return res.status(422).json({"erros": erros.array()})
                }
                res.status(500)
                res.json({"message": "Inernal Server Error"})
                console.log(err)
            }else if(rows.length > 0){
                res.status(200)
                res.json(rows)
            }else{
                res.status(404)
                res.json({"message": "Nenhuma Tarefa Encontrada"})
            }
        })
    }
}


exports.inserir = (req, res) => {

  /* 
  ASSIM DEVE ESTAR O BODY
  {
      
    "descricao": "ESCREVA A DESCRIÇÃO",
    "data": "2018-10-03T14:00:00.000Z",
    "categoria_id": 1,
    "prioridade": 1,
    "id_user": 1
 
} */
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {

    const erros = validationResult(req)
    if(!erros.isEmpty()){

        return res.status(422).json({"erros": erros.array()})
        
    }else{

        const tarefa = []
        tarefa.push(req.body.descricao)
        tarefa.push(req.body.data)
        tarefa.push(req.body.categoria_id)
        tarefa.push(req.body.prioridade)
        tarefa.push(req.body.id_user)

        const query = "insert into tarefas (descricao, data, categoria_id, prioridade, id_user) values (?,?,?,?,?)"

        conexao.query(query, tarefa, (err, rows) =>{

            if(err){
                res.status(500)
                res.json({"message": "Internal Server Error"})
            }else{
                res.status(201)
                res.json({"message": "Tarefa Criada Com Sucesso", "id": rows.insertId})

            }
        })
    }

  }
}


exports.alterar = (req, res) => {
    
 /*  {
    "descricao": "Revisar TCC",
       "data": "2018-10-03",
       "realizado": 0,
       "categoria_id": 1,
       "prioridade": 1,
       "id_user": 1,
       "deletado": 0
} */

    const erros = validationResult(req)
    
    if(!erros.isEmpty()){

        return res.status(422).json({"erros": erros.array()})
        
    }else{

        const tarefa = []
        tarefa.push(req.body.descricao)
        tarefa.push(req.body.data)
        tarefa.push(req.body.realizado)
        tarefa.push(req.body.categoria_id)
        tarefa.push(req.body.prioridade)
        tarefa.push(req.body.id_user)
        tarefa.push(req.body.deletado)
        tarefa.push(req.params.id)
     
        const query = "update tarefas set descricao = ?, data = ?, realizado = ?, categoria_id = ? ,prioridade = ?, id_user = ?, deletado = ?  where id = ?; "
    
        conexao.query(query, tarefa, (err, rows) =>{
    
            if(err){
                res.status(500)
                res.json({"message": "Internal Server Error"})
                console.log(err)
            }else if(rows.affectedRows > 0){
                res.status(202)
                res.json({"message": "Tarefa Alterada Com Sucesso", "id": req.params.id})
            }else{
                res.status(404)
                res.json({"message": "Tarefa não encontrada"})
            }
        })
    }



}


exports.deletar = (req, res) =>{

    const erros = validationResult(req)

    if(!erros.isEmpty()){

        return res.status(422).json({"erros": erros.array()})
        
    }else{

        const id = req.params.id

        const query = "delete from tarefas where id = ?"


        conexao.query(query, id, (err, rows) =>{

            if(err){
                res.status(500)
                res.json({"message": "Internal Server Error"})
                console.log(err)
            }else if(rows.affectedRows > 0){
                res.status(200)
                res.json({"message": "Tarefa Deletada Com Sucesso", "id": req.params.id})
            }else{
                res.status(404)
                res.json({"message": "Tarefa não encontrada"})
            }
        })
    }
}

exports.listarPorDt = (req, res) => {

  const data = req.query.data
  const query = "select * from tarefas where data like ? "

  const errors = validationResult(req)

  if(!errors.isEmpty())
  {
    return res.status(422).json({ errors: errors.array() });
  }
  else{
      conexao.query(query, data + '%', (err, rows) => {
        if (err){
          res.status(500)
          res.json({"message": "Internal Server Error"})
          console.log(err)
        } else if (rows.length > 0){
          res.status(200)
          res.json(rows)
        } else {
          res.status(404)
          res.json({"message": "Nenhuma tarefa encontrada"})
        }
      })
  }    
}


exports.listarPorDescricao = (req, res) => {
  
  const erros = validationResult(req)
    if(!erros.isEmpty()){
        return res.status(422).json({"erros": erros.array()})
    } else{
      const perPage = 10
      let descricao = req.query.f
      console.log(req.query)
      let page = parseInt(req.query.page)
      console.log(descricao)
      console.log(page)

      if(isNaN(page)){
        page=0
      }
      descricao = '%'+descricao+'%'
      const query = "select * from tarefas where descricao like ? limit ?,?"

      conexao.query(query, [descricao,page,perPage], (err, rows)=>{
        if (err){
          res.status(500)
          res.json({"message": "Internal Server "})
          console.log(err)
        } else if (rows.length > 0){
          res.status(200)
          res.json(rows)
        } else {
          res.status(404)
          res.json({"message": "Nenhuma descrição encontrada"})
        }
      })
  }
}

exports.listarPorDatas = (req, res) => {
  const erros = validationResult(req) /*Modificado */

  if (!erros.isEmpty()) {
    return res.status(422).json({"erro":erros.array()})
  }else{
    const datas = []
    datas.push (req.query.data_inicial)
    datas.push (req.query.data_final)

    //  const query = " select * from tarefas where  date_format(data, '%Y-%m-%d') between '"+datas[0]+"' and '"+datas[1]+"'";

    const query = " select * from tarefas where data between ? and ?";

    conexao.query(query,datas, (err, rows) => {
        if (err){
          res.status(500)
          res.json({"message": "Internal Server Error",
          "erro":err})
          console.log(err)
        } else if (rows.length > 0){
          res.status(200)
          res.json(rows)
        } else {
          res.status(404)
          res.json({"message": "Nenhuma tarefa encontrada teste",
          "data_inicial":datas[0]})
        }
    })
  }
}

