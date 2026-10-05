print("Enter The Cost Price")
Cost_price = float(input())

print("Enter The Selling Price")
selling_price = float(input())

Amt = selling_price - Cost_price

if Amt > 0:
    print("It Occur Profit of Rs", Amt)
else:
    print("It Occur Loss of Rs", Amt)