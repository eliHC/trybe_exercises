# 🚀 Exercício 1: Crie uma função que
# receba dois números e retorne o maior deles.


def get_biggest_num(a, b):
    if a > b:
        return a
    else:
        return b


print("EX: 1 >> ", get_biggest_num(44, 42))


# ------------------------------------------------------------------------------
# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def get_average(numbers):
    return sum(numbers) / len(numbers)


print("EX: 2 >> ", get_average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

# ------------------------------------------------------------------------------
# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
#  Por exemplo:
# n = 5
# *****
# *****
# *****
# *****
# *****
#
# 🦜 Dica: Python sabe multiplicar sequências! Por exemplo,
# 3 * 'bla' resulta em blablabla. Isso se aplica a listas também,
#  caso você precise.
# Sentiu aí um certo dejavu? 😁


def print_square(n):
    for i in range(n):
        print("*" * n)


print_square(3)


# ------------------------------------------------------------------------------
# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o
#  nome com a maior quantidade de caracteres. Por exemplo,
#  para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
#  o retorno deve ser "Fernanda".
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.


# def get_biggest_name(name_list):
#     biggest_name = ""

#     for name in name_list:
#         if len(biggest_name) < len(name):
#             biggest_name = name

#     print(name_list)
#     return biggest_name

# OR:


def get_biggest_name(name_list):
    def length_finder(e):
        return len(e)

    name_list.sort(reverse=True, key=length_finder)

    return name_list[0]


print(
    "EX: 4 >> ",
    get_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]),
)


# ------------------------------------------------------------------------------
# Exercício 5: Considere que a cobertura da tinta é de 1 litro
#  para cada 3 metros quadrados e que a tinta é vendida em
#  latas de 18 litros, que custam R$ 80,00.
#  Crie uma função que retorne dois valores
# em uma tupla contendo a quantidade de latas de tinta a
#  serem compradas e o preço total a partir do tamanho de uma parede(em m²).


METERS_BY_LITER = 3
CAN_TOTAL_LITERS = 18
CAN_TOTAL_PRICE = 80.00


def calc_amount_cans(wall_square_meters):
    liters_needed = wall_square_meters / METERS_BY_LITER
    cans_needed = liters_needed / CAN_TOTAL_LITERS
    total_price = cans_needed * CAN_TOTAL_PRICE

    return (cans_needed, total_price)


print("EX: 5 >> ", calc_amount_cans(887))


# Exercício 6: Crie uma função que receba os três lado de um triângulo
#  e informe qual o tipo de triângulo formado ou "não é triangulo",
#  caso não seja possível formar um triângulo.
# 🦜 Dica:
#
#   Três lados formam um triângulo quando a soma de quaisquer dois
#    lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.


def calc_triangle(side_a, side_b, side_c):
    if (
        side_a + side_b > side_c
        and side_a + side_c > side_b
        and side_b + side_c > side_a
    ):
        if side_a == side_b == side_c:
            return "Equilátero"
        elif side_a == side_b or side_a == side_c or side_b == side_c:
            return "Isósceles"
        else:
            return "Escaleno"
    else:
        return "Não é triângulo"


print('EX: 6 >> ', calc_triangle(3, 4, 5))
