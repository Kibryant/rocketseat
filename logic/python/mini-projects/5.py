def oracle():
    print("=== Oráculo da Sabedoria Python ===")
    print("Me pergunte sobre: python, variáveis, loops, listas ou funções")
    
    tema = input("\nQual sua dúvida sobre programação? ").lower()
    
    match tema:
        case "python":
            print("Python é uma linguagem de programação de alto nível, interpretada e muito versátil!")
        case "variaveis" | "variáveis":
            print("Variáveis são espaços na memória que guardam dados que podemos usar no programa.")
        case "loops":
            print("Loops são estruturas que repetem um bloco de código várias vezes, como for e while.")
        case "listas":
            print("Listas são estruturas que podem guardar vários valores em uma única variável.")
        case "funcoes" | "funções":
            print("Funções são blocos de código reutilizáveis que executam uma tarefa específica.")
        case _:
            print("Desculpe, ainda estou aprendendo sobre esse tema!")

if __name__ == "__main__":
    oracle()