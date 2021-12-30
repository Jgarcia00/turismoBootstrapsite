// propriedade de leitura (window.location.search) que retorna objeto em JavaScript. Parâmetros pelo método Get. 

/* 
    
    Encapsulei o código em função: 


 */ 

function obterParametroQueryString () {

    const parametroUrl = new URLSearchParams(window.location.search);

    console.log(window.location.search);
    console.log(parametroUrl);
    return (parametroUrl)


    /* Adicionalmente, vale também considerar algumas situações, como, por exemplo, selecionar um parâmetro de nome na URL

        const parametroLugar = parametroUrl.get("lugar");

        console.log(paramentoLugar);

    // resgatando um parâmetro idade (número) no URL, embora essa venha como uma string:

        const parametroRegiao = parametroUrl.get("regiao");

         console.log(parametroRegiao);

    // para resetar um parâmetro quando este último não é encontrado na URL (exemplo da casa): 

        const undefinedParam = parametroUrl.get("casa")

        console.log(unedfinParam)

    // também é possível remover e/ou ignorar determinado elemento da URL:

        const mudaQueryString = window.location.search.replace("?", "");
        console.log(mudaQueryString);

    O enunciado não faz esta observação, mas os valores de chave e valor poderiam ser separados na query string.

    Para isso, os valores poderiam ser armazenados num array. 

    */
}
