def contar_vocales(texto):
    contador = 0
    for letra in texto:
        if letra in "aeiouAEIOU":
            contador += 1
    return contador

print("El numero de vocales es: ", contar_vocales(input("Ingrese un texto: ")))