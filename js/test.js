$(document).ready(function(){
    
    
    $("li").click(function(){
        var id = $(this).parent().attr("id");
      var x = $(this).val();
        var score = 0;
if (x==1){
        score = score + 1;
          $(this).addClass("list-group-item-success");
    
      }else{
          $(this).addClass("list-group-item-danger");
      }
        
        $("#"+id + " li").unbind("click")
//        alert(score);
        $("#score").append(score);
    });
    
});