#operações matematicas
import os
os.system("cls")

def calc_parcela():
    total = 1500
    parcelas = 12
    parcela = total/parcelas
    print("Parcela média é: ", parcela)

calc_parcela()

def mediaanual():
    nome = input("Digite seu nome: ")
    media=0
    for x in range(1,3):
        nota = input("Digite nota " + str(x) + ": ")
        media += int(nota)/2
    print("Média de {0} é {1:.2f}".format(nome, media))
    print("---------------------------------")

mediaanual()
