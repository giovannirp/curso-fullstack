permissoes_principais = set(p.strip() for p in input("Permisões Principais: ").lower().split())

permissoes_solicitadas = set(p.strip() for p in input("Permissões solicitadas: ").lower().split(','))

eh_subconjunto = permissoes_solicitadas.issubset(permissoes_principais)

if eh_subconjunto:
    print("As permissões solicitadas fazem parte das permissões principais.")
else:
    print("As permisões solicitadas fazem parte das permisões principais. ")