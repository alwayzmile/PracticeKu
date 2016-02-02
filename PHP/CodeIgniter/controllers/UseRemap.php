<?php
class UseRemap extends CI_Controller {
  public function _remap($method, $params = array())
  {
    $action = $params[0];
    $actionparam1 = $params[1];
    $actionparam2 = $params[2];

    if ($method == 'math')
    {
      if ($action == 'multiplication')
      {
        echo "$actionparam1 * $actionparam2 = " . ($actionparam1 * $actionparam2);
      }
      else if ($action == 'division')
      {
        echo "$actionparam1 / $actionparam2 = " . ($actionparam1 / $actionparam2);
      }
      else if ($action == 'addition')
      {
        echo "$actionparam1 + $actionparam2 = " . ($actionparam1 + $actionparam2);
      }
    }
  }
}
?>
