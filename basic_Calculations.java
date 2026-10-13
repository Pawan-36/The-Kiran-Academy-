package day_2_of_Practice;

import java.util.Scanner;

public class basic_Calculations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number");
        int a = sc.nextInt();
        System.out.println("Enter second number");
        int b = sc.nextInt();

        int Add = a + b ;
        int Sub = a - b ;
        int Mult = a * b ;
        int Div = a / b ;
        int Mod = a % b ;

        System.out.println("Addition of "+a+" + "+b+" = "+Add);
        System.out.println("Subtraction or Difference of "+a+" - "+b+" = "+Sub);
        System.out.println("Multiplication  of "+a+" * "+b+" = "+Mult);
        System.out.println("Division of "+a+" / "+b+" = "+Div);
        System.out.println("Modulus of "+a+" % "+b+" = "+Mod);
    }
}
