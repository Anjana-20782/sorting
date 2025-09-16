
// let arr=[5,7,3,8,4,10];
// n=arr.length;
// for(i=0;i<n;i++)
// {
//     for(j=0;j<n-i;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
           
//         }

//     }

   
// }

//  console.log(arr[n-2]);



// let arr = [1, 2, 3, 4, 5]; 
// let reversed = [];           

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);    
// }

// console.log("Original:", arr);
// console.log("Reversed:", reversed
// );



// let str="split"
// let rev=str.split("").reverse().join("")
// if(str==rev)
// {
//     console.log("it is palidrome");
    
// }
// else{

//     console.log("it is not a palidrome")
// }

let arr=[1,2,3,4,5]
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example:
console.log(reverseArray(arr));

