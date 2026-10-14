package day_2_of_Practice;

public class SHOPPING_BILL {
    public static double calculateElectronicsGST(double a, double b) {
        double amount = a + b;
        return amount + (amount * 18 / 100);
    }

    public static double calculateFashionGST(double c, double d) {
        double amount = c + d;
        return amount + (amount * 13 / 100);
    }

    public static double calculateFoodGST(double e) {
        return e + (e * 7 / 100);
    }

    public static double totalBill(double a, double b,
                                   double c, double d, double e) {
        double electronics = calculateElectronicsGST(a, b);
        double fashion = calculateFashionGST(c, d);
        double food = calculateFoodGST(e);

        return electronics + fashion + food;
    }

    public static double calculateDiscountedBill(double a, double b,
                                                 double c, double d, double e) {
        double total = totalBill(a, b, c, d, e);
        double discount = total * 20 / 100;

        return total - discount;
    }

    public static void main(String[] args) {
        double a = 100, b = 100, c = 100, d = 100, e = 100;

        double total = totalBill(a, b, c, d, e);
        double discount = total * 20 / 100;
        double payable = calculateDiscountedBill(a, b, c, d, e);

        System.out.println("Total after GST = "+total);
        System.out.println("Discount = "+discount);
        System.out.println("Final payable amount = "+ payable);
    }

}
