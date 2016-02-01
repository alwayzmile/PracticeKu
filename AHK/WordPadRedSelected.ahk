; select a word, color the word to red, and open indodic for the word

#IfWinActive ahk_class WordPadClass
^LButton::  ; ctrl + left click
  Click 2   ; double left click

  Send, !h  ; click home tab
  Send, c2  ; choose color option
  Send, {down}{left}    ; choose red color
  Send, {enter}         ; color it
Return
#IfWinActive
