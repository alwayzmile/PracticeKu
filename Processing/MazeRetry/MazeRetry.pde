/** 
 * NOTE:
 * Actual player (width * height) = (19px * 14px)
 * Margin top height = 12px
 * Initial player position = (19px/2, 14px/2 + 12px)
 *
 * When checking the way default (x, y) position of a rect is "TOP LEFT"
 */

import javax.swing.JOptionPane;

PGraphics pg;
PImage bg;
int x     = 0,
    y     = 12;
boolean go;

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
  
  /* for testing
  for (int yi = y; yi < y+14; yi++) {
    for (int xi = x; xi < x+19; xi++) {
      println(hex(get(xi, yi)));
      stroke(#0000ff);
      point(xi, yi);
    }
  }
  */
  
  putPlayer();
}

void draw() {}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      if (canGoUp(x, y)) {
        y--;
        putPlayer();
      }
    } else if (keyCode == DOWN) {
      if (canGoDown(x, y)) {
        y++;
        putPlayer();
      }
    } else if (keyCode == LEFT) {
      if (canGoLeft(x, y)) {
        x--;
        putPlayer();
      }
    } else if (keyCode == RIGHT) {
      if (canGoRight(x, y)) {
        x++;
        putPlayer();  
      }
    }
  }
}

void putPlayer() {
  pg.background(#ffffff, 0);
  pg.rect(x, y, 19, 14);
  pg.endDraw();
  background(bg);
  image(pg, 0, 0);
  
  // check if it reaches the red finish
  if (get(x-1, y) == #ff0000) {
    x = 0;
    y = 12;
    
    JOptionPane.showMessageDialog(null, "You Win!");
    putPlayer();
  }
}

// check top right and bottom right to go right
boolean canGoRight(int x, int y) {
  return (get(x+19, y) != #000000 && get(x+19, y+13) != #000000);
}

// check top left && bottom left to go left
boolean canGoLeft(int x, int y) {
  return (get(x-1, y) != #000000 && get(x-1, y+13) != #000000);
}

// check top left && top right to go top
boolean canGoUp(int x, int y) {
  return (get(x, y-1) != #000000 && get(x+18, y-1) != #000000);
}

// check bottom left && bottom right to go down
boolean canGoDown(int x, int y) {
  return (get(x, y+14) != #000000 && get(x+18, y+14) != #000000);
}
