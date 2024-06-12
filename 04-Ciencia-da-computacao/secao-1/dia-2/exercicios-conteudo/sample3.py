import json

# with open("pokemons.json", "r") as file:
#     content = file.read()
#     pokemons = json.loads(content)[  # loads carrega a partir de um texto
#         "results"
#     ]  # transforma o conteúdo do arquivo em um dicionário


with open("pokemons.json") as file:  # leitura de arquivo
    pokemons = json.load(file)["results"]  # load carrega a partir de um arquivo

# separa somente os do tipo grama
grass_type_pokemons = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type_pokemons.append(pokemon)

# abre arquivo para escrever os do tipo grama
with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(grass_type_pokemons)  # converte py pra json
    file.write(json_to_write)
    # ou escreve no arquivo já transformando em json
    # json.dump(grass_type_pokemons, file)


# print(pokemons[0])
