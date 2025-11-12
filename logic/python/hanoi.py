def mover_discos(num_discos, origem, destino, auxiliar):
    print(f"Chamando mover_discos({num_discos}, {origem}, {destino}, {auxiliar})")

    if num_discos == 1:
        print(f"CASO BASE: Mover disco 1 da {origem} para {destino}")
    else:
        mover_discos(num_discos - 1, origem, auxiliar, destino)
        print(f"CASO RECURSIVO: Mover disco {num_discos} da {origem} para {destino}")
        mover_discos(num_discos - 1, auxiliar, destino, origem)


mover_discos(3, "Torre 1", "Torre 3", "Torre 2")
