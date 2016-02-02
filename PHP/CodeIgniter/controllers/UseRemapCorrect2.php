<?php
class UseRemapCorrect2 extends CI_Controller {
  public function _remap($method, $params = array())
  {
    if (method_exists($this, $method))
    {
      //print_r($params);

      // When more than one parameters specified in $params,
      // I thought it would be acceptable to just write
      // return call_user_func_array(array($this, $method), $params);
      // but it doesn't work. For some reasons, I have to use array($params)
      return call_user_func_array(array($this, $method), array($params));
    }
    show_404();
  }

  // For the same purpose as in the previous comment,
  // I tried to write
  // multiplication($params = array())
  // but it still doesn't work
  public function multiplication($params)
  {
    //print_r($params);

    echo "$params[0] * $params[1] = " . ($params[0] * $params[1]);
  }
}
?>
