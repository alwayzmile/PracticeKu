<?php
class HelloWorld extends CI_Controller {
  public function index()
  {
    echo 'Hello World!!!';
  }

  public function comments()
  {
    echo 'Look at this!';
  }

  public function home()
  {
    echo 'Welcome<br />';
    echo 'This is the homepage of my CodeIgniter practice\'s website';
  }
}
?>
