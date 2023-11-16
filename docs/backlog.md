## Histórico de revisão

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 25/10/2023 | 0.1 | Criando backlog SAFe | Yasmim Rosa |
| 29/10/2023 | 0.2 | Mesclando células das tabelas | Júlia Yoshida |




## Requisitos Funcionais - Backlog SAFe

<table>
	<tbody>
		<tr>
			<td>Épico</td>
			<td>Capability</td>
			<td>Feature</td>
			<td>User Story	</td>
			<td>Objetivo</td>
		</tr>
		<tr>
			<td rowspan="2">[EP01] Gestão de usuários da plataforma	</td>
			<td rowspan="2">[CA01] Gestão de acesso	</td>
			<td rowspan="2">[FE01] Acesso a plataforma	</td>
			<td>[US01] Eu, como usuário, desejo poder inserir minhas credenciais (nome de usuário e senha) para acessar o sistema e utilizar os recursos disponíveis.	</td>
			<td rowspan="2">Promover a eficiência da escola
</td>
		</tr>
		<tr>
			<td>[US02] Eu, como usuário, desejo poder realizar logout do sistema, para garantir a segurança da minha conta e dos meus dados pessoais.
</td>
		</tr>
		<tr>
			<td rowspan="4">[EP02] Gestão de matriz curricular</td>
			<td rowspan="4">[CA02] Gestão de disciplinas	</td>
			<td rowspan="2">[FE02] Gestão de eletivas	</td>
			<td>[US03] Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.	</td>
			<td rowspan="4">Facilitar a escolha de disciplinas
</td>
		</tr>
		<tr>
			<td>[US04] Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.
</td>
		</tr>
		<tr>
			<td rowspan="2">[FE03] Gestão de trilhas	</td>
			<td>[US05] Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.
</td>
		</tr>
		<tr>
			<td>[US06] Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.
</td>
		</tr>
		<tr>
			<td rowspan="6">[EP03] Gestão de matrículas	</td>
			<td rowspan="4">[CA03] Gestão do estudante com suas matrículas	</td>
			<td rowspan="2">[FE04] Solicitação de matrícula	</td>
			<td>[US07] Eu, como estudante, desejo poder solicitar a matrícula em uma trilha, para compor minha grade horária.	</td>
			<td rowspan="6">Apoiar a coordenação escolar
</td>
		</tr>
		<tr>
			<td>[US08] Eu, como estudante, desejo poder solicitar a matrícula em disciplinas eletivas disponíveis, para compor minha grade horária.
</td>
		</tr>
		<tr>
			<td>[FE04] Solicitação de matrícula	</td>
			<td>[US09] Eu, como estudante, desejo poder visualizar trilhas e as disciplinas eletivas recomendadas, para me orientar na escolha das disciplinas.
</td>
		</tr>
		<tr>
			<td>[FE05] Visualização de oferta de disciplinas	</td>
			<td>[US10] Eu, como estudante, desejo poder visualizar o resultado da solicitação de matrícula, para saber se fui matriculado ou não.
</td>
		</tr>
		<tr>
			<td rowspan="2">[CA04] Gestão do administrador com as matrículas	</td>
			<td>[FE06] Visualização do resultado da solicitação de matrícula	</td>
			<td>[US11] Eu, como administrador, desejo ser capaz de definir o período de matrícula, para que os alunos possam se matricular.
</td>
		</tr>
		<tr>
			<td>[FE07] Relatórios de matrículas	</td>
			<td>[US12] Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados
</td>
		</tr>
		<tr>
			<td>[EP04] Gestão de dados	</td>
			<td>[CA05] Tratamento de dados importados	</td>
			<td>[FE08] Importação de dados	</td>
			<td>[US13] Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema.	</td>
			<td>Promover a eficiência da escola</td>
		</tr>
	</tbody>
</table>

## Requisitos Não Funcionais
| Tipo | Descrição |
|------|-------------------------|
|Usabilidade|**[RNF01]** A interface precisa ser verificável quanto à presença de um modo de alto contraste e texto alternativo, com o objetivo de garantir a acessibilidade aprimorada da aplicação.|
|Usabilidade|**[RNF02]** A aplicação deve conter estilização das páginas com cores, fontes e ícones padronizados, de acordo com o os padões de interface definidos.|
|Usabilidade|**[RNF03]** A aplicação precisa demonstrar responsividade, permitindo adaptação da tela em notebook, celular, tablet e monitores de PC .|
|Confiabilidade| **[RNF04]** A aplicação deve garantir que apenas aqueles registrados no sistema tenham acesso a ele. Dessa forma, pessoas não registradas não poderão inserir credenciais aleatórias e conseguir logar.|
|Suportabilidade| **[RNF05]** O sistema deve ser desenvolvido de forma modular, aderindo às melhores práticas de programação como padrão de identação, comentários, nomes de variáveis e funções, etc. com o objetivo de simplificar as operações de manutenção no futuro. Além disso, deve possibilitar a incorporação de novas funcionalidades sem ocasionar impactos adversos em outras áreas do sistema.|
|Implementação| **[RNF06]** A aplicação deve seguir regras para garantir que os dados inseridos no banco de dados estejam corretos e válidos. Isso envolve restrições de tipo de dados, validação de formato, faixas de valores aceitáveis e verificação de integridade referencial.|

## Valoração
Na etapa de valoração utilizamos dois indicadores: complexidade técnica e valor de negócio. Seus graus e significados podem ser vistos nas tabelas a seguir:

|Grau de Complexidade Técnica| Descrição |
|----------------------------|-----------|
|1|Tarefas de execução direta e simples, requerem conhecimentos técnicos básicos.|
|2|Envolve tarefas com um grau ligeiramente maior de complexidade técnica, mas ainda são factíveis sem grandes desafios.|
|3|Exige habilidades técnicas mais avançadas e enfrenta desafios técnicos moderados.|
|4|Implica em tarefas tecnicamente desafiadoras, demandando conhecimentos profundos e especializados.|
|5|Representa tarefas altamente complexas que exigem conhecimentos técnicos excepcionais e são muito difíceis de serem implementadas.|

|Grau de Valor de Negócio| Descrição |
|----------------------------|-----------|
|1|Pouco útil.|
|2|A história oferece um valor mínimo, mas não é essencial. O usuário pode viver sem ela.|
|3|A história traz um valor perceptível para o usuário ou produto, mas não é crítica. É útil, mas existem funcionalidades mais importantes.|
|4|A história fornece um valor significativo ao usuário ou ao produto e é essencial para a funcionalidade ou experiência geral.|
|5|A história é crítica, fundamental e proporciona um valor excepcional ao usuário ou produto. É uma alta prioridade e pode ter um impacto transformador.|

## Valoração dos Épicos
| Épico              | Complexidade Técnica | Valor de Negócio | Média |
|--------------------|------------------|--------------|----------|
| **[EP01]** Gestão de usuários da plataforma |3|4|3,5|
| **[EP02]** Gestão de matriz curricular|4|5|4,5|
| **[EP03]** Gestão de matrículas |4|5|4,5|
| **[EP04]** Gestão de dados |4|4|4|


## Valoração das User Stories
Organização das US por Épicos por ordem de média do VN (valor de negócio) e complexidade técnica.

<table>
	<tbody>
		<tr>
			<td>Épico</td>
			<td>US</td>
			<td>Complexidade Técnica</td>
			<td>Valor de Negócio</td>
			<td>Média</td>
		</tr>
		<tr>
			<td rowspan="4">[EP02] Gestão de matriz curricular</td>
			<td>[US03] Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.</td>
			<td>2</td>
			<td>5</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US04] Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.</td>
			<td>2</td>
			<td>5</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US05] Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.</td>
			<td>3</td>
			<td>5</td>
			<td>4</td>
		</tr>
		<tr>
			<td>[US06] Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.</td>
			<td>2</td>
			<td>5</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td rowspan="6">[EP03] Gestão de matrículas</td>
			<td>[US07] Eu, como estudante, desejo poder solicitar a matricula em uma trilha, para compor minha grade horária.</td>
			<td>3</td>
			<td>5</td>
			<td>4</td>
		</tr>
		<tr>
			<td>[US08] Eu, como estudante, desejo poder solicitar a matricula em disciplinas eletivas disponíveis, para compor minha grade horária.</td>
			<td>3</td>
			<td>5</td>
			<td>4</td>
		</tr>
		<tr>
			<td>[US09] Eu, como estudante, desejo poder visualizar trilhas e as disciplinas eletivas recomendadas, para me orientar na escolha das disciplinas.</td>
			<td>2</td>
			<td>4</td>
			<td>3</td>
		</tr>
		<tr>
			<td>[US10] Eu, como estudante, desejo poder viualizar o resultado das minhas solicitaçoes de matricula, para saber se fui matriculado ou não.</td>
			<td>3</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US11] Eu, como administrador, desejo ser capaz de abrir o período de matrícula, para que os alunos possam se matricular.</td>
			<td>4</td>
			<td>5</td>
			<td>4,5</td>
		</tr>
		<tr>
			<td>[US12] Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados.</td>
			<td>4</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td rowspan="2">[EP01] Gestão de usuários da plataforma</td>
			<td>[US01] Eu, como usuário, desejo poder inserir minhas credenciais (nome de usuário e senha) para acessar o sistema e utilizar os recursos disponíveis.</td>
			<td>3</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US02] Eu, como usuário, desejo poder realizar logout do sistema, para garantir a segurança da minha conta e dos meus dados pessoais.</td>
			<td>3</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[EP04] Gestão de dados</td>
			<td>[US13] Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema.</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
		</tr>
	</tbody>
</table>


# MVPs
## MVP 1
<table>
	<tbody>
		<tr>
			<td>Épico</td>
			<td>Capability</td>
			<td>Feature	</td>
			<td>User Story
</td>
			<td>Critérios de aceitação</td>
		</tr>
		<tr>
			<td rowspan="2">[EP01] Gestão de usuários da plataforma	</td>
			<td rowspan="2">[CA01] Gestão de acesso	</td>
			<td rowspan="2">[FE01] Acesso a plataforma	</td>
			<td>[US01] Eu, como usuário, desejo poder inserir minhas credenciais (nome de usuário e senha) para acessar o sistema e utilizar os recursos disponíveis.
</td>
			<td>- O nome de usuário deve estar devidamente registrado no banco de dados do sistema;</br>- O usuário deve receber uma mensagem de negação do acesso, caso suas credenciais estejam incorretas.</td>
		</tr>
		<tr>
			<td>[US02] Eu, como usuário, desejo poder realizar logout do sistema, para garantir a segurança da minha conta e dos meus dados pessoais.
</td>
			<td>- O usuário deve receber uma mensagem de confirmação para ter certeza de que deseja sair do sistema. </td>
		</tr>
		<tr>
			<td rowspan="4">[EP02] Gestão de matriz curricular</td>
			<td rowspan="4">[CA02] Gestão de disciplinas	</td>
			<td rowspan="2">[FE02] Gestão de eletivas	</td>
			<td>[US03] Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.
</td>
			<td>Devem ser preenchidos obrigatoriamente os campos:</br>- Nome da eletiva(de 3até 40 caracteres);</br>- Breve descrição(até 150 caracteres);</br>- Ano letivo(1, 2 ou 3);</br>- Professor responsável (10 a 30 caracteres);</br>- Número de vagas(mínimo 15 e máximo 30);</br>- Horário da disciplina(1º a 5º);</br>- Código da sala de aula;</br>- Deve ser recebida uma mensagem de confirmação ou não do cadastro da eletiva.</td>
		</tr>
		<tr>
			<td>[US04] Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.
</td>
			<td>- Deve aparecer uma lista de todas as matérias eletivas do sistema, em ordem alfabética, contendo o ano letivo de cada uma; </br>- Deve ser possível selecionar as matérias eletivas ao clicar na caixa de seleção ao lado delas; </br>- Deve ser possível excluir as eletivas selecionadas ao clicar no botão de exclusão; </br>- Deve aparecer uma mensagem de confirmação para que o usuário possa confirmar ou cancelar a exclusão da matéria eletiva do sistema. </td>
		</tr>
		<tr>
			<td rowspan="2">[FE03] Gestão de trilhas	</td>
			<td>[US05] Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.
</td>
			<td>Devem ser preenchidos obrigatoriamente os campos:</br>- Nome da trilha(entre 3 e 40 caracteres);</br>- Breve descrição(entre 10 e 150 caracteres);</br>- Selecionar eletivas relacionada;</br>- Ano letivo(1, 2 ou 3).</br>- Deve ser recebida uma mensagem de confirmação ou não do cadastro da trilha.</td>
		</tr>
		<tr>
			<td>[US06] Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.</td>
			<td>- Deve aparecer uma lista de todas as trilhas do sistema, em ordem alfabética, contendo o ano letivo de cada uma; </br>- Deve ser possível selecionar as trilhas ao clicar na caixa de seleção ao lado delas; </br>- Deve ser possível excluir as trilhas selecionadas ao clicar no botão de exclusão; </br>- Deve aparecer uma mensagem de confirmação para que o usuário possa confirmar ou cancelar a exclusão da trilha do sistema. </td>
		</tr>
	</tbody>
</table>
	

## MVP 2
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

# DoR e DoD
## DoR - Definition of Ready

* O Requisito foi aceito por todos da equipe?
* O levantamento de requisitos, análise e documentação, validação e verificação estão claros e disponíveis?
* A priorização do Requisito com relação ao backlog foi realizada?
* O Requisito é compreendido por todos da equipe ?
* O Requisito está suficientemente detalhado, de acordo com o modelo de história de usuário, com critérios de aceitação claros e compreensíveis?
* O Requisito foi aceito e validado pelo Product Owner?
* A equipe está tecnicamente preparada para realizar o desenvolvimento?

## DoD - Definition of Done

* O Requisito foi implementado de acordo com o backlog e seus critérios ?
* O Requisito passou pela Estratégia de Testes?
* Sua integração com o resto do sistema gerou algum impacto negativo?
* A documentação está devidamente realizada?