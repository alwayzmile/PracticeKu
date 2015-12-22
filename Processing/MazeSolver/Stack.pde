class Stack
{
  int[] elements; // stack's elements
  int capacity;   // stack's capacity
  int tos;        // top of stack
  
  Stack() {
    tos = -1;
    capacity = 1000;
    elements = new int[capacity];  
  }
  
  void push(int val) {
    if (!isFull())
      elements[++tos] = val;
    
    //paused = true;;
  }
  
  // stack is not empty
  int pop() {
    //paused = true;
    return elements[tos--];
  }
  
  // stack is not empty
  int top() {
    return elements[tos];
  }
  
  int top(int min) {
    return elements[tos-min];
  }
  
  boolean isEmpty() {
    return (tos == -1);
  }
  
  boolean isFull() {
    return (tos >= capacity-1);
  }
  
  void clear() {
    tos = -1;
  }
  
  String toString() {
    String output = "";
    for (int i = 0; i <= tos; i++) {
      output += elements[i] + " ";
    }
    
    return output;
  }
}
