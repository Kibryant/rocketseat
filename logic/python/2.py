QUESTIONS = [
    ["Seu animal gosta de banana?", "macaco"],
    ["Seu animal late?", "cachorro"],
    ["Seu animal mia?", "gato"],
    ["Seu animal nada?", "peixe"],
]

if __name__ == "__main__":
    for question, animal in QUESTIONS:

        answer = input(f"{question} (s/n) ").strip().lower()

        if answer == "s":
            print(f"Seu animal é um(a) {animal}!")
            break

    if answer != "s":
        print("Animal não identificado.\n")
        animal = input("Qual animal você estava pensando? ")
