db.pizzaOrders.find(
    {$and:[
        {quanity:{$lte:5}},
        {credit_card_type: "mastercard"}
    ]}
)

db.pizzaOrders.find(
    {
        size:'small',
        $and:[
            {quanity:{$gte:1}},
            {quanity:{$lte:5}}
    ]}
)

db.pizzaOrders.find(
    {
        quanity:{$gte:10},
        credit_card_type:null
    }
)