/** 
 * NOTE:
 * Actual player (width * height) = (19px * 14px)
 * Margin top height = 12px
 * Initial player dirsition = (19px/2, 14px/2 + 12px)
 *
 * ORDER: Right -> Down -> Left -> Top
 */

import javax.swing.JOptionPane;

final int DIR_R = 1;  // direction: right
final int DIR_L = 2;  // direction: left
final int DIR_U = 4;  // direction: up
final int DIR_D = 8;  // direction: down

PGraphics pg;
PImage bg;
PFont pf;
int x = 0,  // initial x
    y = 12; // initial y
boolean turnBack = false;
boolean paused = false;
Stack dirs = new Stack();  // all possible directions through the way (including turn back direction)
Stack ways = new Stack();  // numbers of possible directions for each intersection (no turn back direction)
Stack xpos = new Stack();  // x coordinate of an intersection
Stack ypos = new Stack();  // y coordinate of an intersection

void setup() {
  // temporarily (just for practice) the maze comes from 
  // https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks and Queues/Stacks and Queues.html
  size(393, 292);
  bg = loadImage("data/maze.bmp");
  background(bg);
  
  pg = createGraphics(393, 292);
  pg.beginDraw();
  pg.background(#ffffff, 0);
  pg.noStroke();
  pg.fill(#0000ff);
  
  pf = loadFont("data/Tahoma-Bold-13.vlw");
  pg.textFont(pf);
  
  // initial stack
  dirs.push(DIR_R);
  ways.push(1);
  xpos.push(x);
  ypos.push(y);
  
  println(dirs.toString());
  println(ways.toString());
  println(xpos.toString());
  println(ypos.toString());
  println();
  
  putPlayer();
}

void draw() {
  if (!paused)
    play();
}

void play() {  
  // based on order Right -> Down -> Left -> Up
  if ((dirs.top() & DIR_R) == DIR_R) {
    x++;
    putPlayer();
  } else if ((dirs.top() & DIR_D) == DIR_D) {
    y++;
    putPlayer();
  } else if ((dirs.top() & DIR_L) == DIR_L) {
    x--;
    putPlayer();
  } else if ((dirs.top() & DIR_U) == DIR_U) {
    y--;
    putPlayer();
  }
  
  int pop;
  int dir = getDirection(x, y, dirs.top());
  if (dir > 0 && turnBack) {
    dirs.pop();
    
    pop = ways.pop();
    ways.push(pop-1);
    if (ways.top() == 0) {
      ways.pop();
      int xfrom = xpos.pop();
      int yfrom = ypos.pop();
      int xto   = xpos.top();
      int yto   = ypos.top();
      
      dirs.pop();
      dirs.push(getDirection(xfrom, yfrom, xto, yto));
      turnBack = true;
    } else {
      turnBack = false;
    }
    
    println(dirs.toString());
    println(ways.toString());
    println(xpos.toString());
    println(ypos.toString());
    println();
  } else if (dir > 0) {  // && !turnBack
    int nways = 0;       // to count total possible ways
    
    // based on order            Right -> Down -> Left -> Up
    // so, push order would be   Up -> Left -> Down -> Right
    if ((dir & DIR_U) == DIR_U) {
      dirs.push(DIR_U);
      nways++;
    }
      
    if ((dir & DIR_L) == DIR_L) {
      dirs.push(DIR_L);
      nways++;
    }
      
    if ((dir & DIR_D) == DIR_D) {
      dirs.push(DIR_D);
      nways++;
    }
      
    if ((dir & DIR_R) == DIR_R) {
      dirs.push(DIR_R);
      nways++;
    }
    
    ways.push(nways);
    xpos.push(x);
    ypos.push(y);
      
    println(dirs.toString());
    println(ways.toString());
    println(xpos.toString());
    println(ypos.toString());
    println();
  } else if (dir < 0) {
    // if there is no way. must turn back
    pop = dirs.pop();
    
    // deciding turn back direction
    if (pop == DIR_R)
      dirs.push(DIR_L);
    else if (pop == DIR_L)
      dirs.push(DIR_R);
    else if (pop == DIR_U)
      dirs.push(DIR_D);
    else // dirs.pop() == DIR_D
      dirs.push(DIR_U);
    
    turnBack = true;
    
    println(dirs.toString());
    println(ways.toString());
    println(xpos.toString());
    println(ypos.toString());
    println();
  }
}

// put player on pixels
void putPlayer() {
  pg.background(#000000, 0);
  pg.rect(x, y, 19, 14);
  pg.endDraw();
  background(bg);
  image(pg, 0, 0);
  
  // check if it reaches the red finish
  if (get(x+19, y) == #ff0000) {
    // initial x, y
    x = 0;
    y = 12;
    
    // initial stack
    dirs.clear();
    ways.clear();
    xpos.clear();
    ypos.clear();
    
    dirs.push(DIR_R);
    ways.push(1);
    xpos.push(x);
    ypos.push(y);
    
    println(dirs.toString());
    println(ways.toString());
    println(xpos.toString());
    println(ypos.toString());
    println();
    
    JOptionPane.showMessageDialog(null, "You Win!");
    putPlayer();
    
    paused = true;
    pause();
  }
}

void pause() {
  pg.background(#000000, 200);
  pg.fill(#ffffff);
  pg.noStroke();
  pg.text("PRESS SPACEBAR TO START", 100, height/2);
  pg.fill(#0000ff);
  pg.endDraw();
  image(pg, 0, 0);
}

void keyPressed() {
  if (key == ' ') {
    paused = !paused;
    
    if (paused)
      pause();
  } else if (key == 't') {
    // for debugging purpose
    println("turn back: " + turnBack);
  }
}
