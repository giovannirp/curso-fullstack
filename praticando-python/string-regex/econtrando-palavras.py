import re

texto = input("Digite o título do livro: ")
letra = input("Digite a letra inicial para pesquisa: ")
palavras = re.findall(rf'\b{letra}[a-zà-ÿ]*', texto, re.IGNORECASE)
print(palavras)