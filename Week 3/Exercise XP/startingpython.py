
#Exercise 1: Hello World
print("Hello world\n" * 4)

#Exercise 2: Some Math
print((99**3) * 8)

#Exercise 3: What is the output?
5 < 3 #False
3 == 3 #True
3 == "3" #False
"3" > 3 #TypeError: '>' not supported between instances of 'str' and 'int'
"Hello" == "hello" #False


#Exercise 4: Your computer brand
computer_brand = "acer"
print("I have an " + computer_brand + " computer.")


# Exercise 5: Your information
name = "Yajnee"
age = 25
shoe_size = 37
info = "Hello I am " + name + ".  I am " + str(age) + " years old.My shoe size is " + str(shoe_size)
print(info)

#Exercise 6: A & B
a = 20
b = 10
if a > b:
    print("Hello World")

#Exercise 7: Odd or Even
userNumber = float(input("Please enter a number"))

if userNumber%2 == 0 :
    print("This is an even number")
else:
    print("This is an odd number")


#Exercise 8: What’s your name?
userName = input("What is your name")
if userName != "Yajnee" :
    print("Wrong Name")
else:
    print("Correct name")


#Exercise 9: Tall enough to ride a roller coaster
userHeight = float(input("Enter your heigh cm"))
if userHeight > 145:
   print("You are tall enough to ride")
else:
   print("You need to grow some more to ride")
