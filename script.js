 const logo= document.getElementById('menu');
 const navbar=document.querySelector('.nav-links');

 logo.addEventListener('click',function(){
    navbar.classList.toggle('active');
 })

 
 const produtos=[];

let carrinho=document.querySelector('.carrinho-icone');
let listCarrinho=document.querySelector('.lista-carrinho');
const butao=document.querySelectorAll('.adicionar')
// const carrinho=[];

carrinho.addEventListener("click", ()=>{
    if(listCarrinho.style.display==="block"){
         listCarrinho.style.display="none";
    }else{
          listCarrinho.style.display="block";
    }
});

butao.forEach(itens =>{
    itens.addEventListener("click", ()=>{
        // closets puxa informacoes do pai ou seja do produto-card
        const list=itens.closest('.produto-card')
        // pegando os valores do produto que esta dentro da classe produto-card
         const id=itens.dataset.id;
         const preco=list.querySelector('.preco').textContent;
         const nome=list.querySelector('h3').textContent;
         console.log(id, preco, nome);
    });
});
 