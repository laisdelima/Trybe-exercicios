# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def bigger(first_number, second_number):
    if second_number > first_number:
        return second_number
    return first_number


num_one = 50
num_two = 30


bigger(num_one, num_two)


# outra maneira:


def bigger_number(num1, num2):
    return max(num1, num2)


num1 = 10
num2 = 35
result = bigger_number(num1, num2)

print(f"O maior número é: {result}")

# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def average(list):
    if len(list) == 0:
        return 0
    summ = sum(list)
    average_calc = summ / len(list)
    return average_calc


list_values = [10, 20, 30, 40]
total = average(list_values)
total_int = int(total)  # ou round(total)
print(f"A média aritmética dos valores é: {total_int}")


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def square(n):
    for row in range(n):
        print(n * "*")


n = int(input("Digite um número: "))
square(n)


# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


def biggest_char(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
biggest_name = biggest_char(list)
print(f"O maior nome na lista é: {biggest_name}")
