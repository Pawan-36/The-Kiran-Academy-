print("Enter first string:")
str1 = input()

print("Enter second string:")
str2 = input()

# Convert strings into lowercase
str1 = str1.lower()
str2 = str2.lower()

# First check length
if len(str1) != len(str2):
    print("Not Anagram")
else:

    # Sort both strings
    arr1 = sorted(str1)
    arr2 = sorted(str2)

    # Compare both
    if arr1 == arr2:
        print("Anagram")
    else:
        print("Not Anagram")