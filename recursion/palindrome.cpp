#include<iostream>
#include <string>
using namespace std;
bool palindrome(string &s,int n,int i){
if(i>=n/2) return true;
if(s[i]!=s[n-1-i]) return false; 
return palindrome(s,n,i+1);
}
int main()
{   string s="HelloWorld";
    palindrome(s,10,0);
    return 0;
}