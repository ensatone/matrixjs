function Matrix(){
 this.Transpose = function(a){
   for (var i=1;i<a.length;i++){
   if (a[i].length == a[i-1].length){} else { console.log('error : unmatched columns or rows'); }
   if (a[i].length == a.length){} else { console.log('error : unmatched columns or rows'); }
  }
  let result = [];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(a[j][i]);
         }
      }
  return result;
 }
 this.ModuloWithNum = function(a,b){
  let result=[];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(0);
         }
      }
      for (var i=0;i<a.length;i++){
         for (var j=0;j<a[i].length;j++){
          result[i][j] += a[i][j] % b;
         }
      }
 return result;
 }
 this.DivideWithNum = function(a,b){
  let result=[];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(0);
         }
      }
      for (var i=0;i<a.length;i++){
         for (var j=0;j<a[i].length;j++){
          result[i][j] += a[i][j] / b;
         }
      }
 return result;
 }
 this.SubtractWithNum = function(a,b){
  let result=[];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(0);
         }
      }
      for (var i=0;i<a.length;i++){
         for (var j=0;j<a[i].length;j++){
          result[i][j] += a[i][j] - b;
         }
      }
 return result;
 }
 this.AddWithNum = function(a,b){
  let result=[];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(0);
         }
      }
      for (var i=0;i<a.length;i++){
         for (var j=0;j<a[i].length;j++){
          result[i][j] += a[i][j] + b;
         }
      }
 return result;
 }
 this.MultiplyWithNum = function(a,b){
  let result=[];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(0);
         }
      }
      for (var i=0;i<a.length;i++){
         for (var j=0;j<a[i].length;j++){
          result[i][j] += a[i][j] * b;
         }
      }
 return result;
 }
 this.Multiply=function(a,b){
  for (var i=1;i<a.length;i++){
   if (a[i].length == a[i-1].length){} else { console.log('error : unmatched columns or rows'); }
  }
  for (var i=1;i<b.length;i++){
   if (b[i].length == b[i-1].length){} else { console.log('error : unmatched columns or rows'); }
  }
  if (a[0].length == b.length){} else { console.log('error : unmatched columns or rows'); }
  let result=[];
  let calculation=0;
  for (var i=0;i<a.length;i++){
   result.push([]);
   for (var j=0;j<b[0].length;j++){
     for (var k=0;k<b.length;k++){
          calculation += a[i][k]*b[k][j];
     }
   result[i].push(calculation);
   calculation = 0;
   }
  }
  return result;
 }
 this.Add=function(a,b){
  if (a.length == b.length){
   for (var i=0;i<a.length;i++){
      if (a[i].length == b[i].length){} else { console.log('error : unmatched columns or rows'); }
   }
      let result=[];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(0);
         }
      }
      for (var i=0;i<a.length;i++){
       for (var j=0;j<a[i].length;j++){
        result[i][j]+=a[i][j];
       }
      }
      for (var i=0;i<b.length;i++){
       for (var j=0;j<b[i].length;j++){
        result[i][j]+=b[i][j];
       }
      }
      return result;
   }
 }
 this.Subtract=function(a,b){
  if (a.length == b.length){
   for (var i=0;i<a.length;i++){
      if (a[i].length == b[i].length){} else { console.log('error : unmatched columns or rows'); }
   }
      let result=[];
      for (var i=0;i<a.length;i++){
         result.push([]);
         for (var j=0;j<a[i].length;j++){
                result[i].push(0);
         }
      }
      for (var i=0;i<a.length;i++){
       for (var j=0;j<a[i].length;j++){
        result[i][j]+=a[i][j];
       }
      }
      for (var i=0;i<b.length;i++){
       for (var j=0;j<b[i].length;j++){
        result[i][j]-=b[i][j];
       }
      }
      return result;
   }
 }
}