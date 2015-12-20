/** 
 * NOTE:
 * Actual player (width * height) = (19px * 14px)
 * Margin top height = 12px
 * Initial player position = (19px/2, 14px/2 + 12px)
 */

import javax.swing.JOptionPane;

PGraphics pg;
PImage bg;
int halfw = 10,
    halfh = 7,
    x     = halfw + 2,
    y     = halfh + 12;

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
  
  putPlayer();
}

void draw() {}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      // why there is minus 1 here?
      // (y - halfh - 1) means (y - 8)
      // half of ellipse's height is 6
      // since y decrement is 2, so it must be (y - 8) not (y - 7)
      if (get(x, y - halfh - 1)     != #000000 &&  // top
          get(x - 6, y - halfh - 1) != #000000 &&  // top left
          get(x + 6, y - halfh - 1) != #000000) {  // top right
        y -= 2;
        putPlayer();
      }
    } else if (keyCode == DOWN) {
      if (get(x, y + halfh)     != #000000 &&  // bottom
          get(x - 6, y + halfh) != #000000 &&  // bottom left
          get(x + 6, y + halfh) != #000000) {  // bottom right
        y += 2;
        putPlayer();
      }
    } else if (keyCode == LEFT) {
      if (get(x - halfw, y)     != #000000 &&  // left
          get(x - halfw, y - 6) != #000000 &&  // top left
          get(x - halfw, y + 6) != #000000) {  // bottom left
        x -= 2;
        putPlayer();  
      }
    } else if (keyCode == RIGHT) {
      if (get(x + halfw, y)     != #000000 &&  // right
          get(x + halfw, y - 6) != #000000 &&  // top right
          get(x + halfw, y + 6) != #000000) {  // bottom right
        x += 2;
        putPlayer();
      }
    }
  }
}

void putPlayer() {
  pg.background(#ffffff, 0);
  pg.ellipse(x, y, 12, 12);
  pg.endDraw();
  background(bg);
  image(pg, 0, 0);
  
  // x + 7; why 7? because ellipse width is 12, half of it is 6.
  // Then, the next pixel after the right most pixel of ellipse is (x + 7, y)
  if (get(x + 7, y) == #ff0000) {
    // reset x and y to the start position
    x = halfw + 2;
    y = halfh + 12;
    
    JOptionPane.showMessageDialog(null, "You Win!");
    putPlayer();
  }
}
