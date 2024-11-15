// ใช้ findOne ในการหาข้อมูล Document ของลูกค้าชื่อ Cherlyn
// ใช้ find ในการหาข้อมูล Document ทั้งหมดที่จ่ายเงินด้วย Credit Card ของ mastercard
// ใช้ find ในการหาข้อมูล Document ทั้งหมดที่สั่ง Pizza ขนาด medium โดย Limit จำนวนข้อมูลแค่ 5 Documents
db.pizzaOrders.findOne({customer_name: "Cherlyn"})
db.pizzaOrders.find({credit_card_type: "mastercard"})
db.pizzaOrders.find({size: "medium"}).limit(5)