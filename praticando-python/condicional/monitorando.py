macas = int(input("Digite a quantidade de maças vendidas: "))
bananas = int(input("Digite a quantidade de bananas: "))

if macas > bananas:
    print("As maças tiveram mais vendas.")
elif bananas > macas:
    print("As bananas tiverem mais vendas.")
else:
    print("As vendas foram iguais.")