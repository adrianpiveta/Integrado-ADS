#Comentário

nome = input("Digite seu nome: ")

print("Bem vindo " + nome)

idade = input("Digite sua idade: ")
print("Tu tem "+idade + " anos")


def mostrarNome():
    nome = input("Digite nome: ")
    print("Nome: " + nome)

mostrarNome()


def mostrarNome(nome):
    print("Nome: "+ nome)

mostrarNome("Ferdinando")