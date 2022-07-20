#include<iostream>
using namespace std;
void reversed(int arr[],int n,int i){
    while(i>=n/2){
        return;
    }
    swap(arr[i],arr[n-1-i]);
    reversed(arr,5,i+1);
}
int main()
{  int k[5]={1,2,3,4,5};
   reversed(k,5,0);
   return 0;
}