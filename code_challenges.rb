# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# ----- Problem Solving -----
# Create a method called even_or_odd with a parameter num
# Use an if statement with the modulo trick to determine if it returns a remainder of 0. If it does, its even. If not, its odd.
# Print out the expected output

# ----- Syntax -----
def even_or_odd(num) # creating the method
    if num % 2 == 0
      p "#{num} is even"
    else
      p "#{num} is odd"
    end
end

evenOrOdd(num1)
evenOrOdd(num2)
evenOrOdd(num3)
# Success! These all give the expected output.
# Side note to myself - If it's a 'determine even/odd' question, that means use modulo operator.

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# ----- Problem Solving -----
# Create a method called no_vowels with the parameter str
# Use the .delete method to remove the vowels from str
# Print out the expected output

# ----- Syntax -----
def no_vowels(str)
    p str.delete "aeiouAEIOU" # Using uppercase and lowercase because .delete is apparently case dependent.
end

no_vowels(album1)
no_vowels(album2)
no_vowels(album3)
# Success! These all give the expected output.


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# ----- Problem Solving -----
# Create a method called palindrome with str as a parameter
# Use an if statement to check if str is the same forwards and backwards. 
# It's case sensitive so LEARN will not be the same as learn. Therefor I'll need add .downcase to change the parameter to all lowercase letters, which will allow an accurate result.
# profit!

# ----- Syntax -----
def palindrome(str)
    if str.downcase == str.downcase.reverse
        p "#{str} is a palindrome"
    else
        p "#{str} is not a palindrome"
    end
end

palindrome(is_palindrome1)
palindrome(is_palindrome2)
palindrome(is_palindrome3)

# Success! These all give the expected output.