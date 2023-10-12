[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11860112&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

In the base cases where we have 3 or less elements, we add all of them together which takes a constant time to do. Otherwise, the runtime would be $3T(\frac{n}{3})$ since we recursively sum up each third of the array, $T(\frac{n}{3})$, 3 times, then add them all together at the end which takes another constant time. 

As a recurrence relation, this would look like: 
$T(n) = 1$ for $n \leq 3$   and 
$T(n) = 3T(\frac{n}{3})$ for $n > 3$ 

To solve the recurrence relation, we see that 
$T(n) = 3T(\frac{n}{3})$ 

And putting T(n) back in, we get 
$T(n) = 3(3T(\frac{n}{9}))
      = 9T(\frac{n}{9})$

Doing that again
$T(n) = 9(3T(\frac{n}{27}))
      = 27T(\frac{n}{27})$

We see a pattern emerge, being 
$T(n) = 3^{i}T(\frac{n}{3^{i}})$, where $i > 0$ 

So if we choose $i = log_{3}(n), T(n) = 3^{log_{3}(n)} \cdot T(\frac{n}{3^{log_{3}(n)}}) = n \cdot T(\frac{n}{n}) = n \cdot T(1) = n \in \Theta(n)$