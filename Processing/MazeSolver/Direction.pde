// int getDirection()
// int inverseDir()
// boolean canGoRight()
// boolean canGoLeft()
// boolean canGoUp()
// boolean canGoDown()

// get all possible direction we can go from (x, y) position
// from initial direction curDir
// so we cannot get returned direction which is inverseDir(curDir)
// return -1 if no possible direction except turn back
// return  0 if no possible direction except continue going in curDir direction and turn back.
//           in fact, we will choose to continue going in curDir direction if 0 is returned
int getDirection(int x, int y, int curDir) {
  int dir = 0;
  
  // if current direction is up
  if ((curDir & DIR_U) == DIR_U) {
    if (canGoRight(x, y))
      dir += DIR_R;
      
    if (canGoLeft(x, y))
      dir += DIR_L;
      
    if (canGoUp(x, y) && dir > 0)
      dir += DIR_U;
    else if (!canGoUp(x, y) && dir == 0)
      dir = -1;
  } else if ((curDir & DIR_D) == DIR_D) {
    if (canGoRight(x, y))
      dir += DIR_R;
      
    if (canGoLeft(x, y))
      dir += DIR_L;
      
    if (canGoDown(x, y) && dir > 0)
      dir += DIR_D;
    else if (!canGoDown(x, y) && dir == 0)
      dir = -1;
  } else if ((curDir & DIR_L) == DIR_L) {
    if (canGoUp(x, y))
      dir += DIR_U;
      
    if (canGoDown(x, y))
      dir += DIR_D;
      
    if (canGoLeft(x, y) && dir > 0)
      dir += DIR_L;
    else if (!canGoLeft(x, y) && dir == 0)
      dir = -1;
  } else if ((curDir & DIR_R) == DIR_R) {
    if (canGoUp(x, y))
      dir += DIR_U;
      
    if (canGoDown(x, y))
      dir += DIR_D;
      
    if (canGoRight(x, y) && dir > 0)
      dir += DIR_R;
    else if (!canGoRight(x, y) && dir == 0)
      dir = -1;
  }
  
  return dir;
}

// get the direction if we want to move from (xfrom, yfrom) to (xto, yto)
// there are 4 possible directions
// so it would be either (xfrom == xto) or (yfrom == yto)
int getDirection(int xfrom, int yfrom, int xto, int yto) {
  if (xfrom == xto) {
    if (yfrom > yto)
      return DIR_U;
    else
      return DIR_D;
  } else {
    if (xfrom > xto)
      return DIR_L;
    else
      return DIR_R;
  }
}

// get the inverse direction of direction dir
// if dir == left, then inverseDir == right, ...
int inverseDir(int dir) {
  if (dir == DIR_U)
    return DIR_D;
  else if (dir == DIR_D)
    return DIR_U;
  else if (dir == DIR_L)
    return DIR_R;
  else // if (dir == DIR_R)
    return DIR_L;
}

// check top right and bottom right to go right
boolean canGoRight(int x, int y) {
  return (get(x+19, y) != #000000 && get(x+19, y+13) != #000000 && x+19 < width);
}

// check top left && bottom left to go left
boolean canGoLeft(int x, int y) {
  return (get(x-1, y) != #000000 && get(x-1, y+13) != #000000 && x > 0);
}

// check top left && top right to go top
boolean canGoUp(int x, int y) {
  return (get(x, y-1) != #000000 && get(x+18, y-1) != #000000 && y > 0);
}

// check bottom left && bottom right to go down
boolean canGoDown(int x, int y) {
  return (get(x, y+14) != #000000 && get(x+18, y+14) != #000000 && y+14 < height);
}
