// Processing2.2.1;Win8;64bit
// a little test in splitting a line

// method 1 is my own method, just like interpolating values (I think)
// method 2 is from my old code, but I forgot about the theory behind it
//          because at that time I just know it without understanding it
// TODO: learn your own code

void setup() {
  size(400, 400);
  background(204);

  /* method 1
  // on the right
  float xa1 = 100,
  ya1 = 10,
  xa2 = 300,
  ya2 = 360;
  // on the left
  float xb1 = 100,
  yb1 = 10,
  xb2 = 10,
  yb2 = 200;
  line(xa1, ya1, xa2, ya2);  // will be splitted
  line(xb1, yb1, xb2, yb2);
  
  float maxY = ya2;
  float x = 100 + yb2/ya2 * (xa2-xa1);
  
  stroke(#ff0000);
  line(xb2, yb2, x, yb2);
  strokeWeight(8);
  point(x, yb2);
  */

  // method 2
  // on the right; will be splitted
  Point pt1a = new Point(100, 10);
  Point pt2a = new Point(300, 360);
  // on the left
  Point pt1b = new Point(100, 10);
  Point pt2b = new Point(10, 200);

  line(pt1a.x, pt1a.y, pt2a.x, pt2a.y);  // will be splitted
  line(pt1b.x, pt1b.y, pt2b.x, pt2b.y);

  Point xy = getIntersectionPoint(pt1a, pt2a, pt2b, new Point(pt2b.x + 1, pt2b.y));
  println(xy.x + " " + xy.y);

  stroke(#ff0000);
  line(pt2b.x, pt2b.y, xy.x, xy.y);
  strokeWeight(8);
  point(xy.x, xy.y);
}

Point getIntersectionPoint ( Point A1, Point A2, Point B1, Point B2 ) {
  float a1, a2, b1, b2, c1, c2, x, y, det;
  a1 = A2.y - A1.y;
  b1 = A1.x - A2.x;
  c1 = a1*A1.x + b1*A1.y;

  a2 = B2.y - B1.y;
  b2 = B1.x - B2.x;
  c2 = a2*B1.x + b2*B1.y;

  det = a1*b2 - a2*b1;
  x = (b2*c1 - b1*c2) / det;
  y = (a1*c2 - a2*c1) / det;

  return new Point( x, y );
}

class Point
{
  public float x, y;

  Point( float xa, float ya ) {
    x = xa;
    y = ya;
  }
}

