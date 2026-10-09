equipe_a = {"planejar reunião", "revisar documento", "testar sistema"}

equepe_b = {"testar sistema", "implementar funcionalidade", "corrigir bug"}

tarefas_combinadas = equipe_a.union(equepe_b)

tarefa_remover = input("Tarefa a ser removida: ").lower()

if tarefa_remover in tarefas_combinadas:

    tarefas_combinadas.remove(tarefa_remover)

print(f"Tarefa finais: {tarefas_combinadas}")