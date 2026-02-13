notas = []
suma = 0

for i in range(5):
    notas.append(float(input(f"Ingrese la nota {i+1}: ")))
    suma += notas[i]

promedio = suma / 5

print("Las notas son: ", notas)
print("El promedio es: ", promedio)