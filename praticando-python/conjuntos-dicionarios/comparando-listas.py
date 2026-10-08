laura = set(input("Lista da Laura: ").split(", "))

ana = set(input("Lista da ana: ").split(", "))

comuns = laura.intersection(ana)

exclusivos_laura = laura.difference(ana)

exclusivos_ana = ana.difference(laura)

print(f"Intens em ambas as listas: {', '.join(comuns)}")

print(f"Itens exclusivos de Laura: {', '.join(exclusivos_laura)}")

print(f"Itens exclusivos de Ana: {', '.join(exclusivos_ana)}")