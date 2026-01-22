'''
#Exercise 1
def display_message():
    print("What are you learning in this course?")

display_message()

# Exercise 2: What’s your favorite book ?
def favourite_book(title):
    print(f"One of my favorite books is {title}")

favourite_book("Alice in Wonderland")

# Exercise 3 : Some Geography
def describe_city(city, country = "Iceland"):
    print(f"{city} is in {country}")

describe_city("Reykjavik")

#Exercise 4 : Random
import random
def compare_number(number):
    random_integer = random.randint(1, 100)
    print(random_integer)

    if number == random_integer:
        print("SUCESSFUL!!!!!!!!!")
    else: 
        print("Try again")
compare_number(2)

#Exercise 6: Magicians:
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

#Exercise 5 : Let’s create some personalized shirts !

def make_shirt(size, message = "I love Python"):
    print(f"The size of the shirt is {size} and the text is {message}")

make_shirt("large")
make_shirt("medium")
make_shirt("small", "Bye Bye")
'''

#Exercise 6 : Magicians …
def show_magicians(names):
    for name in names:
        print(f"The magician name is: {name}")
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"
make_great(magician_names)
show_magicians(magician_names)





