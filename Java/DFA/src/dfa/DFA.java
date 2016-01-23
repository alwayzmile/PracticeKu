package dfa;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Scanner;

public class DFA {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String inputs;
        int nState = 0, curState = 0;
        String[][] states = new String[100][100];
        
        Path dfaFile = Paths.get("file", "dfa.txt");
        try {
            List<String> lines = Files.readAllLines(dfaFile, StandardCharsets.US_ASCII);
            
            for (String line : lines) {
                states[nState] = line.split(" ");
                
                for (String col : states[nState]) {
                    System.out.print(col + " ");
                }
                System.out.println();
                nState++;
            }
            
            /*
            for (int i = 0; i < nState; i++) {
                for (int j = 0; j < 2; j++) {
                    System.out.print(states[i][j]);
                }
                System.out.println();
            }
            */
        } catch (IOException e) {
            System.out.println(e);
        }
        
        System.out.print("Inputs: ");
        inputs = scanner.next();
        System.out.println(inputs);
        
        char input;
        for (int i = 0; i < inputs.length(); i++) {
            input = inputs.charAt(i);
            if (input == '0')
                curState = Integer.parseInt(states[curState][0]);
            else
                curState = Integer.parseInt(states[curState][1]);
            
            System.out.println(curState);
        }
        
        if (curState == nState-1)
            System.out.println("Accepted");
        else
            System.out.println("Rejected");
    }
}
