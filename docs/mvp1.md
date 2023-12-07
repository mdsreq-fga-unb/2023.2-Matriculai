## Histórico de revisão

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 22/11/2023 | 0.1 | Definição da Estratégia | Luana Ribeiro |

# Estratégia de Testes do MVP 1

<table>
	<tbody>
		<tr>
			<td>Épico</td>
			<td>Capability</td>
			<td>Feature	</td>
			<td>User Story</td>
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
			<td>Devem ser preenchidos obrigatoriamente os campos:</br>- Nome da eletiva(de 3 até 40 caracteres);</br>- Breve descrição(até 150 caracteres);</br>- Ano letivo(1, 2 ou 3);</br>- Professor responsável (10 a 30 caracteres);</br>- Número de vagas(mínimo 15 e máximo 30);</br>- Horário da disciplina(1º a 5º);</br>- Deve ser recebida uma mensagem de confirmação ou não do cadastro da eletiva.</td>
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
	</tbody>
</table>

## DoR e DoD

| DoR | US01 | US02 | US03 | US04 | US05 | US06 | Obs.|
| ---------------------------- | ---- | ---- | ---- | ---- | ----- | ----- | ----- |
| O Requisito foi aceito por todos da equipe? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O levantamento de requisitos, análise e documentação, validação e verificação estão claros e disponíveis? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| A priorização do Requisito com relação ao backlog foi realizada? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O Requisito é compreendido por todos da equipe ? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O Requisito está suficientemente detalhado, de acordo com o modelo de história de usuário, com critérios de aceitação claros e compreensíveis? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| O Requisito foi aceito e validado pelo Product Owner? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| A equipe está tecnicamente preparada para realizar o desenvolvimento? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

| DoD | US01 | US02 | US03 | US04 | US05 | US06 | Obs. |
| -------------------------- | ---- | ----- | ----- | ------ | ----- | ----- | ---- |
| O Requisito foi implementado de acordo com o backlog e seus critérios | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| O Requisito passou pela Estratégia de Testes? | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |  |
| Sua integração com o resto do sistema gerou algum impacto negativo? | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | |

## Testes Funcionais

São Testes que analisam o funcionamento dos Requisitos do sistema.

### Nível -> Sistema

#### US01

Eu, como usuário, desejo poder inserir minhas credenciais (nome de usuário e senha) para acessar o sistema e utilizar os recursos disponíveis.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| O nome de usuário deve estar devidamente registrado no banco de dados do sistema; | Nome correto e registrado | O nome não está registrado e mesmo assim foi possível logar | ✅ | |
| O usuário deve receber uma mensagem de negação do acesso, caso suas credenciais estejam incorretas. | A mensagem de negação aparece | A mensagem não aparece depois da negação de acesso | ✅ | |

#### US02

Eu, como usuário, desejo poder realizar logout do sistema, para garantir a segurança da minha conta e dos meus dados pessoais.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| O usuário deve receber uma mensagem de confirmação para ter certeza de que deseja sair do sistema;| O usuário recebe a mensagem de confirmação e seleciona que quer sair | O usuário não recebe nenhum alerta de logout e já é deslogado | ✅ | |

#### US03

Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.

| Critérios de aceitação: </br> - devem ser preenchidos obrigatoriamente os campos: | Caso aceitável | Abaixo do valor mínimo | Acima do valor máximo | Caracteres inaceitáveis | Passou? | Obs. |
| -------------- | ------------ | ---------- | ------ | --------- | ----------- | ---------- |
| nome da eletiva(de 3 até 40 caracteres); | 2<n<41 | n<2 | n>40 | -caracteres especiais @,#,% </br> - apenas números | ✅ | |
| breve descrição(de 10 até 150 caracteres); | 9<d<151 | d<10 | d>150 | -caracteres especiais @,#,% </br> - apenas números | ✅ | |
| ano letivo(1, 2 ou 3); |d==1; d==2; d==3. | - |- | Float </br> - d≠ de 1,2 ou 3 | ✅ | |
| professor responsável(10 a 30 caracteres); | 9<p<31 | p<10 | p>30	| -caracteres especiais @,#,% </br> - apenas números | ✅ | |
| número de vagas(mínimo 15 e máximo 30); | 14<v<31 | v<15 | v<30 | -caracteres especiais @,#,% </br> -letras </br> - float | ✅ | |
| horário da disciplina (1º a 5º); | - 0<h<6 | - h<1  | - h>5 | -caracteres especiais @,#,% </br> - letras </br> - float | ✅ |

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Deve ser recebida uma mensagem de confirmação ou não do cadastro da eletiva. | O alerta de confirmação ou não do cadastro | Nenhum alerta aparece | ✅ | |

#### US04

 Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Deve ser selecionada a matéria eletiva que deseja-se remover; | É possível selecionar a eletiva | Não é possível selecionar a eletiva e mesmo sem selecionar o processo continua e é confirmado | ✅ | |
| Deve ser confirmada a escolha de remover a matéria; | Aparece na tela alerta de confirmação para ser clicado | Não aparece nada na tela e o processo é finalizado sem confirmação | ✅ | |
| Deve ser apresentada uma mensagem de confirmação da remoção da matéria. | Aparece na tela mensagem de confirmação da remoção | Não aparece na tela mensagem de confirmação da remoção | ✅ | |

#### US05

Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.

| Critérios de aceitação: </br> - devem ser preenchidos obrigatoriamente os campos: | Caso aceitável | Abaixo do valor mínimo | Acima do valor máximo | Caracteres inaceitáveis | Passou? | Obs. |
| -------------- | ------------ | ---------- | ------ | --------- | ----------- | ---------- |
| nome da trilha(entre 3 e 40 caracteres); | 2<n<41 | n<2 | n>40 | -caracteres especiais @,#,% </br> - apenas números | ✅ | |
| breve descrição(entre 10 e 150 caracteres); | 9<d<151 | d<10 | d>150 | -caracteres especiais @,#,% </br> - apenas números | ✅ | |
| eletivas relacionadas; | caixa de seleção preenchida | - | - | - | ✅ |  |
| ano letivo(1, 2 ou 3). | d==1; d==2; d==3. | - | - | - Float </br> - d≠ de 1,2 ou 3 | ✅ | |

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Deve ser recebida uma mensagem de confirmação ou não do cadastro da trilha. | O alerta de confirmação ou não do cadastro | Nenhum alerta aparece | ✅ | |

#### US06

 Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.

| Critérios de aceitação | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Deve ser selecionada a trilha que deseja-se remover; | É possível selecionar a trilha | Mesmo sem selecionar a trilha o processo é finalizado | ✅ |
| Deve ser confirmada a escolha de remover a trilha; | O usuário deve confirmar que deseja excluir | Mesmo sem confirmação o processo é finalizado | ✅ |
| Deve ser apresentada uma mensagem de confirmação da remoção da trilha. | A mensagem de confirmação aparece | A mensagem de confirmação não aparece | ✅ |

## Teste de Usabilidade

### Nível -> Sistema

#### RNF01

A interface precisa ser verificável quanto à presença de um modo de alto contraste e texto alternativo, com o objetivo de garantir a acessibilidade aprimorada da aplicação.

| Critérios | Caso válido | Caso inválido | Passou? | Obs. |
| ------------- | ---------- | ---------- | ------- | -------- |
| Alto contraste | O alto contraste é acionado | Ao selecionar o alto contraste, ele não é acionado | ❌ | O alto contraste ainda não foi implementado no MVP1 |
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
| Notebook | ❌ | Ainda não foi implementada a responsividade no MVP1 |
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
