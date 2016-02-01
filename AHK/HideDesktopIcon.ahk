^!+d::              ; ctrl+alt+shift+d
  Send, #m          ; minimize all window
  Send, {esc}{esc}  ; clear any selected desktop icon
  Send, {AppsKey}   ; right click on desktop
  Send, vd          ; View > Show desktop icon (checked/unchecked)
  Send, #+m         ; undo minimizing all window
Return
