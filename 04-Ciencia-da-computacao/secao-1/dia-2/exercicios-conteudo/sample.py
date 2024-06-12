# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical.
NAME = input("Insira seu nome: ")

for letter in NAME:
    print(letter)

# Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.
# Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.

values = input("Digite os valores separados por espaço: ")
numbers = values.split()
print(numbers)
sum = 0
for num in numbers:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores é: {sum}")
