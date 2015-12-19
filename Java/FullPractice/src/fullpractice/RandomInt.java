package fullpractice;

import java.util.Random;

public class RandomInt {    
    public static void main(String[] args) {
        Random gen = new Random();
        int[] data = new int[50];
        
        // fill array with random integers ranged from 10 to 99
        for (int i = 0; i < 50; i++) {
            data[i] = 10 + gen.nextInt(90);
            System.out.println(data[i]);
        }
    }
}
