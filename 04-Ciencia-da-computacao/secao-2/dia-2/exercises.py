# 1 - Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).


def count_even_numbers(n):
    count = 0
    for number in range(
        1, n + 1
    ):  # começa no 1 e vai até 10 (11 não conta, stop é exclusivo)
        if number % 2 == 0 and number != 0:
            count += 1
            print(number)
    return count


print(count_even_numbers(10))
print("---------")


# 2 - Transforme o algoritmo criado acima em recursivo.


def count_even_numbers(n):
    if n == 1:  # condição base
        return 0
    elif n % 2 == 0:
        return 1 + count_even_numbers(n - 1)  # 1 + está fazendo a função de um counter
    else:
        return count_even_numbers(n - 1)


print(count_even_numbers(10))
print("---------")

# 3 - Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def find_largest_number(n):
    if len(n) == 1:  # condição base
        return n[0]
    else:
        if n[0] > n[1]:
            n.pop(1)
        else:
            n.pop(0)
        return find_largest_number(n)


print(find_largest_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print("---------")

# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


mdc(2, 4)
print(mdc(2, 4))


# def mdc(a, b):
#     inteiro = 2
#     aux = 1
#     if a != 1 and b != 1:
#         if a % inteiro == 0 and b % inteiro == 0:
#             a = a / inteiro
#             b = b / inteiro
#             aux = aux * inteiro
#         else:
#             inteiro += 1
#     else:
#         return aux


# print(mdc(1, 10))
