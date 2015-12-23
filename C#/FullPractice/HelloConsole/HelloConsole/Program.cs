using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloConsole
{
    class Program
    {
        static void Main(String[] args)
        {
            string message1 = "Hello C#!";
            Console.WriteLine(message1);

            String message2 = "Hello C# again!";
            Console.WriteLine(message2);

            //////////////////////////////////////////////////// NUMERIC
            int i = new Int32();
            i = 8/9;
            Console.WriteLine("Integer value: " + i);

            double j = Math.Pow(2, 32) - 1;
            Console.WriteLine("Double value: " + j);

            // doing this directly wouldn't be allowed
            // int k = 2147483648
            // but the following lines followed by increment is allowed
            int k = 2147483647;
            Console.WriteLine("Integer before exceeded value: " + k);

            // would be back to the lowest possible values represented in Int32
            k++;
            Console.WriteLine("Integer exceeded value: " + k);

            //////////////////////////////////////////////////// IMPLICIT
            var l = 123;
            Console.WriteLine("Implicit variable: " + l);
            Console.WriteLine("Implicit variable type: " + l.GetType());
            Console.WriteLine("Implicit variable type code: " + l.GetTypeCode() + "\n");
            Console.WriteLine("After testing \\n");

            // but the following, of course, are not allowed
            // l variable already hold integer values
            // l = "Test";
            // Console.WriteLine("Implicit variable (new): " + l);

            //////////////////////////////////////////////////// CHARACTER
            char m = (char)97;
            Console.WriteLine("A character: " + m);

            // represented in hex
            // 6*16^1 + 1*16^0 = 97
            m = '\u0061';
            Console.WriteLine("The same character: " + m);

            // the following is not allowed, use 'c'
            // m = "c";
            // Console.WriteLine("Char with double quote: " + m);

            //////////////////////////////////////////////////// STRING
            char[] n = { 'h', 'e', 'l', 'l', 'o' };
            Console.WriteLine("Array of char: " + n);

            string o = new String(n);
            string p = o;

            Console.WriteLine("String o: " + o);
            Console.WriteLine("String p: " + p);
            Console.WriteLine("Uppercased string: " + o.ToUpper());
            Console.WriteLine("Comparing string o == \"hello\": " + (o == "hello"));
            Console.WriteLine("Comparing p == o: " + (p == o));
            Console.WriteLine("Comparing reference p == o: " + (Object.ReferenceEquals(p, o)));
            p += ", world!";
            Console.WriteLine("String o: " + o);
            Console.WriteLine("String p: " + p);
            Console.WriteLine("Comparing p == o after changes: " + (p == o));
            Console.WriteLine("Comparing reference p == o after changes: " + (Object.ReferenceEquals(p, o)));

            // doesn't work this way
            // o = n.ToString();
            // Console.WriteLine(o);

            //////////////////////////////////////////////////// STRING BUILDER
            StringBuilder q = new StringBuilder();
            StringBuilder r = q;
            q.Append("hello");

            // it is better to call it manually to make it clear that it is an object
            // like this q.ToString()
            // but since it works, it's okay
            Console.WriteLine("Write string builder q: " + q);
            Console.WriteLine("Write string builder r: " + r);

            q.Append(", ")
             .Append("world!");
            Console.WriteLine("StringBuilder r even though q is the one being changed: " + r);
            Console.WriteLine("Comparing reference q == r after changes: " + (Object.ReferenceEquals(q, r)));

            // there is only one object, but now I can't do comparison like this anymore
            // Console.WriteLine("Comparing string r == \"hello, world!\": " + (r == "hello, world!"));
            // it has to be like this
            Console.WriteLine("Comparing string r == \"hello, world!\": " + (r.ToString() == "hello, world!"));

            //////////////////////////////////////////////////// BOOLEAN
            // we can't do just "bool s;" if we want to check its default value
            bool s = new Boolean();
            Console.WriteLine("Default bool value: " + s);
            // we can't do these to make it true
            // s = 1;
            // s = True;
            s = true;
            Console.WriteLine("Boolean value: " + s);

            //////////////////////////////////////////////////// UNIQUE PARAMETERS
            int t = getNullableInt() ?? 200;
            Console.WriteLine("Null-coallescing t: " + t);
            t = getNullableInt() ?? default(int);
            Console.WriteLine("Null-coallescing, (use default) t: " + t);
            Console.WriteLine("Use \"is\" to compare variable type: " + (t is int));
            String v = "hello";
            Console.WriteLine("Compare string non case sensitive: " + v.Equals("HELLO", StringComparison.OrdinalIgnoreCase));

            //////////////////////////////////////////////////// DATE AND TIME
            DateTime d = new DateTime(2016, 4, 24);
            Console.WriteLine("My next birthday: " + d);
            Console.WriteLine("My next birthday: " + d.ToString("d MMMM yyyy"));
            DateTime now = DateTime.Now;
            Console.WriteLine("Now is " + now.ToString("d MMMM yyyy, H:m:s "));
            Console.WriteLine("Next 20 day is " + now.AddDays(20).ToString("d MMMM yyyy"));

            //////////////////////////////////////////////////// FOREACH
            string[] a = new String[5];
            a[0] = "Ikhsan";
            a[1] = "Chan";
            a[2] = "Ambar";
            a[3] = "Lintang";
            a[4] = "Aisyah";
            foreach (string child in a) {
                Console.WriteLine(child);
            }

            //////////////////////////////////////////////////// METHOD BY REFERENCE
            int b;
            initializeIntRef(out b);
            Console.WriteLine("The value after initialization: " + b);

            //////////////////////////////////////////////////// ENUM
            Family[] parents = { Family.Sumadi, Family.Dwi };
            Family[] members = { Family.Sumadi, Family.Dwi, Family.Ikhsan, Family.Chan, Family.Ambar, Family.Lintang, Family.Aisyah };
            foreach (Family parent in parents)
            {
                Console.WriteLine(parent);
            }

            Console.WriteLine();
            foreach (Family child in members)
            {
                if (child == Family.Sumadi || child == Family.Dwi)
                    continue;

                Console.WriteLine(child);
            }

            Console.ReadKey();
        }

        static int? getNullableInt()
        {
            return null;
        }

        static void initializeIntRef(out int var) 
        {
            var = 100;
        }

        enum Family { Sumadi, Dwi, Ikhsan, Chan, Ambar, Lintang, Aisyah }
    }
}