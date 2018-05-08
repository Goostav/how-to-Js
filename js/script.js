window.onload = function() {
  console.log('The page is fully loaded.');
  
    var withButtonItemsClass = document.getElementsByClassName('button');
    
        for (var i = 0; i < withButtonItemsClass.length; i++) {
            alert(withButtonItemsClass[i].innerText);
        }  
}

/*
function drawTree(l) {
     
+    for (var i = 0; i < l; i++) {
+        var star = '';
+        for (var j = 0; j < i; j++) {
+            star += '*';
+        }
+        console.log(star);  
+    } 
+    return star+= '*';
 }
+console.log(drawTree(9));
*/