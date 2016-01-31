^j::
   Send, My First Script
Return


::ftw::Free the Whales


esc::
	MsgBox Escape!!!
Return


::btw::
	MsgBox You typed "btw"
Return


^k::
	MsgBox Wow!
	MsgBox this is
	Run, Notepad.exe
	WinActivate, Untitled - Notepad
	WinWaitActive, Untitled - Notepad
	Send, 7 lines{!}{enter}
	SendInput, inside the ctrl{+}k hotkey
Return