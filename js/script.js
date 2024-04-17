$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });

    function reload() {
        document.getElementById('iframeid').src += '';
    }
    btn.onclick = reload;

    function carregaiframe(src, id) {
        window.open(src, id);
     }

     carregaiframe("lerdados.php?parametro=" + paramentro,"iframeid");

    $.ajax({
        type: "GET",
        data: { 
            parametros1: parametro1,
            parametros2: parametro2
            },
        url: "http://localhost:8080/dashboard/php/lerdados.php",
        success: function(data) {
            $('#conteudo').html(data);
        }
    });

    // Receber seletor do id celular
    var celular = document.getElementById("celular");

    celular.addEventListener("input", () => {

        // Remover os caracteres não numéricos usando a expressão regular /\D/g e limitar a 11 dígitos.
        var limparValor = celular.value.replace(/\D/g, "").substring(0,11);

        // Dividir a string em um array de caracteres individuais.
        var numerosArray = limparValor.split("");

        // Criar a variável para receber o número formatado
        var numeroFormatado = "";
        
        // Acessa o IF quando a quantidade de números é maior do que zero
        if(numerosArray.length > 0){
            // Formatar o DD e concatenar o valor
            // slice - extraie uma parte do array
            // join - unir os elementos do array em uma única string
            numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
        }

        // Acessa o IF quando a quantidade de números é maior do que dois
        if(numerosArray.length > 2){
            // Formatar o número do telefone e concatenar o valor
            // slice - extraie uma parte do array
            // join - unir os elementos do array em uma única string
            numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
        }

        // Acessa o IF quando a quantidade de números é maior do que sete
        if(numerosArray.length > 7){
            // Formatar o número do telefone e concatenar o valor
            // slice - extraie uma parte do array
            // join - unir os elementos do array em uma única string
            numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
        }

        // Enviar para o campo o número formatado
        celular.value = numeroFormatado;
    });

    
});