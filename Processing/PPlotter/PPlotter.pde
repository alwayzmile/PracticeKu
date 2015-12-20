void setup() {
  surface.setTitle("PPlotter: A Simple Plotter");
  size(800, 500);
  background(245);
  
  translate(width/2, height/2);
  scale(1, -1);
  
  stroke(0);
  line(-(width/2), 0, (width/2), 0);
  line(0, -(height/2), 0, (height/2));
  
  stroke(#0000ff);
  for (float x = -100, y; x <= 100; x+=0.02) {
    y = x * x;
    point(x, y);
  }
}