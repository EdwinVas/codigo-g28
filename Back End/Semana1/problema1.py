numero1 = float(input("Ingrese el primer numero: "))
numero2 = float(input("Ingrese el segundo numero: "))

suma = numero1 + numero2
resta = numero1 - numero2
multiplicacion = numero1 * numero2

print("La suma es: ", suma)
print("La resta es: ", resta)
print("La multiplicacion es: ", multiplicacion)

if numero2 != 0:
    division = numero1 / numero2
    print("La division es: ", division)
else:
    print("No se puede dividir entre 0")