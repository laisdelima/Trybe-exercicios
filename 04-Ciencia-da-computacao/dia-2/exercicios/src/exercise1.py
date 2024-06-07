# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.


def nome_escada_invertida(nome):
    for index in range(
        len(nome), 0, -1  # começa no tamanho total do nome e decrementa
    ):
        print(
            nome[:index]
        )  # tipo de slice em py. Pega todos os caracteres desde o início da string até, mas não incluindo, o índice i.


nome = input("Digite seu nome: ").upper()
nome_escada_invertida(nome)
