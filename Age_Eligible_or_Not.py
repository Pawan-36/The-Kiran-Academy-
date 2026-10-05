print("Enter Age :-")

Age = int(input())

if Age > 0:
    if Age >= 18 and Age < 100:
        print(Age, "Your Age is Eligible for Voting")
    else:
        print(Age, "Your Age is Not Eligible for Voting")
else:
    print(Age, "Please Enter Valid Age")