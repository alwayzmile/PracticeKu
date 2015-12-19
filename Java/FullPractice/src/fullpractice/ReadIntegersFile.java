package fullpractice;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadIntegersFile {
    static int n;
    
    public static void main(String[] args) {
        if (args.length < 1) {    // requires file name
            System.out.println("ERROR: Requires an argument input file name.");
            return;
        }
        
        int[] numbers = readIntegers(args[0]);
        
        for (int i = 0; i < n; i++) {
            System.out.println(numbers[i]);
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
}
