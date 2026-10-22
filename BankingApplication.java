package Task_03;


import java.util.Scanner;

public class BankingApplication {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double balance = 10000;

        System.out.println("Welcome to Kiran Bank");
        System.out.println("Opening Balance: Rs. " + balance);

        while (true) {

            System.out.println("\n----- Banking Menu -----");
            System.out.println("1. Check Balance");
            System.out.println("2. Deposit Money");
            System.out.println("3. Withdraw Money");
            System.out.println("4. Exit");

            System.out.print("Enter choice: ");
            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    System.out.println(
                            "Current Balance: Rs. " + balance
                    );
                    break;

                case 2:
                    System.out.print("Enter deposit amount: ");
                    double deposit = sc.nextDouble();

                    if (deposit > 0) {
                        balance = balance + deposit;

                        System.out.println("Deposit successful.");
                        System.out.println(
                                "Updated Balance: Rs. " + balance
                        );
                    } else {
                        System.out.println(
                                "Invalid amount. Deposit must be greater than zero."
                        );
                    }
                    break;

                case 3:
                    System.out.print("Enter withdrawal amount: ");
                    double withdrawal = sc.nextDouble();

                    if (withdrawal <= 0) {
                        System.out.println(
                                "Invalid amount. Withdrawal must be greater than zero."
                        );
                    } else if (withdrawal <= balance) {
                        balance = balance - withdrawal;

                        System.out.println("Withdrawal successful.");
                        System.out.println(
                                "Updated Balance: Rs. " + balance
                        );
                    } else {
                        System.out.println(
                                "Transaction failed: Insufficient balance."
                        );
                        System.out.println(
                                "Current Balance: Rs. " + balance
                        );
                    }
                    break;

                case 4:
                    System.out.println(
                            "Thank you for banking with us. Goodbye!"
                    );
                    sc.close();
                    return;

                default:
                    System.out.println(
                            "Invalid choice. Please select 1, 2, 3, or 4."
                    );
            }
        }
    }
}

