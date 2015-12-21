/** 
 * NOTE:
 * Actual player (width * height) = (19px * 14px)
 * Margin top height = 12px
 * Initial player position = (19px/2, 14px/2 + 12px)
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
  pg.fill(#ff0000);
  
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
      go = true;
      for (int yi = y-1; yi < y-1+14 && go; yi++) {
        for (int xi = x; xi < x+19 && go; xi++) {
          if (get(xi, yi) == #000000)
            go = false;
        }
      }
      
      if (go) {
        y--;
        putPlayer();
      }
    } else if (keyCode == DOWN) {
      go = true;
      for (int yi = y+1; yi < y+1+14 && go; yi++) {
        for (int xi = x; xi < x+19 && go; xi++) {
          if (get(xi, yi) == #000000)
            go = false;
        }
      }
      
      if (go) {
        y++;
        putPlayer();
      }
    } else if (keyCode == LEFT) {
      go = true;
      for (int yi = y; yi < y+14 && go; yi++) {
        for (int xi = x-1; xi < x-1+19 && go; xi++) {
          if (get(xi, yi) == #000000)
            go = false;
        }
      }
      
      if (go) {
        x--;
        putPlayer();
      }
    } else if (keyCode == RIGHT) {
      go = true;
      for (int yi = y; yi < y+14 && go; yi++) {
        for (int xi = x+1; xi < x+1+19 && go; xi++) {
          if (get(xi, yi) == #000000)
            go = false;
        }
      }
      
      if (go) {
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
  
  if (get(x+19, y) == #ff0000) {
    x = 0;
    y = 12;
    
    JOptionPane.showMessageDialog(null, "You Win!");
    putPlayer();
  }
}
