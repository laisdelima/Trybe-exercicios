def countdown(n):
    while (
        n > 0
    ):  # iteração usa repetição na forma de comandos de repetição, como for e while
        print(n)
        n = n - 1
    print("FIM")


countdown(10)


# usando recursividade (a recursão usa repetição na forma de chamadas repetidas da mesma rotina)
# caso base: quando a função deve parar
# caso recursivo: quando a função deve chamar a si mesma


def countdown(n):
    iterations = 0
    if n == 11:  # condição de parada (IMPORTANTE)
        print("FIM")
    else:
        print(n)
        countdown(n + 1)
        iterations += 1

    print(f"{iterations} iterações!")


# countdown(0)


def factorial(n):
    if n <= 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo
