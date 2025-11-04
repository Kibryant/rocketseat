questions = [
    ["Qual é a capital do Brasil?", "brasilia"],
    ["Quanto é 2 + 2?", "4"],
    ["Qual é a cor do céu em um dia claro?", "azul"],
    ["Em que ano o Brasil foi descoberto?", "1500"],
    ["Qual é o maior planeta do sistema solar?", "jupiter"],
]


def play_quiz():
    print("Bem-vindo ao Quiz!")
    print("Responda as perguntas abaixo:\n")

    acertos = 0

    # Loop through questions
    for pergunta, resposta_correta in questions:
        # Show question and get answer
        resposta_usuario = input(f"{pergunta}\nSua resposta: ").lower()

        # Check if answer is correct
        if resposta_usuario == resposta_correta:
            print("Correto! ✅")
            acertos += 1
        else:
            print(f"Incorreto! ❌ A resposta correta era: {resposta_correta}")
        print()  # Empty line for better readability

    # Show final score
    print(f"Quiz finalizado!\nVocê acertou {acertos} de {len(questions)} perguntas!")
    porcentagem = (acertos / len(questions)) * 100
    print(f"Porcentagem de acertos: {porcentagem}%")


# Start the game
play_quiz()
