package Day_01;

import java.util.Scanner;

public class Age_Eligible_or_Not {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Age :-");
        int Age = sc.nextInt();

        if(Age>0)
        {
            if (Age>=18 && Age < 100)
            {
                System.out.println(Age+" Your Age is Eligible for Voting");
            }
            else
            {
                System.out.println(Age+" Your Age is Not Eligible for Voting");
            }
        }
        else
        {
            System.out.println(Age+" Please Enter Valid Age");
        }
    }
}
