<?php
class UseRemapCorrect extends CI_Controller {
  public function index()
  {
    echo 'This is the default method of this controller.';
  }

  public function _remap($method, $params = array())
  {
    if ($method === 'multiplication')
    {
      $this->$method($params);
    }
    else
    {
      $this->index();
    }
  }

  public function multiplication($params)
  {
    echo "$params[0] * $params[1] = " . ($params[0] * $params[1]);
  }
}
?>
