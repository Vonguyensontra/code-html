// Vo nguyen son tra_class SE1407
#include <stdio.h>
#include <string.h>
#include<conio.h>
 
int main(){
	char str[100],a[50];
    int check,i,j,max=0,n,key;
    int b[50];
	do{
		a[0]='\0';b[0]='\0',n=0;
	    printf("\n Please Enter any String :  ");
        gets(str);
        for(i = 0; i<strlen(str) ; i++){
        	if(str[i]!=' '){
    			check=1;
    			for (j=0;j<n;j++){
    				if (a[j]==str[i]){
    					b[j]=b[j]+1;
    				if (max<b[j]) max=b[j];
    					check=0;
					}
				}
				if (check){
					a[n]=str[i];
					a[n+1]='\0';
					b[n]=1;
					b[n+1]='\0';
					n++;
				}
			}
   		}
    
    printf("times of appearence for each character:\n");
    for (i=0;i<n;i++) 
	 	printf("%3c",a[i]);
	 	printf("\n");
    for (i=0;i<n;i++) 
	 	printf("%3d",b[i]);
	 	printf("\n");
    printf("\nCharacter that appears the most:\n");
    for (i=0;i<n;i++) 	
	 	if (b[i]==max) 
		 	printf("%3c",a[i]);
		 	printf("\n");
    for(i=0;i<n;i++) 
	 	if (b[i]==max) 
		 	printf("%3d",b[i]);
			printf("\n");	
    fflush(stdin);
    printf("Press any key to continue!!!\n");
    key=getch();
    } while  ( key != 27 );
    getchar();
    return 0;
}
