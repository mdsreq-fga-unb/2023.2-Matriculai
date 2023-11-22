| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 22/11/2023 | 1.0 | Definição da Estratégia | Luana Ribeiro |

# Estratégia de Testes MVP 2


<table>
	<tbody>
		<tr>
			<td>Épico</td>
			<td>Capability	</td>
			<td>Feature</td>
			<td>User Story
</td>
			<td>Critérios de aceitação</td>
		</tr>
		<tr>
			<td rowspan="6">[EP03] Gestão de matrículas	</td>
			<td rowspan="4">[CA03] Gestão do estudante com suas matrículas	</td>
			<td rowspan="2">[FE04] Solicitação de matrícula	</td>
			<td>[US07] Eu, como estudante, desejo poder solicitar a matricula em uma trilha, para compor minha grade horária.
</td>
			<td>- Se o aluno não estiver dentro do período letivo do 2º ano, ele não poderá solicitar matrícula na trilha;</br>- Deve ser apresentada uma mensagem de confirmação ou não da solicitação de matrícula.</td>
		</tr>
		<tr>
			<td>[US08] Eu, como estudante, desejo poder solicitar a matricula em disciplinas eletivas disponíveis, para compor minha grade horária.
</td>
			<td>- Caso 1 (aluno do 1° ano):  o aluno poderá escolher 6 matérias eletivas, sendo 1 o Projeto de Vida obrigatoriamente;</br>- Caso 2 (aluno do 2° ano):  o aluno deverá escolher 4 eletivas, sendo 1 o Projeto de Vida obrigatoriamente;</br>- Caso 3 (aluno do 3° ano):  o aluno deverá escolher 4 eletivas sendo 1, o Projeto de Vida obrigatoriamente;</br>- Se o aluno não estiver dentro do caso do período letivo da trilha, ele não poderá solicitar matrícula na eletiva;</br>- Deve ser apresentada uma mensagem de confirmação ou não da solicitação de matrícula;</td>
		</tr>
		<tr>
			<td>[FE05] Visualização de oferta de disciplinas	</td>
			<td>[US09] Eu, como estudante, desejo poder visualizar trilhas e as disciplinas eletivas recomendadas, para me orientar na escolha das disciplinas.
</td>
			<td>Deve ser apresentada uma lista de trilhas contendo as seguintes informações:</br>- Nome da trilha(até 40 caracteres);</br>- Descrição(até 150 caracteres);</br>-  unidade curricular;</br>- Eletivas relacionadas;</br>Deve ser apresentada uma lista de eletivas, em ordem crescente do ano letivo, contendo as seguintes informações:</br>- Mome da eletiva(até 40 caracteres);</br>- Descrição(até 150 caractres);</br>- Ano letivo(1, 2 ou 3);</br>- Professor responsável(nome e sobrenome);</br>- Número de vagas;</br>- Horário da disciplina(formato horas:minutos);</br>- Código da sala de aula.</td>
		</tr>
		<tr>
			<td>[FE06] Visualização do resultado da solicitação de matrícula	</td>
			<td>[US10] Eu, como estudante, desejo poder viualizar o resultado das minhas solicitacoes de matrícula, para saber se fui matriculado ou não.
</td>
			<td>- Deve ser apresentado uma lista com as disciplinas homologadas e não-homologadas, organizadas em uma tabela com os nomes das disciplinas e o status(deferida ou indeferida), organizadas primeiramente por status e depois por ordem alfabética;</td>
		</tr>
		<tr>
			<td rowspan="2">[CA04] Gestão do administrador com as matrículas	</td>
			<td rowspan="2">[FE07] Relatórios de matrículas	</td>
			<td>[US11] Eu, como administrador, desejo ser capaz de definir o período de matrícula, para que os alunos possam se matricular.
</td>
			<td>Deve ser selecionado o período em que a função de matrícula estará disponível para os alunos: </br>- Data de início, no formato DD/MM/AAAA; </br>- Data de fim, no formato DD/MM/AAAA; </br>- Hora de início, no formato (horas:minutos) de 24 horas;</br>- Hora de fim, no formato (horas:minutos) de 24 horas. </td>
		</tr>
		<tr>
			<td>[US12] Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados
</td>
			<td>- Deve ser selecionado a opção da lista: trilha ou eletiva, e a partir disso, selecionar qual trilha ou eletiva deseja-se gerar a lista;</br>- A lista terá o nome da trilha/eletiva. </br>- A lista deve estar organizada por ordem alfabética e deve conter nome e sobrenome do aluno, além do seu número de matrícula.  </td>
		</tr>
		<tr>
			<td>[EP04] Gestão de dados	</td>
			<td>[CA05] Tratamento de dados importados	</td>
			<td>[FE08] Importação de dados	</td>
			<td>[US13] Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema.</td>
			<td>- Os dados devem estar no formato: colunas para ano letivo, nome e matrícula;</br>- O ano letivo deve ser entre 1º e 3º ano;</br>- Nome deve ser nome completo (mínimo 10 caracteres e máximo 50 caracteres);</br>- A matrícula deve ser numérica de até 8 números ;</br>- Os arquivo deve estar formato .csv .- </td>
		</tr>
	</tbody>
</table>