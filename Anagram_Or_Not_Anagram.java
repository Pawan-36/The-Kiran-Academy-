package Day_01;

import java.util.Arrays;
import java.util.Scanner;


public class Anagram_Or_Not_Anagram {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter first string: ");
        String str1 = sc.nextLine();

        System.out.println("Enter second string: ");
        String str2 = sc.nextLine();

        // Convert strings into character arrays
        char[] arr1 = str1.toLowerCase().toCharArray();
        char[] arr2 = str2.toLowerCase().toCharArray();

        // First check length
        if (arr1.length != arr2.length) {
            System.out.println("Not Anagram");
        }
        else {
            // Sort both arrays
            Arrays.sort(arr1);
            Arrays.sort(arr2);

            // Compare both arrays
            if (Arrays.equals(arr1, arr2)) {
                System.out.println("Anagram");
            }
            else {
                System.out.println("Not Anagram");
            }
        }

        sc.close();
    }
}
