def es_primo(numero):
    if numero < 2:
        return False
    for i in range(2, int(numero/2)+1):
        if numero % i == 0:
            return False
    return True

numero = int(input("Ingrese un numero: "))

if es_primo(numero):
    print("El numero es primo")
else:
    print("El numero no es primo")