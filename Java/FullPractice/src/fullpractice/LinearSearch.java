package fullpractice;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class LinearSearch {
    static int n;
    
    public static void main(String[] args) {
        if (args.length < 1) {    // requires file name
            System.out.println("ERROR: Requires an argument input file name.");
            return;
        }
        
        int key, idx;
        int[] numbers = readIntegers(args[0]);
        Scanner input = new Scanner(System.in);
        
        System.out.print("Search a number: ");
        key = input.nextInt();
        
        idx = linearSearch(key, numbers, n);
        if (idx != -1) {
            System.out.println(key + " is found in index " + idx + ".");
        } else {
            System.out.println(key + " is not found.");
        }
    }
    
    // Read integers from file "fname" and store them into an array
    // Return an array contains stored integers
    private static int[] readIntegers(String fname) {
        int[] numbers = new int[1000];
        n = 0;
        
        try (Scanner input = new Scanner(new File(fname))) {            
            while (input.hasNextInt()) {
                numbers[n] = input.nextInt();
                n++;
            }
            
            input.close();
        } catch (FileNotFoundException e) {
            System.out.println("Error opening file.");
            System.exit(1);
        }
        
        return numbers;
    }
    
    // Search integer "key" in array of integer "numbers" with length "ln"
    // Return index of array if "key" is found
    // Return -1 if "key" is not found
    private static int linearSearch(int key, int[] numbers, int ln) {
        for (int i = 0; i < ln; i++) {
            if (key == numbers[i])
                return i;
        }
        
        return -1;
    }
}
