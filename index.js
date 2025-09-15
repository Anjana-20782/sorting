
let arr=[5,7,3,8,4,10];
n=arr.length;
for(i=0;i<n;i++)
{
    for(j=0;j<n-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
           
        }

    }

   
}

 console.log(arr[n-2]);