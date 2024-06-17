# 1) Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4


def max_time_stable(valores_coletados):  # tempo de execução: O(n) | espaço: O(1)
    max_len = 0
    cur_len = 0

    for value in valores_coletados:
        if value == 1:
            cur_len += 1
        else:
            if cur_len > max_len:
                max_len = cur_len
            cur_len = 0

    if cur_len > max_len:
        max_len = cur_len

    return max_len


print(max_time_stable(valores_coletados))


# 2) Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def shuffle_cards(cards, cards_per_part):  # tempo de execução: O(n) | espaço: O(n)
    c = len(cards)
    mid = c // 2

    part_one = cards[:mid]
    part_two = cards[mid:]

    result = []

    # itera sobre o maior comprimento entre part_one e part_two
    for i in range(max(len(part_one), len(part_two))):
        # range(max(3, 3)) -> range(3)
        # i = 0
        if i < len(part_one):  # part_one: [1, 4, 4]
            # i < 3 -> True -> result.append(part_one[0]) -> [1]
            result.append(part_one[i])
        if i < len(part_two):  # part_two: [7, 6, 6]
            # i < 0 -> True -> result.append(part_two[0]) -> [7]
            result.append(part_two[i])

    return result  # [1, 7, ...]


cards = [1, 4, 4, 7, 6, 6]
cards_per_part = 3
print(shuffle_cards(cards, cards_per_part))
