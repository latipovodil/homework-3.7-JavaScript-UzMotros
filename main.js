
model = prompt("Siz qanaqa mashina olmoqchisiz")
color = prompt("Rangini kiriting")
motorCondition = prompt("motor qanaqa bo'lsin oddiy/turbo")
alert("Radio qo'ymaymiz shuni bilasizmi(UzMotors)")




let car = {
  model: "Model: " + model,
  color: "Rangi: " + color,
  condition: "Motor: " + motorCondition,
}

document.write(car.model + "<br>" + car.color + "<br>" + car.condition)


