miro.onReady(() => {

  
 // The thing
 var listecartesA = ["https://images.unsplash.com/photo-1591883266273-f10efc5249b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80","https://images.unsplash.com/photo-1591758879097-04f4889fb04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80","https://images.unsplash.com/photo-1591880907925-e8a75dc8cc1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80","https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1588615419966-0c0f3bb797b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"];

 var listecartesB = ["https://images.unsplash.com/photo-1591883266273-f10efc5249b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80","https://images.unsplash.com/photo-1591758879097-04f4889fb04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80","https://images.unsplash.com/photo-1591880907925-e8a75dc8cc1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80","https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1588615419966-0c0f3bb797b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"];
  
  var Shuffle = function() {
  var ctrA = listecartesA.length, temp, index;
  while (ctrA > 0) {
  index = Math.floor(Math.random() * ctrA);
    ctrA--;
    temp = listecartesA[ctrA];
    listecartesA[ctrA] = listecartesA[index];
    listecartesA[index] = temp;
  }
  var ctrB = listecartesB.length, temp, index;
  while (ctrB > 0) {
  index = Math.floor(Math.random() * ctrB);
    ctrB--;
    temp = listecartesB[ctrB];
    listecartesB[ctrB] = listecartesB[index];
    listecartesB[index] = temp;
  }
  return listecartesA, listecartesB;
}

var getCardA = function() {
  return listecartesA[0];
};

var getCardB = function() {
  return listecartesB[0];
};

var images = function() {
 document.getElementById("img1").src=getCardA();
 document.getElementById("img2").src=getCardB();
    };

$('#Mélanger').click(function() {
  Shuffle();
  images();
});
})
