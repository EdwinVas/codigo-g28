nombre = "Edwin"
edad = input("Ingrese su edad: ")

# cuando una variable es conformada por mas de una palabra usamos "_"
es_mayor_edad = True | False
# esMayorEdad = True

saldo = 14.52

"""
pueden colocar un comentario super largo.
para ejecutar el archivo usamos el comando python init.py
"""

print("---- Mensaje ----")
print(nombre)
print(edad)
print(es_mayor_edad)
print(saldo)


print("======= Arreglos =======")

frutas = ["manzana", "pera", "fresa", "pera"]
mixto = [1, 19.4, True, "hola", [1, 2]]

print(frutas)
print(mixto[2])
print(frutas[-1])  # ultimo elemento del arreglo
print(frutas[-2])

frutas.append("uva")
frutas.insert(2, "kiwi")
frutas.insert(10, "arandanos")
frutas.remove("pera")

print(frutas)


print("======= Funciones =======")

def saludar():
    print("Hola mundo!!")

saludar()


def saludar_persona(nombre):
    print(f"Hola, {nombre}!!")

saludar_persona("Juan")

def sumar(n1, n2):
    return n1 + n2

print(sumar(1, 10))