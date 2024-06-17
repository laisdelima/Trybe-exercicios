import random


def embaralhar_palavra(word):
    return "".join(random.sample(word, len(word)))


def escolher_palavra(lista_palavras):
    return random.choice(lista_palavras)


def jogar_jogo():
    lista_palavras = ["python", "javascript", "computador", "programacao", "trybe"]
    palavra = escolher_palavra(lista_palavras)  # escolhe palavra na lista
    palavra_embaralhada = embaralhar_palavra(palavra)  # embaralha palavra escolhida
    tentativas = 3

    print("Bem-vindo ao Jogo da Palavra Embaralhada!")
    print("Você deve adivinhar a palavra a partir das letras embaralhadas.")
    print("Você tem 3 tentativas.")

    while tentativas > 0:
        print("\nPalavra embaralhada:", palavra_embaralhada)
        tentativa = input("Sua tentativa: ").lower()

        if tentativa == palavra:
            print("Parabéns! Você acertou a palavra!")
            return
        else:
            print("Ops! Palavra incorreta.")
            tentativas -= 1  # decrementa tentativas de 1 em 1
            if tentativas > 0:  # enquanto houver tentativa
                print("Tente novamente. Você tem", tentativas, "tentativas restantes.")

    print("\nVocê perdeu! A palavra correta era:", palavra)


# Inicia o jogo
jogar_jogo()
