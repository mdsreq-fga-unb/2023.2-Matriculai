| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 22/11/2023 | 0.1 | Definição da Estratégia | Luana Ribeiro |
| 06/12/2023 | 1.1 | Adição do DoR e DoD | Luana Ribeiro |
| 11/12/2023 | 1.2 | Adição critérios de teste | Luana Ribeiro |

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
			<td>[US09] Eu, como estudante, desejo poder visualizar lista detrilhas e disciplinas eletivas, para me orientar na escolha das disciplinas.
</td>
			<td>Deve ser apresentada uma lista de trilhas contendo as seguintes informações:</br>- Nome da trilha(até 40 caracteres);</br>- Descrição(até 150 caracteres);</br>- Eletivas relacionadas;</br>Deve ser apresentada uma lista de eletivas, em ordem crescente do ano letivo, contendo as seguintes informações:</br>- Mome da eletiva(até 40 caracteres);</br>- Descrição(até 150 caractres);</br>- Ano letivo(1, 2 ou 3);</br>- Professor responsável(nome e sobrenome);</br>- Número de vagas;</br>- Horário da disciplina(formato horas:minutos);</br>- Código da sala de aula.</td>
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

## DoR e DoD

| DoR | US07 | US08 | US09 | US10 | US11 | US12 | US13 | US14 |  Obs.|
| ---------------------------- | ---- | ---- | ---- | ---- | ----- | ----- | ----- | ------- | ------- |
| O Requisito foi aceito por todos da equipe? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O levantamento de requisitos, análise e documentação, validação e verificação estão claros e disponíveis? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| A priorização do Requisito com relação ao backlog foi realizada? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O Requisito é compreendido por todos da equipe ? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O Requisito está suficientemente detalhado, de acordo com o modelo de história de usuário, com critérios de aceitação claros e compreensíveis? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O Requisito foi aceito e validado pelo Product Owner? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| A equipe está tecnicamente preparada para realizar o desenvolvimento? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

| DoD |  US07 | US08 | US09 | US10 | US11 | US12 | US13 | US14 |  Obs.|
| ---------------------------- | ---- | ---- | ---- | ---- | ----- | ----- | ----- | ------- | ------- |
| O Requisito foi implementado de acordo com o backlog e seus critérios | ✅ | ✅ | ❌  | ❌  | ✅ | ✅ | ✅ | ❌ |
| O Requisito passou pela Estratégia de Testes? | ✅ | ✅ | ❌  | ❌  | ✅ | ✅ | ✅ | ❌ |
| Sua integração com o resto do sistema gerou algum impacto negativo? | ✅ | ✅ | ❌  | ❌  | ✅ | ✅ | ✅| ❌ |

## Testes Funcionais

São Testes que analisam o funcionamento dos Requisitos do sistema.

### Nível -> Sistema

#### US07

Eu, como estudante, desejo poder solicitar a matrícula em uma trilha, para compor minha grade horária.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
|  - Se o aluno não estiver dentro do período letivo do 2º ano, ele não poderá solicitar matrícula na trilha; | Apenas alunos do 2º ano realizam matrícula | Alunos de outras séries conseguem fazer matrícula | ✅ | |
| - Deve ser apresentada uma mensagem de confirmação ou não da solicitação de matrícula. | A mensagem de confirmação aparece | A mensagem não aparece depois da matrícula | ✅ | |

#### US08

Eu, como estudante, desejo poder solicitar a matrícula em disciplinas eletivas disponíveis, para compor minha grade horária.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
|  Caso 1 (aluno do 1° ano):  o aluno poderá escolher 6 matérias eletivas sendo 1 o Projeto de Vida obrigatoriamente; | O aluno escolher as 6 disciplinas sendo 1 delas o Projeto de Vida |- O aluno consegue se inscrever em mais de 6 eletivas </br> - O aluno consegue se incscrever em mais de 1 projeto de vida ou nenhum | ✅ |
| Caso 2 (aluno do 2° ano):  o aluno deverá escolher 4 eletivas sendo 1 o Projeto de Vida obrigatoriamente;| O aluno escolher as 4 disciplinas sendo 1 delas o Projeto de Vida | - O aluno consegue se inscrever em mais de 4 eletivas </br> - O aluno consegue se incscrever em mais de 1 projeto de vida ou nenhum | ✅ |
| Caso 3 (aluno do 3° ano):  o aluno deverá escolher 4 eletivas sendo 1 o Projeto de Vida obrigatoriamente; | O aluno escolher as 4 disciplinas sendo 1 delas o Projeto de Vida | - O aluno consegue se inscrever em mais de 4 eletivas </br> - O aluno consegue se incscrever em mais de 1 projeto de vida ou nenhum | ✅ |
| Se o aluno não estiver dentro do caso do período letivo da trilha, ele não poderá solicitar matrícula na eletiva; | O aluno escolher as trilhas dentro do seu caso | O aluno poder escolher eletivas que não são do seu período letivo | ✅ |
| Deve ser apresentada uma mensagem de confirmação ou não da solicitação de matrícula;| A mensagem de confirmação aparece | A mensagem não aparecer depois da matrícula | ✅ |

#### US09

Eu, como estudante, desejo poder visualizar lista de trilhas e disciplinas eletivas , para me orientar na escolha das disciplinas.

| Critérios de aceitação </br> - Deve ser apresentada uma lista de trilhas contendo as seguintes informações:   | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Nome da trilha (de 3 até 40 caracteres); | O nome  está disponível | O nome não está disponível | ❌ |
| Eletivas relacionadas | As eletivas relacionadas estão corretas | As eletivas relacionadas estão incorretas | ❌ |

| Critérios de aceitação </br> - Deve ser apresentada uma lista de eletivas contendo as seguintes informações:    | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Nome da eletiva(de 3 até 40 caracteres); | O nome está disponível | O nome não está disponível | ❌ |
| Breve descrição(de 10 até 150 caracteres); | A descrição está disponível | A descrição não está disponível | ❌  |
| Ano letivo(1, 2 ou 3); | O ano está disponível | O ano não está disponível | ❌ |
| Professor responsável(10 a 30 caracteres); | O nome do professor está disponível | O nome do professor não está disponível | ❌  |
| Número de vagas(mínimo 15 e máximo 30); | O número de vagas está disponível | O número de vagasnão está disponível | ❌  |
| Horário da disciplina no formato (1º a 5º); | O horário está disponível | O horário não está disponível | ❌  |

#### US10

Eu, como estudante, desejo poder visualizar o resultado da solicitação de matrícula, para saber se fui matriculado ou não.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| - Deve ser apresentado uma lista com as disciplinas homologadas e não-homologadas, organizadas em uma tabela com os nomes das disciplinas e o status(deferida ou indeferida), organizadas primeiramente por status e depois por ordem alfabética; | - A lista está organizada na ordem de priorização (deferido, e alfabética) | - A lista não está organizada na ordem de priorização (deferido, e alfabética) | ❌  | Us não implementada | 

#### US11

Eu, como administrador, desejo ser capaz de definir o período de matrícula, para que os alunos possam se matricular.

| Critérios de aceitação: </br> - Deve ser selecionado o período em que a função de matrícula estará disponível para os alunos: | Caso aceitável | Abaixo do valor mínimo | Acima do valor máximo | Caracteres inaceitáveis | Passou? | Obs. |
| ------------ | --------------------------- | -------- | ------ | --------- | --------- | -------- |
| Data de início e de fim, no formato DD/MM/AAAA; | - 0<D<32 </br> - 0<M<13 </br> -2023<A<2025 </br> | - D<1 </br> - M<1           </br> - A<2023 | - D>31 </br> - M>12 </br> - A>2024 | -caracteres especiais @,#,% </br> - Letras | ✅ |
| Hora de início e hora de fim, no formato (horas:minutos). | - 07<h<19 </br> - 00<m<59	| - h<08 </br> - m<00 | - h>18 </br> - m>59 | -caracteres especiais @,#,% </br> - letras | ✅ |

#### US12

Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
|  - Deve ser selecionado a opção da lista: trilha ou eletiva, e a partir disso, selecionar qual trilha ou eletiva deseja-se gerar a lista; | A opção selecionada gera a lista relativa a ela | A opção selecionada não gera a lista relativa a ela | ✅ | |
| - A lista deve estar organizada por ordem alfabética e deve conter nome e sobrenome do aluno, além do seu número de matrícula. | A lista está em ordem alfabética e contém todos os dados | A lista está desordenada e com dados faltantes | ✅ | |

#### US13

Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| - Os dados devem estar no formato: colunas para ano letivo, nome e matrícula; | Os dados estão organizados adequadamente | Os dados não estão organizados adequadamente | ✅ |
| - O ano letivo deve ser entre 1º e 3º ano; | 0<a<4 |- a<1 </br> -a>3 | ✅ |
| - Nome deve ser nome completo (mínimo 10 caracteres e máximo 50 caracteres) ; | O nome está completo | O nome não está completo | ✅ |
| - A matrícula deve ser numérica de 8 números ; | A matrícula contém 8 números | A matrícula contém menos que 8 números ou mais/ Não é numérica | ✅ |
| - Os arquivo deve estar formato .csv | O arquivo está no formato correto| O arquivo não está no formato correto | ✅ |

#### US14

Eu, como administrador, desejo enviar token de acesso para alunos cadastrados, para que eles participem da plataforma.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
|  - O token deverá ser enviado para o email dos alunos ; | O token é enviado para o email do aluno | O token não é enviado para o email do aluno | ❌  | US não implementada|
| - O administrador deve selecionar a série e depois a turma para a qual os alunos receberão os tokens; | O administrador seleciona a séria e a turma | O sistema permite que o administrador prossiga sem selecionar os campos corretamente | | |
| - O administrador deverá receber uma mensagem de confirmação do envio do token. | O administrador recebe a mensagem de confirmação | O administrador não recebe a mensagem | | |

## Teste de Usabilidade

### Nível -> Sistema

#### RNF01

A interface precisa ser verificável quanto à presença de um modo de alto contraste e texto alternativo, com o objetivo de garantir a acessibilidade aprimorada da aplicação.

| Critérios | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Alto contraste | O alto contraste é acionado | Ao selecionar o alto contraste, ele não é acionado | ❌ | O alto contraste não foi implementado |
| Texto Alternativo | O texto alternativo é acionado | Ao selecionar o texto alternativo, ele não é acionado | ❌ | |

#### RNF02

A aplicação deve conter estilização das páginas com cores, fontes e ícones padronizados, de acordo com o os padões de interface definidos.

| Componete | Padão de cor | Padrão de fonte | Padrão de ícone | Obs. |
| --------- | ---------- | ----------- | ----------------- |  --------- |
| Header | ✅ | ✅ | ✅ |
| Component | ✅ | ✅ | ✅ |
| Footer | ✅ | ✅ | ✅ |

#### RNF03

A aplicação precisa demonstrar responsividade, permitindo adaptação da tela em notebook, celular, tablet e monitores de PC .

| Tipo de tela | É responsivo? | Obs. |
| ---------- | ----------- | ----------- |
| Notebook | ❌ | Não foi implementado |
| Celular | ❌ | |
| Tablet | ❌ | |
| Monitor PC | ❌ | |

## Teste de Confiabilidade

### Nível -> Sistema

#### RNF04

 A aplicação deve garantir que apenas aqueles registrados no sistema tenham acesso a ele. Dessa forma, pessoas não registradas não poderão inserir credenciais aleatórias e conseguir logar.

| Caso aceitável | Caso inaceitável | Passou? | Obs. |
| ----------- | --------------- | -------------- | ----------- |
| Pessoa resgistrada tem acesso	| Pessoa sem registro tem acesso | ✅ | |

## Teste de Suportabilidade

### Nível -> Sistema

O sistema deve ser desenvolvido de forma modular, aderindo às melhores práticas de programação como padrão de identação, comentários, nomes de variáveis e funções, etc. com o objetivo de simplificar as operações de manutenção no futuro. Além disso, deve possibilitar a incorporação de novas funcionalidades sem ocasionar impactos adversos em outras áreas do sistema.

| Critério | Está dentro dos conformes? | Obs. |
| ----------- | --------------- | -------- |
| Padrão de identação: código identado com tab | ✅ | |
| Comentários em português ao longo do código | ✅ | |
| Título de arquivo no modelo nomeArquivo | ✅ | |
| Título de pasta no modelo nomePasta | ✅ | |
| Nome de variáveis no modelo nomeVariável | ✅ | |
| Nome de funções no modelo nomeFuncao | ✅ | |
