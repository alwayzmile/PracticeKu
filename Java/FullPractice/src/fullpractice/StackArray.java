package fullpractice;

import java.util.Random;

public class StackArray {
    int[] elements;
    int capacity;
    int tos;
    
    public StackArray() {
        capacity = 1000;
        tos = -1;
        elements = new int[capacity];
    }
    
    public void push(int val) {
        if (!isFull()) {
            tos++;
            elements[tos] = val;
        }
    }
    
    // stack is not empty
    public int pop() {
        return elements[tos--];
    }
    
    public boolean isFull() {
        return (tos >= capacity-1);
    }
    
    public boolean isEmpty() {
        return (tos == -1);
    }
    
    @Override
    public String toString() {
        String output = "";
        for (int i = 0; i <= tos; i++)
            output += elements[i] + " ";
        
        return output;
    }
    
    public static void main(String[] args) {
        StackArray stack = new StackArray();
        int tmp = 111;
        
        System.out.println("Initial tmp: " + tmp);
        if (!stack.isEmpty()) {
            tmp = stack.pop();
            System.out.println("After stack.pop(): " + tmp);
        }
        
        Random gen = new Random();
        for (int i = 0; i < 20; i++) {
            stack.push(10 + gen.nextInt(90));
        }
        System.out.println("stack.toString():");
        System.out.println(stack.toString());
        
        for (int i = 0; i < 25; i++) {
            System.out.println("Initial tmp: " + tmp);
            if (!stack.isEmpty()) {
                tmp = stack.pop();
                System.out.println("After stack.pop(): " + tmp);
            }
        }
    }
}
