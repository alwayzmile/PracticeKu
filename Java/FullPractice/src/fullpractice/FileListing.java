package fullpractice;

import java.io.File;
import java.util.Scanner;

public class FileListing {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter file/directory name: ");
        fileList(input.nextLine(), 0);
    }
    
    public static void fileList(String path, int level) {
        File name = new File(path);
        
        if (name.exists()) {
            if (name.isDirectory()) {
                File nameChild;
                
                for (String item : name.list()) {
                    for (int i = 0; i < level; i++)
                        System.out.print("-");
                    System.out.println(item);
                    
                    nameChild = new File(path + "/" + item);
                    if (nameChild.isDirectory()) {
                        fileList(path + "/" + item, (level + 1));
                    }
                }
            }
        }
    }
}
