# How does Memory Work?

This lecture is based on my notes from the [CS50 Lecture titled "Memory"](https://youtu.be/NKTfNv2T0FE).

# Bits and Bytes

Computers store data in the form of 0's and 1's.

A **0** represents an off condition.

A **1** represents an on condition.

A **Bit** is the smallest unit in memory and can either store the value of a 0 or 1.

A **Byte** contains 8 bits.

Computers read data in binary, which is a base-2 numerical system using only 0's and 1's.

## Binary Math

In the base-10 system that we use everyday, each position represents a different multiplier:
We have a 1's place, a 10's place, a 100's place and so on. Notice that these values are based on a base-10 value.

Example of base-10 system

```
123 = [(10^2) * 1] + [(10^1) * 2] + [(10^0) * 3] = [100 * 1] + [10 * 2] + [1 * 3] = 100 + 20 + 3 = 123
```

Binary Math is calculated exactly the same way, except we use base-2 instead of base-10

```
001 = [(2^2) * 0] + [(2^1) * 0] + [(2^0) * 1] = [4 * 0] + [2 * 0] + [1 * 1] = 0 + 0 + 1 = 1
010 = [(2^2) * 0] + [(2^1) * 1] + [(2^0) * 0] = [4 * 0] + [2 * 1] + [1 * 0] = 0 + 2 + 0 = 2
011 = [(2^2) * 0] + [(2^1) * 1] + [(2^0) * 1] = [4 * 0] + [2 * 1] + [1 * 1] = 0 + 2 + 1 = 3
100 = [(2^2) * 1] + [(2^1) * 0] + [(2^0) * 0] = [4 * 1] + [2 * 0] + [1 * 0] = 4 + 0 + 0 = 4
101 = [(2^2) * 1] + [(2^1) * 0] + [(2^0) * 1] = [4 * 1] + [2 * 0] + [1 * 1] = 4 + 0 + 1 = 5
110 = [(2^2) * 1] + [(2^1) * 1] + [(2^0) * 0] = [4 * 1] + [2 * 1] + [1 * 0] = 4 + 2 + 0 = 6
111 = [(2^2) * 1] + [(2^1) * 1] + [(2^0) * 1] = [4 * 1] + [2 * 1] + [1 * 1] = 4 + 2 + 1 = 7
```

Basically, what you are doing is multiplying `2^index * value of bit at index location` for each binary number and then adding the resulting numbers up. The index is 0 based starting at the right-most number and incrementing by 1 for each value to the left of the right most value.

```
Binary Number: 1 1 0 1
Index:         3 2 1 0
Value of Bit:  1 1 0 1
```

# Hexadecimal

Hexadecimal is a base-16 system which uses 0 through 9 and then the letter A through F.

Hexadecimal is useful as 1 hexadecimal digit is equivalent to 4 binary digits.

0F in Hexadecimal is the same as 1111 in binary which is 15 in base-10 decimal system.

To help distinguish that a value is in hexidecimal, it is customary to put an x after the 1st value in hexadecimal. Ex. 0xF represents 15 in the base-10 system.

Unlike in binary which can only have a value between 0 and 1, hexadecimal can have a value between 0 and 15 for a total of 16 values. Converting between hexadecimal and base-10 is very similar to converting from binary to base-10 except for instead of calculating `2^index * value of bit at index location`, you use `16^index * value at index location`. Keep in mind that "A" represents a value of 10, "B" represents a value of 11, "C" represents a value of 12 and so on until you get to "F" which represents a value of 15.

```
0x0 = 0
0x1 = 1
0x2 = 2
0x3 = 3
0x4 = 4
0x5 = 5
0x6 = 6
0x7 = 7
0x8 = 8
0x9 = 9
0xA = 10
0xB = 11
0xC = 12
0xD = 13
0xE = 14
0xF = 15
1x0 = 16
1x1 = 17
etc.
```

# Memory Addresses

Each location in memory on the computer has a corresponding memory address represented in hexadecimal.

# Resources

- [CS50 2020 - Lecture 4 - Memory](https://youtu.be/NKTfNv2T0FE)
- [CS50's Introduction to Computer Memory Management in C](https://sachin-bhutekar-cs.medium.com/cs50s-introduction-to-computer-memory-management-in-c-6cb2790bbe52)
