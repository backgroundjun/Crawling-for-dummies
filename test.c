#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
void main () {
    FILE *fp = fopen("hello.txt","r");
    int   	num;
    char  	name[20];

    printf("학번을 입력하세요 : ");
    scanf("%d", &num);
    printf("이름을 입력하세요 : ");
    fgets(name, sizeof(name), stdin);

    printf("학번 : %d\n", num);
    printf("이름 : %s\n", name);

}
