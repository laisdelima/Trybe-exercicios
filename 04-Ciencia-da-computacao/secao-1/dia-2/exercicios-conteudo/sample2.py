# with open("arquivo.txt", "w") as file:
#     file.write("Miguel 33\n")
#     print(
#         "Túlio 22", file=file
#     )  # a saída do print deve ser redirecionada para o arquivo aberto e não exibida no console

# with open("arquivo.txt", "w") as file:
#     LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
#     file.writelines(LINES)

# with open("arquivo.txt", "r") as file:
#     for line in file:
#         print(line)

recovery_students = []  # lista de alunos em recuperação
with open("file.txt", "r") as grades_file:
    for line in grades_file:
        student_grade = line  # student_grade é a linha atual do arquivo
        student_grade = student_grade.split(
            " "
        )  # lista onde 1º elemento é o nome e 2º a nota
        if int(student_grade[1]) < 6:  # posição 1 é a nota do aluno
            recovery_students.append(
                student_grade[0] + "\n"
            )  # se if for True, nome do aluno (posição 0) vai pra lista


with open("recoveryStudentsFile.txt", mode="w") as recovery_students_file:
    print(recovery_students)
    recovery_students_file.writelines(recovery_students)
