
class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Erro!";
  }
}


 class Produto {
  constructor (nome, datadeCadastro, descricao, preco){
  this.nome = nome;
  this.datadeCadastro = datadeCadastro;
  this.descricao = descricao;
  this.preco = preco;
}
mostrarProdutos (){
  return this.nome + this.datadeCadastro + this.descricao + this.preco ;
}
}




class ProdutosDestaque extends Produto{
  constructor (nome, datadeCadastro, descricao,  preco, imagemDestaque){
    super(nome, datadeCadastro, descricao, preco, imagemDestaque)
    this.imagemDestaque = imagemDestaque;
  }

  mostrarAtributos(){
    try{
    return this.atributos();
    } catch (erro){
      console.log(erro.stack)
    }
  } 

  atributos() {
    if (this.nome != "" && this.datadeCadastro != "" && this.descricao != "" && this.preco != "" && this.imagemDestaque != ""){ 
      return  `
      <h1 class = "Daniel" >${this.nome}</h1>
      <h4> ${this.datadeCadastro}</h4>
      <img src="${this.imagemDestaque}" style="height: 250px"/>
      <p> ${this.descricao}</p>
      <p> ${this.preco}</p>
      ` ;
  } else {
    throw new Error ("Algum campo não está preenchido :)")
}
  }
  


  
}   



const produtosDestaque = new ProdutosDestaque("Playboi Carti", "16-04-2020", "Disco de Vinil, album: Whole Lotta Red", "R$156.24", "https://i.pinimg.com/564x/33/7e/37/337e3761542dace2a87e810872d56f89.jpg");

const atributos1 = produtosDestaque.mostrarAtributos() 

const produtos = document.getElementById("produto-destaque")
produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarAtributos());







class ProdutosdaLista extends Produto{
  constructor (nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4){
    super(nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4)
    this.nome2 = nome2;
    this.descricao2 = descricao2;
    this.preco2 = preco2;
    this.nome3 = nome3;
    this.descricao3 = descricao3;
    this.preco3 = preco3;
    this.nome4 = nome4;
    this.descricao4 = descricao4;
    this.preco4 = preco4;
  }

  mostrarAtributos2(){
    try{
    return this.atributos1();
    } catch (erro){
      console.log(erro.stack)
    }
  } 

  atributos1() {
    if ( this.nome2 != "" && this.descricao2 != "" && this.preco2 != "" && this.nome3 != "" && this.descricao3 != "" && this.preco3 != "" && this.nome4 != "" && this.descricao4 != "" && this.preco4 != ""){
      return `
    
      <div class="listinha">
    <div class="grid-container">
      <div class="coluna">
      <h4>${this.nome2}</h4>
      <p>${this.descricao2}</p>
      <p>${this.preco2}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome3}</h4>
      <p>${this.descricao3}</p>
      <p>${this.preco3}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome4}</h4>
      <p>${this.descricao4}</p>
      <p>${this.preco4}</p>
      </div>
    </div>
  </div>
    `;

  } else {
    throw new Error ("Algum campo não está preenchido :)")
}
  }
}








const produtosLIsta = new ProdutosdaLista("Cash carti", "Disco nde Vinil, Album: playboi carti ", "R$ 213,31", "King Vamp", "Disco de Vinil, Album: Die lit", "R$ 314,31", "RED", "Disco de Vinil, Album: Whole Lotta Red", "R$ 216,31");

const atributos2 = produtosLIsta.mostrarAtributos2() 

const listaProdutos = document.getElementById("lista-produtos")
listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarAtributos2());

//const listaProdutos = document.getElementById("lista-produtos")
//divListaProduto.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());