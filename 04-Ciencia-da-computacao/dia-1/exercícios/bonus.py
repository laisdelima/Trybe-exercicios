# Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def smaller(list):
    return min(list)


list_numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
result = smaller(list_numbers)
print(f"O menor número da lista é: {result}")


# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base.


def triangle(n):
    if n <= 1:
        print("O valor de 'n' deve ser maior que 1")
        return

    for index in range(1, n + 1):
        print("*" * index)


n = int(input("Digite um número: "))
triangle(n)
