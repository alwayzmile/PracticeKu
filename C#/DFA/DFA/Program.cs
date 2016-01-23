using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace DFA
{
    class Program
    {
        static void Main(string[] args)
        {
            string trans = File.ReadAllText(@"dfa.txt");
            string inputs;
            int nState;
            int curState = 0;

            char[,] array = new char[100, 100];
            nState = 0;
            foreach (var row in trans.Split('\n'))
            {
                int j = 0;
                foreach (var col in row.Trim().Split(' '))
                {
                    array[nState, j] = col[0];
                    Console.Write(col[0] + " ");
                    j++;
                }
                nState++;
                Console.WriteLine();
            }
            //Console.WriteLine(array[0]);

            Console.Write("Input: ");
            inputs = Console.ReadLine();

            Console.WriteLine(inputs);
            char input;
            for (int i = 0; i < inputs.Length; i++)
            {
                input = inputs[i];
                if (input == 'a')
                    curState = (int)Char.GetNumericValue(array[curState, 0]);
                else
                    curState = (int)Char.GetNumericValue(array[curState, 1]);

                Console.WriteLine(curState);
            }

            if (curState == nState-1)
                Console.WriteLine("Accepted");
            else
                Console.WriteLine("Rejected");

            Console.WriteLine("Press any key to exit");
            System.Console.ReadKey();
        }
    }
}
