$(document).on("mouseover", ".sidebar", function(){
    $(".fundo").show();

    $(".fundo").css("background", "rgba(0,0,0,0.85)");
    $(".fundo").css("position", "fixed");
    $(".fundo").css("right", "0");
    $(".fundo").css("left", "0");
    $(".fundo").css("bottom", "0");
    $(".fundo").css("top", "0");

    $(".fundo").css("transition", "600ms");
  });


  $(document).on("mouseout", ".sidebar", function(){

    $(".fundo").css("background", "rgba(0,0,0,0)");
    $(".fundo").css("transition", "600ms");
    $(".fundo").css("position", "");


  }); 

  

  $(document).on("click", ".cadastrarUsuario", function(){
      $("#modalCadastroUsuario").modal('show');
  });

  $(document).on("click", ".cadastrarComponente", function(){
    $("#modalCadastroComponente").modal('show');
  });

  $(document).on("click", ".cadastrarLocal", function(){
    $("#modalCadastroLocal").modal('show');
  });

  $(document).on("click", ".cadastrarModulo", function(){
    $("#modalCadastroModulo").modal('show');
  });