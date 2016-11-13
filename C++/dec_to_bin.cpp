#include <iostream>
#include <sstream>

using namespace std;

string dec_to_bin(int);

int main()
{
   int dec;
   string bin;

   cout << "Decimal to Binary Converter" << endl;
   cout << "Decimal: ";
   cin >> dec;

   bin = dec_to_bin(dec);
   cout << "Binary : " << bin << endl;

   // Don't know why the getline() doesn't work
   cout << endl;
   cout << "Press enter to exit.";
   getline(cin, bin);

   return 0;
}

string dec_to_bin(int dec)
{
   if (dec <= 0)
   {
      return "0";
   }
   else
   {
      ostringstream strstream;
      while (dec > 0)
      {
         strstream << (dec % 2);
         dec /= 2;
      }

      string str = strstream.str();          // convert to string
      string bin(str.rbegin(), str.rend());  // reverse string, assign it to bin

      return bin;
   }
}
