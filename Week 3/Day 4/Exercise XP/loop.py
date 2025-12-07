#Exercise 1: Favorite Numbers

'''
my_fav_numbers = {2,4,14}
my_fav_numbers.add(6)
my_fav_numbers.add(8)
my_fav_numbers.remove(6)
my_fav_numbers.remove(8)
print(my_fav_numbers)

friend_fav_numbers = {10,20,30}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


#Exercise 2: Tuple

my_tuple = (1,2,3,4,5)


#Exercise 3: List Manipulation

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
basket.clear()
print(basket)

#Exercise 4: Floats
list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
my_list = []
i = 0
while i <= 5:
    my_list.append(i)
    i += 0.5
print(my_list)

#Exercise 5: For Loop
for i in range (1, 21):
   print(i) 

for index in range

#Exercise 6: While Loop
username = input("Please enter your name ")
if username.isdigit() or len(username) < 3:
    print(input("Please enter your name"))
else: 
    print("Thank you")


#Exercise 7: Favorite Fruits
favouriteFruits = input("Please enter your favourite fruits: ")
userFruits = input("Please enter any fruit: ")

if userFruits in favouriteFruits:
    print ("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


#Exercise 8: Pizza Toppings
allToppings = []
toppingPrice = 2.50


while True:
    pizzaTopping = input("Please enter your topping: ")
    if pizzaTopping == 'quit':
        break
    else:
       allToppings.append(pizzaTopping)
       print(f"Adding {pizzaTopping} to your pizza") 

print(allToppings)
print(len(allToppings))
print((2.50 * len(allToppings) + 10))

'''

#Exercise 9: Cinemax Tickets
totalTicketCost = 0
while True:
   personAge = int(input("How old are you? "))
 
   if personAge ==  0:
        break
   elif personAge < 3:
        print("Free ticket!")
   elif personAge >= 3 and personAge <= 12:
        totalTicketCost += 10
   else:
        totalTicketCost += 15

print(f"The total cost is {totalTicketCost}")

    


