program factorial;

function factorial(n : integer) : longint;
begin
   if n = 0 then
      factorial := 1
   else
      factorial := n * factorial(n - 1)
end;

var
   i : integer;

begin
   for i := 0 to 16 do
      writeln(i, '! = ', factorial(i));
end.
