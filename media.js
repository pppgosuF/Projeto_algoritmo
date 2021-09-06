var nome, nota1, nota2, media;
nome = prompt("Digite o nome do Aluno:")
nota1 = prompt("Digite Nota 01 do aluno:")
nota2 = prompt("Digite Nota 02 do aluno:")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >=50)
    alert("Aluno aprovado " + nome)
else 
    alert("Aluno reprovado " + nome)
