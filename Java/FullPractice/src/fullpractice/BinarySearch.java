package fullpractice;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class BinarySearch {
    static int n;
    
    public static void main(String[] args) {
        if (args.length < 1) {    // requires file name
            System.out.println("ERROR: Requires an argument input file name.");
            return;
        }
        
        int key, idx;
        int[] numbers = readIntegers(args[0]);
        Scanner input = new Scanner(System.in);
        Arrays.sort(numbers, 0, n);
        
        /*
        for (int i = 0; i < n; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        */
        
        System.out.print("Search a number: ");
        key = input.nextInt();
        
        idx = binarySearch(key, numbers, 0, n-1);
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
    
    // Search integer "key" in array of integer "numbers"
    // Return index of array if "key" is found
    // Return -1 if "key" is not found
    private static int binarySearch(int key, int[] numbers, int fromIndex, int toIndex) {
        int index = (fromIndex + toIndex) / 2;
        int result = -1;
        System.out.println(key + " " + numbers[index]);
        
        // when will this recursive stop?
        if (key == numbers[index])
            return index;
        else if (fromIndex > toIndex)
            return -1;
        
        // search it recursively
        if (key > numbers[index])
            result = binarySearch(key, numbers, index+1, toIndex);
        else if (key < numbers[index])
            result = binarySearch(key, numbers, fromIndex, index-1);
        
        return result;
    }
}
