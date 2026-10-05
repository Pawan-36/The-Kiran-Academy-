package Day_01;

import java.util.Scanner;

public class Even_Odd_No {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter The No :- ");

        int Num = sc.nextInt();

        if (Num> 0)
        {
            if (Num%2 ==0) {
                System.out.println(Num + " Is a Even Number");
            }
            else
            {
                System.out.println(Num + " Is a Odd Number");
            }

        }
        else
        {
            System.out.println(Num + " Is a Invalid Number Please Enter valid No ");
        }

    }
}
