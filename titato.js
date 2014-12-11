
$(document).ready(function(){

  count = 0;

  tile1clicked_by_X = false;
  tile1clicked_by_O = false;
  tile2clicked_by_X = false;
  tile2clicked_by_O = false;
  tile3clicked_by_X = false;
  tile3clicked_by_O = false;
  tile4clicked_by_X = false;
  tile4clicked_by_O = false;
  tile5clicked_by_X = false;
  tile5clicked_by_O = false;
  tile6clicked_by_X = false;
  tile6clicked_by_O = false;
  tile7clicked_by_X = false;
  tile7clicked_by_O = false;
  tile8clicked_by_X = false;
  tile8clicked_by_O = false;
  tile9clicked_by_X = false;
  tile9clicked_by_O = false;

  $('#startNewGame').click(function(){
    location.reload();
  });

  $('#tile1').click(function(){
    if(count<9 && count%2==0){
      $('#tile1').toggleClass("playerO" );
      tile1clicked_by_O = true;
      count += 1;
      if((tile1clicked_by_O && tile2clicked_by_O && tile3clicked_by_O) || (tile1clicked_by_O && tile5clicked_by_O && tile9clicked_by_O) || (tile1clicked_by_O && tile4clicked_by_O && tile7clicked_by_O)
        ){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile1clicked_by_X = true;
      count += 1;
      if((tile1clicked_by_X && tile2clicked_by_X && tile3clicked_by_X) || (tile1clicked_by_X && tile5clicked_by_X && tile9clicked_by_X) || (tile1clicked_by_X && tile4clicked_by_X && tile7clicked_by_X)
        ){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile2').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile2clicked_by_O = true;
      count += 1;
      if((tile1clicked_by_O && tile2clicked_by_O && tile3clicked_by_O) || (tile2clicked_by_O && tile5clicked_by_O && tile8clicked_by_O)){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile2clicked_by_X = true;
      count += 1;
      if((tile1clicked_by_X && tile2clicked_by_X && tile3clicked_by_X) || (tile2clicked_by_X && tile5clicked_by_X && tile8clicked_by_X)){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile3').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile3clicked_by_O = true;
      count += 1;
       if((tile1clicked_by_O && tile2clicked_by_O && tile3clicked_by_O) || (tile3clicked_by_O && tile6clicked_by_O && tile9clicked_by_O) || (tile3clicked_by_O && tile5clicked_by_O && tile7clicked_by_O)
        ){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile3clicked_by_X = true;
      count += 1;
      if((tile1clicked_by_X && tile2clicked_by_X && tile3clicked_by_X) || (tile3clicked_by_X && tile6clicked_by_X && tile9clicked_by_X) || (tile3clicked_by_X && tile5clicked_by_X && tile7clicked_by_X)
        ){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile4').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile4clicked_by_O = true;
      count += 1;
      if((tile1clicked_by_O && tile4clicked_by_O && tile7clicked_by_O) || (tile4clicked_by_O && tile5clicked_by_O && tile6clicked_by_O)){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile4clicked_by_X = true;
      count += 1;
      if((tile1clicked_by_X && tile4clicked_by_X && tile7clicked_by_X) || (tile4clicked_by_X && tile5clicked_by_X && tile6clicked_by_X)){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile5').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile5clicked_by_O = true;
      count += 1;
      if((tile1clicked_by_O && tile5clicked_by_O && tile9clicked_by_O) || (tile3clicked_by_O && tile5clicked_by_O && tile7clicked_by_O) || (tile4clicked_by_O && tile5clicked_by_O && tile6clicked_by_O) || (tile2clicked_by_O && tile5clicked_by_O && tile8clicked_by_O)
        ){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile5clicked_by_X = true;
      count += 1;
      if((tile1clicked_by_X && tile5clicked_by_X && tile9clicked_by_X) || (tile3clicked_by_X && tile5clicked_by_X && tile7clicked_by_X) || (tile4clicked_by_X && tile5clicked_by_X && tile6clicked_by_X) || (tile2clicked_by_X && tile5clicked_by_X && tile8clicked_by_X)
        ){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile6').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile6clicked_by_O = true;
      count += 1;
      if((tile3clicked_by_O && tile6clicked_by_O && tile9clicked_by_O) || (tile4clicked_by_O && tile5clicked_by_O && tile6clicked_by_O)){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile6clicked_by_X = true;
      count += 1;
       if((tile3clicked_by_X && tile6clicked_by_X && tile9clicked_by_X) || (tile4clicked_by_X && tile5clicked_by_X && tile6clicked_by_X)){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile7').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile7clicked_by_O = true;
      count += 1;
      if((tile7clicked_by_O && tile8clicked_by_O && tile9clicked_by_O) || (tile7clicked_by_O && tile5clicked_by_O && tile3clicked_by_O) || (tile1clicked_by_O && tile4clicked_by_O && tile7clicked_by_O)
        ){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile7clicked_by_X = true;
      count += 1;
      if((tile7clicked_by_X && tile8clicked_by_X && tile9clicked_by_X) || (tile7clicked_by_X && tile5clicked_by_X && tile3clicked_by_X) || (tile1clicked_by_X && tile4clicked_by_X && tile7clicked_by_X)
        ){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile8').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile8clicked_by_O = true;
      count += 1;
      if((tile7clicked_by_O && tile8clicked_by_O && tile9clicked_by_O) || (tile2clicked_by_O && tile5clicked_by_O && tile8clicked_by_O)){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile8clicked_by_X = true;
      count += 1;
      if((tile7clicked_by_X && tile8clicked_by_X && tile9clicked_by_X) || (tile2clicked_by_X && tile5clicked_by_X && tile8clicked_by_X)){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

  $('#tile9').on('click', function(){
    if(count<9 && count%2==0){
      $( this ).toggleClass( "playerO" );
      tile9clicked_by_O = true;
      count += 1;
      if((tile7clicked_by_O && tile8clicked_by_O && tile9clicked_by_O) || (tile1clicked_by_O && tile5clicked_by_O && tile9clicked_by_O) || (tile3clicked_by_O && tile6clicked_by_O && tile9clicked_by_O)
        ){
        alert("PlayerO wins!");
        $('.tile').attr("disabled", true);
      }
    }else if(count<9){
      $( this ).toggleClass( "playerX" );
      tile9clicked_by_X = true;
      count += 1;
      if((tile7clicked_by_X && tile8clicked_by_X && tile9clicked_by_X) || (tile1clicked_by_X && tile5clicked_by_X && tile9clicked_by_X) || (tile3clicked_by_X && tile6clicked_by_X && tile9clicked_by_X)
        ){
        alert("PlayerX wins!");
        $('.tile').attr("disabled", true);
      }
    }
    if(count==9){
      alert("DRAW!!!");
      $('.tile').attr("disabled", true);
    }
    $( this ).attr("disabled", true);
  });

});