// Vo nguyen son tra_class SE1407
#include <stdio.h>
#include <string.h>
#include <conio.h>
int main(){
	int i,c,l;
	char s[100];
	do{
		printf(" Input string: ");
		gets(s);
		printf(" The old string: %s\n",s);
		printf(" The reversed string: ");
		l=strlen(s);
		for(i=l-1;i>0;i--)
		{
			if (s[i]==' ')
			{
				s[i]='\0';
				printf("%s ",&s[i]+1);
			}
		}
		printf("%s\n",s);
		printf(" Press enter to continue another reverse, ESC to exit.");
		c=getch();
	}
	while (c!=27);
	return 0;
}
