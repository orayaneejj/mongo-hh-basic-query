db.pizzaOrder.updateMany(
    {"customer_name": "Jack"},
    {$set:{isAdmin:false}}
)

db.pizzaOrder.updateMany(
    {},
    {$set:{ "country": "Thailand"}},
)