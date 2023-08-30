function sayHello() { 
    alert("Hello World") 
 } 

 function getConfirmation(){ 
    var retVal = confirm("Do you want to continue ?"); 
    if( retVal == true ){ 
       document.write ("User wants to continue!"); 
    return true; 
    }else{ 
       Document.write ("User does not want to continue!"); 
    return false; 
    } 
 } 

function hidetabs() { if (!document.getElementById) return;
   obj = document.getElementById("tabs-3");
   obj.style.visibility="hidden";
   obj = document.getElementById("tabs-2");
   obj.style.visibility="hidden";
   obj = document.getElementById("SLocation");
   obj.style.display="none";
   obj = document.getElementById("req");
   obj.style.display="none"; 
   obj = document.getElementById("MySubjects");
   obj.style.display="none"; 
   obj = document.getElementById("req2");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   obj.style.display="none"; 
   obj = document.getElementById("Modules");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   obj.style.display="none";
  
}

function hidetabs1() { if (!document.getElementById) return;
    obj = document.getElementById("tabs-3");
    obj.style.visibility="hidden";
    obj = document.getElementById("tabs-2");
    obj.style.visibility="hidden";
    obj = document.getElementById("tabs-1");
    obj.style.visibility="visible";

}

function hidetabs2() { if (!document.getElementById) return;
   obj = document.getElementById("tabs-3");
   obj.style.visibility="hidden";
   obj = document.getElementById("tabs-1");
   obj.style.visibility="hidden";
   obj = document.getElementById("tabs-2");
   obj.style.visibility="visible";

}

function hidetabs3() { if (!document.getElementById) return;
   obj = document.getElementById("tabs-1");
   obj.style.visibility="hidden";
   obj = document.getElementById("tabs-2");
   obj.style.visibility="hidden";
   obj = document.getElementById("tabs-3");
   obj.style.visibility="visible";

}

function showbtns() { if (!document.getElementById) return
   obj = document.getElementById("req");
   obj.style.display="none"; 
   obj = document.getElementById("MySubjects");
   obj.style.display="none"; 
   obj = document.getElementById("req2");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   obj.style.display="none"; 
   obj = document.getElementById("Modules");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   obj.style.display="none";
   obj = document.getElementById("SLocation");
   if(obj.style.display=="none")
   {
      obj.style.display="block";
   }
   else
   {
      obj.style.display="none"
   }

}

function showbtns1() { if (!document.getElementById) return;
   obj = document.getElementById("req");
   obj.style.display="none"; 
   obj = document.getElementById("SLocation");
   obj.style.display="none"; 
   obj = document.getElementById("req2");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   obj.style.display="none"; 
   obj = document.getElementById("Modules");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   obj.style.display="none";
   obj = document.getElementById("MySubjects");
   if(obj.style.display=="none")
   {
      obj.style.display="block";
   }
   else
   {
      obj.style.display="none"
   }

}

function showbtns2() { if (!document.getElementById) return;
   obj = document.getElementById("SLocation");
   obj.style.display="none"; 
   obj = document.getElementById("MySubjects");
   obj.style.display="none"; 
   obj = document.getElementById("req2");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   obj.style.display="none"; 
   obj = document.getElementById("Modules");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   obj.style.display="none";
   obj = document.getElementById("req");
   if(obj.style.display=="none")
   {
      obj.style.display="block";
   }
   else
   {
      obj.style.display="none"
   }

}

function showbtns3() { if (!document.getElementById) return;
   obj = document.getElementById("SLocation");
   obj.style.display="none"; 
   obj = document.getElementById("MySubjects");
   obj.style.display="none"; 
   obj = document.getElementById("req2");
   obj.style.display="none";
   obj = document.getElementById("req");
   obj.style.display="none"; 
   obj = document.getElementById("Modules");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   if(obj.style.display=="none")
   {
      obj.style.display="block";
   }
   else
   {
      obj.style.display="none"
   }


}

function showbtns4() { if (!document.getElementById) return;
   obj = document.getElementById("SLocation");
   obj.style.display="none"; 
   obj = document.getElementById("MySubjects");
   obj.style.display="none"; 
   obj = document.getElementById("req");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   obj.style.display="none"; 
   obj = document.getElementById("Modules");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   obj.style.display="none";
   obj = document.getElementById("req2");
   if(obj.style.display=="none")
   {
      obj.style.display="block";
   }
   else
   {
      obj.style.display="none"
   }

}

function showbtns5() { if (!document.getElementById) return;
   obj = document.getElementById("SLocation");
   obj.style.display="none"; 
   obj = document.getElementById("MySubjects");
   obj.style.display="none"; 
   obj = document.getElementById("req2");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   obj.style.display="none"; 
   obj = document.getElementById("req");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   obj.style.display="none";
   obj = document.getElementById("Modules");
   if(obj.style.display=="none")
   {
      obj.style.display="block";
   }
   else
   {
      obj.style.display="none"
   }


}

function showbtns6() { if (!document.getElementById) return;
   obj = document.getElementById("SLocation");
   obj.style.display="none"; 
   obj = document.getElementById("MySubjects");
   obj.style.display="none"; 
   obj = document.getElementById("req2");
   obj.style.display="none";
   obj = document.getElementById("ULocation");
   obj.style.display="none"; 
   obj = document.getElementById("req");
   obj.style.display="none";
   obj = document.getElementById("Modules");
   obj.style.display="none";
   obj = document.getElementById("Uletter");
   if(obj.style.display=="none")
   {
      obj.style.display="block";
   }
   else
   {
      obj.style.display="none"
   }


}

function leftScroll() {  
   var  lft = document.getElementById("myitemss");
        lft.scrollLeft -= 100;
 }
 
 function rightSroll() { 
     obj = document.getElementById("myitemss");
     obj.scrollLeft += 100;
 }
 

 


