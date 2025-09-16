
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





// let arr=[1,2,3,4,5]
// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }

// // Example:
// console.log(reverseArray(arr));





// let arr=[10,20,30,40,50]
// function sumArray(arr){

//     let sum=0;
//     for(let i=0;i<arr.length;i++){

//         sum=sum+arr[i];
//     }
//     return sum;
// }

// console.log(sumArray(arr));




// let str="i am anjana"

// function largestWord(sentence)
// {

//     let longest="";
//     let words=sentence.split(" ");
//     for(let i=0;i<words.length;i++)
//     {
//         if (words[i].length > longest.length) {
//       longest = words[i]; 
//     }

// }
// return longest;
// }

// console.log(largestWord(str));



let arr=[2,4,6,,69,94,5]
function maxInArray(){

    if(arr.length===0) return null;
    let max = arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if (arr[i]>max){

            max=arr[i];
        }
    }
 return max;
}
console.log(maxInArray(arr));






function countVowels(str) {
  let s = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < s.length; i++) 
    {
      if (vowels.includes(s[i])) {
      count++;
    }
  }
  return count;
}


console.log(countVowels("Hello guys welcome to my channel")); 
