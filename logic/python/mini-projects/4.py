name = input("Qual é o seu nome? ")
age = int(input("Quantos anos você tem? "))
favorite_language = input("Qual é a sua linguagem de programação favorita? ")
emoji = input("Qual é o seu emoji favorito? ")

print(
    """
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

👩‍💻 Crachá do Dev

Nome: {name}
Idade: {age}
Linguagem favorita: {favorite_language}
Emoji: {emoji}
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
""".format(
        name=name, age=age, favorite_language=favorite_language, emoji=emoji
    )
)
