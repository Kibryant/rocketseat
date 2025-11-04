def print_board(board):
    for row in board:
        print(" ".join(row))
    print()


def create_board():
    return [[" " for _ in range(3)] for _ in range(3)]


def main():
    # Initialize board and set treasure location
    board = create_board()
    treasure_row = 1  # Fixed position for treasure
    treasure_col = 2

    print("🚀 Bem-vindo à Caça ao Tesouro Espacial! 🚀")
    print("Encontre o tesouro (💎) em 5 tentativas!")

    for attempt in range(5):
        print(f"\nTentativa {attempt + 1}/5:")
        print_board(board)

        try:
            row = int(input("Digite a linha (0-2): "))
            col = int(input("Digite a coluna (0-2): "))

            # Check if position is valid
            if row < 0 or row > 2 or col < 0 or col > 2:
                print("❌ Posição inválida! Use números entre 0 e 2.")
                continue

            # Check if position was already tried
            if board[row][col] != " ":
                print("❌ Você já tentou essa posição!")
                continue

            # Check if treasure was found
            if row == treasure_row and col == treasure_col:
                board[row][col] = "💎"
                print_board(board)
                print("🎉 Parabéns! Você encontrou o tesouro!")
                return
            else:
                board[row][col] = "X"
                print("❌ Não há tesouro aqui! Tente novamente!")

        except ValueError:
            print("❌ Por favor, digite apenas números!")
            continue

    # Game over - reveal treasure
    print("\n😢 Suas tentativas acabaram!")
    board[treasure_row][treasure_col] = "💎"
    print("O tesouro estava aqui:")
    print_board(board)


if __name__ == "__main__":
    main()
