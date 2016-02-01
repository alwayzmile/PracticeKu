; select a word, color the word to red, and open indodic for the word

#IfWinActive ahk_class ENMainFrame
!r::        ; alt + r
  Click 2   ; double left click, to open IndoDic popup

  ;CoordMode, Mouse, Client
  ;Click 509 129  ; select text color option on toolbar
  ;Click 642 264 ; choose red color

  Send, ^d    ; open Font dialog box
  Send, !c    ; choose color combo box
  Send, !c    ; I was forced to repeat it coz sometimes the previous one
              ; isn't get processed
  Send, r     ; going to choose red
  Send, {enter} ;execute formatting
Return
#IfWinActive
