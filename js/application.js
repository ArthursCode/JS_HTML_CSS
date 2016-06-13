
$(document).ready(function Determinant (){
	$("#btnFind").click(function Determinant (){

  var num1=$("#num1").val();
  var num2=$("#num2").val();
  var num3=$("#num3").val();
  var num4=$("#num4").val();
  var num5=$("#num5").val();
  var num6=$("#num6").val();
  var num7=$("#num7").val();
  var num8=$("#num8").val();
  var num9=$("#num9").val();
  
  var sum1 = (num1*num5*num9);
  var sum2 = (num2*num6*num7);
  var sum3 = (num3*num4*num8);
  var sum4 = (num3*num5*num7);
  var sum5 = (num2*num4*num9);
  var sum6 = (num1*num6*num8);

  var det = (num1*num5*num9)+(num2*num6*num7)
           +(num3*num4*num8)-(num3*num5*num7)
		   -(num2*num4*num9)-(num1*num6*num8);  

  if(isNaN(det))
  {
     $("#Answer").html("Type with the correct form ");
  }
  else if (num1=="" || num2=="" || num3=="" || num4=="" || num5=="" || num6=="" || num7=="" || num8=="" || num9=="")
  {
     $("#Answer").html("Fill all textboxes");
  }
  else
  {	
     $("#Answer").html("Det A = "+"("+sum1+") + ("+sum2+") + ("+sum3+") - ("+sum4+") - ("+sum5+") - ("+sum6+") = "+det);
  }	
	
});
});
