package Day_01;

import java.util.Scanner;

public class Profit_or_Loss {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter The Cost Price");
        double Cost_price = sc.nextInt();
        System.out.println("Enter The Selling Price");
        double selling_price = sc.nextInt();

        double Amt = selling_price - Cost_price;

        if(Amt> 0)
        {
            System.out.println("It Occer Profit of Rs "+Amt);
        }
        else
        {
            System.out.println("It Occer Loss of Rs "+ Amt);
        }


    }
}
