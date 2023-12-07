| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 21/11/2023 | 0.1 | Adição das atividades | Luana Ribeiro |
| 06/12/2023 | 0.2 | Adição do BDD do TabeçaTeam | Júlia Yoshida |

# Exercícios Cruzados

Exercícios realizados em sala de aula, abordando os conteúdos da disciplina em atividades práticas. Essas atividades foram realizadas de forma cruzada, em que uma equipe valida a atividade realizada por outra, dessa forma, as validações a seguir foram das equipes associadas nessa avaliação cruzada. 

# Equipe: TabeçaTeam

## Avaliação Backlog

Nesta etapa, foi avaliada a elaboração do Product Backlog do Projeto da Equipe. Essa atividade foi realizada através da Verificação e Validação.

### Verificação - INVEST

Requisitos Funcionais

| US | Independente | Negociável | Valorável | Estimável | Pequena | Testável | Obs. |
| -------- | -------- | ------- | -------- | -------- | ------ | ------ | ------ |
| Eu, como administrador, quero ser capaz de criar um funcionário. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu, como administrador, quero ser capaz de editar um funcionário. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu, como administrador, quero ser capaz de deletar um funcionário. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu, como administrador, quero ser capaz de ler um funcionário ou todos os funcionários. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | Vendo na perspectiva de CRUD, entendemos leitura como a listagem de funcionários |
| Eu, como administrador, quero ser capaz de criar um cliente. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu, como administrador, quero ser capaz de editar um cliente. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu, como administrador, quero ser capaz de deletar um cliente. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu, como administrador, quero ser capaz de ler um cliente ou todos os clientes. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | Vendo na perspectiva de CRUD, entendemos leitura como a listagem de clientes |
| Eu como administrador, quero ser capaz de criar uma compra. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de editar uma compra. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de deletar uma compra. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de ler uma compra. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | Vendo na perspectiva de CRUD, entendemos leitura como a listagem de uma ou mais compras |
| Eu como administrador, quero ser capaz de criar um caixa. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de deletar um caixa. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de editar um caixa. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de ler um caixa. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | O que seria ler um caixa? |
| Eu como administrador, quero ser capaz de gerar o relatório de um caixa. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | 
| Eu como administrador, quero ser capaz de receber informações de nome do cliente e valor de pix automaticamente. | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Critério de aceitação da US de criar uma compra. |
| Eu como administrador, quero ser capaz de saber o método de pagamento de uma compra. | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Critério de aceitação da US de criar uma compra. |
| Eu como funcionário, quero ser capaz de criar uma compra. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como funcionário, quero ser capaz de criar um cliente. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como funcionário, quero ser capaz de atribuir uma despesa a um cliente. | ❌ |  ❌ | ❌ | ❌ | ❌ | ❌ | Não é uma história, é um critério de aceitação da US de criar uma compra. |
| Eu como funcionário, quero ser capaz de cobrar uma compra. | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | Poderia ser escrito de uma forma melhor. |
| Eu como funcionário, quero ser capaz de ler o nome e o valor de um produto | | | | | | | O que seria ler? |
| Eu como administrador, quero ser capaz de criar um produto | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de editar um produto | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Eu como administrador, quero ser capaz de deletar um produto | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |

Requisitos Não- Funcionais

| Requisito | Declaração bem definida? | Obs. |
|  ------ | -------- | ----------------------- |
| Deve garantir que apenas aqueles registrados no sistema tenham acesso a aplicação. | ✅ | Tipo de requisito  não funcional não foi colocado.
| Deve ser responsivo | ❌ | Tipo de requisito não funcional não foi colocado. O que seria “ser responsivo”? Falta detalhamento. |
| A aplicação deve ser compatível com as versões de até outubro de 2023 dos navegadores Chrome, Safari, Firefox e Brave. | ✅ | Tipo de requisito não funcional não foi colocado. |
| A interface deve conter modo de alto contraste e texto alternativo, com o propósito de deixar a aplicação mais acessível. | ✅ | Tipo de requisito não funcional não foi colocado. |

### Validação - Checklist

| Categoria | Feedback | Obs. |
| -------- | -------- | ------- |
| O Problema foi bem definido? | ✅ | Está ótimo e dá para entender, recomendaria só resumir mais |
| Ishikawa bem elaborado? |	❌ | O problema escrito não está muito bem definido, alguns estão genéricos. Devemos pensar que a nossa aplicação irá solucionar todo esse escopo, então é bom ser mais específico. Recomendo não colocar como problema, questões como erro humano porque o erro humano não é algo mensurável para uma aplicação resolver. Sugestão de problema: “Dificuldade na gestão do fluxo de caixa” |
| Objetivo foi bem construído? | ✅ | |
| Declaração Posição do Produto | ✅ | Na parte do “ao contrário” adiconar além do Gladium, a parte da planilha do excel, pois é a mais problemática |

## HealthNet PBB

O Product Backlog Building é um método e um Canvas para a elaboração e a criação de um Product Backlog. O Canvas PBB é a ferramenta que facilita o método de Product Backlog Building. Tem como objetivo ajudar na construção e no refinamento do Product Backlog de forma colaborativa – construindo um entendimento compartilhado e levando todos os envolvidos à compreensão do produto – e na preparação do backlog para o time começar a trabalhar de modo ágil e eficaz. (Marsicano,2023)

### Validação

| Tópicos | OK? |
| ------- | --- |
| Os problemas foram identificados? | ✅ |
| Os objetivos de negócio ou do projeto estão claramente definidos no canvas? | ✅ |
| O PBB Canvas está alinhado com o problema a ser solucionado? | ✅ |
| As principais personas foram identificadas e suas necessidades foram consideradas? | ✅ |
| As features do produto estão identificadas? | ✅ |
| A estrutura do PBI está correta? | ✅ |

### Verificação

| Tópicos | OK? | Obs. |
| ----------- | ------ | ----- |
| Os problemas identificados condizem com o cenário apresentado? | ✅ |
| O que cada persona faz e o que espera está descrito corretamente?| ❌ | Na parte do que cada persona espera fazer com o produto, a descrição dos itens não faz sentido. Ex.: “sistema unificado” |
| As features descrevem corretamente quais problemas da persona que ela resolve e quais benefícios ela traz pra persona? | ✅ |
| Cada PBI está vinculado a uma feature e contribui para a resolução de um problema ou atendimento a uma expectativa. | ✅ |
| O backlog de produtos contém uma lista de itens devidamente priorizados? | ❌ |

## Atividade HealthNet BDD

Behavior Driven Development (BDD) é uma especificação executável para validar os critérios de aceite de uma história; é descrita em linguagem natural e segue a perspectiva de desenvolvimento orientada a especificações.Com a utilização de cenários de BDD a lista de critérios de aceitação pode ser substituída por um ou mais cenários. (Marsicano,George)

### Verificação US - INVEST

| US | Independente | Negociável | Valorável | Estimável | Pequena | Testável |
| -------- | -------- | ------- | -------- | -------- | ------ | ------ |
| US01 - Eu, como recepcionista, quero registrar um novo paciente, para que eu possa manter um registro do mesmo. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US02 - Eu, como recepcionista, quero atualizar dados de um paciente, para que eu possa ter todos os seus dados mais recentes. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US03 - Eu, como recepcionista, quero acessar o histórico do paciente, para que eu possa consultar dados sobre consultas anteriores. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US04 - Eu, como médico clínico geral, quero ter acesso rápido ao histórico de um paciente, para que eu possa saber sobre ele e seguir de forma precisa com sua consulta e tratamento. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US05 - Eu, como médico clínico geral, quero inserir notas e prescrições, para que eu possa registrar informações sobre o atendimento e tratamento. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US06 - Eu, como médico clínico geral, quero receber alertas sobre interações entre medicamentos, para evitar possíveis erros.	| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US07 - Eu, como farmacêutica, quero acessar as informações sobre cada medicamento, para que eu possa saber sobre ele.	| ✅	| ✅	| ✅	| ✅	| ✅	| ✅ |
| US08 - Eu, como farmacêutica, dispensar medicamentos conforme as prescrições, para garantir tratamentos eficazes e a saúde dos pacientes.	| ✅ | ✅	 | ✅ | ✅ | ✅ | ✅ |
| US09 - Eu, como farmacêutica, quero receber alertas sobre interações entre medicamentos, para evitar possíveis erros.	| ✅	| ✅	| ✅	| ✅	| ✅	| ✅ |
| US10 - Eu, como coordenador de Agendamento, quero agendar consultas com especialistas em uma tela, para facilitar e agilizar o processo de marcação. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US11 - Eu, como coordenador de Agendamento, quero receber alertas de conflitos de horário, para evitar sobreposições e manter a agenda organizada. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US12 - Eu, como coordenador de Agendamento, quero enviar notificações de agendamento para pacientes, para mantê-los informados e reduzir faltas nas consultas. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US13 - Eu, como paciente, quero visualizar histórico médico e resultados de exames, para ter acesso fácil a informações relevantes sobre meu tratamento. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US14 - Eu, como paciente, quero agendar consultas de maneira fácil, para garantir atendimento quando necessário. | ✅ | ✅ | ✅ |✅ | ✅ | ✅ |
| US15 - Eu, como paciente, quero receber lembretes de consultas, resultados e medicações, para manter-me informado e organizado em relação aos cuidados com a minha saúde. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US16 - Eu, como Diretor de Tecnologia, quero uma solução escalável, segura e em conformidade com as regulamentações, para garantir a integridade e a proteção dos dados da "HealthNet". | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| US17 - Eu, como Diretor de Tecnologia, quero ferramentas de monitoramento e relatório, para assegurar o desempenho eficiente do sistema e identificar possíveis áreas de melhoria. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| US18 - Eu, como Diretor de Tecnologia, quero capacidade para realizar atualizações e melhorias sem interrupções significativas, para manter a infraestrutura tecnológica da "HealthNet" atualizada e eficiente. | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### User Stories e BDD

<table>
	<tbody>
		<tr>
			<td>User Story</td>
			<td>Cenário</td>
		</tr>
		<tr>
			<td rowspan="2">US01 - Eu, como recepcionista, quero registrar um novo paciente, para que eu possa
manter um registro do mesmo.
</td>
			<td>Visualização de paciente registrado</br>
1. Dado que as informações do paciente foram registradas no sistema</br>
2. Quando o recepcionista solicitar a visualização das informações</br>
3. Então, o sistema deverá exibir as informações junto a um número de identificação
</td>
		</tr>
		<tr>
			<td>Registro de paciente</br>
1. Dado um paciente para ser registrado</br>
2. Quando o recepcionista for adicioná-lo é atribuído um número de identificação</br>
3. Então, os dados do novo paciente devem ser visualizados para confirmação.
</td>
		</tr>
		<tr>
			<td rowspan="2">US02 - Eu, como recepcionista, quero atualizar dados de um paciente, para que eu
possa ter todos os seus dados mais recentes.
</td>
			<td>Atualização dos dados cadastrais</br>
1. Dado que as informações do paciente estão cadastradas no sistema</br>
2. Quando um paciente for selecionado para atualização</br>
3. Então, a recepcionista deve poder atualizar e visualizar os dados que foram modificados.
</td>
		</tr>
		<tr>
			<td>Atualização de dados cadastrais de um paciente inexistente</br>
1. Dado que as informações do paciente não estão cadastradas no sistema</br>
2. Quando for realizada a busca</br>
3. Então, o sistema deve informar ao usuário a inexistência do paciente.
</td>
		</tr>
		<tr>
			<td>US03 - Eu, como recepcionista, quero acessar o histórico do paciente, para que eu
possa consultar dados sobre consultas anteriores.
</td>
			<td>Consulta de consultas médicas anteriores</br>
1. Dado que o paciente cadastrado  que já realizou consultas médicas</br>
2. Quando a recepcionista solicitar a visualização do histórico de consultas</br>
3. Então, o sistema deve mostrar o histórico de tratamentos, consultas e prescrições.
</td>
		</tr>
		<tr>
			<td>US04 - Eu, como médico clínico geral, quero ter acesso rápido ao histórico de um
paciente, para que eu possa saber sobre ele e seguir de forma precisa com sua
consulta e tratamento.</td>
			<td>Acesso ao histórico de um paciente</br>
1. Dado que o médico está diante de um paciente durante uma consulta</br>
2. Quando acessar o histórico do paciente</br>
3. Então, o sistema deve mostrar suas consultas anteriores, resultados de exames e outras prescrições.
</td>
		</tr>
		<tr>
			<td>US05 - Eu, como médico clínico geral, quero inserir notas e prescrições, para que eu possa registrar informações sobre o atendimento e tratamento.</td>
			<td>Inserir nota ou prescrição </br>
1. Dado que o médico deseja inserir uma nota ou prescrição sobre um paciente</br>
2. Quando realizar o registro da nota ou prescrição</br>
3. Então, o sistema deverá associá-las ao paciente correto junto com o horário que foram inseridas.
</td>
		</tr>
		<tr>
			<td>US06 - Eu, como médico clínico geral, quero receber alertas sobre interações entre medicamentos, para evitar possíveis erros.
</td>
			<td>Receber um alerta</br>
1. Dado um médico escrevendo a prescrição</br>
2. Quando for inserido um medicamento com possível interação medicamentosa</br>
3. Então, o sistema deve exibir um alerta e salvar a interação do médico com o mesmo.
</td>
		</tr>
		<tr>
			<td rowspan="2">US07 - Eu, como farmacêutica, quero acessar as informações sobre cada
medicamento, para que eu possa saber sobre ele.
</td>
			<td>Acessar informações sobre um medicamento</br>
1. Dado que um farmacêutico precisa da descrição dos medicamentos</br>
2. Quando pesquisar um medicamento disponível na farmácia</br>
3. Então, o sistema deve fornecer a composição, posologia e possíveis efeitos colaterais.
</td>
		</tr>
		<tr>
			<td>Acessar informações sobre um medicamento indisponível</br>
1. Dado que um farmacêutico precisa da descrição dos medicamentos</br>
2. Quando pesquisar um medicamento indisponível na farmácia</br>
3. Então, o sistema deve avisar sobre a falta de disponibilidade
</td>
		</tr>
		<tr>
			<td>US08 - Eu, como farmacêutica, dispensar medicamentos conforme as prescrições,
para garantir tratamentos eficazes e a saúde dos pacientes.
</td>
			<td>Dispensar medicamento</br>
1. Dado que um paciente chega para retirar um medicamento prescrito</br>
2. Quando o farmacêutico visualizar a prescrição e validar</br>
3. Então, a dispensação é confirmada a partir da assinatura eletrônica ou confirmação verbal
</td>
		</tr>
		<tr>
			<td rowspan="2">US09 - Eu, como farmacêutica, quero receber alertas sobre interações entre
medicamentos, para evitar possíveis erros.
</td>
			<td>Receber alerta sobre interação entre medicamentos</br>
1. Dado que tenha dois medicamentos A e B</br>
2. Quando os medicamentos possuem uma interação perigosa</br>
3. Então o sistema, deve-se notificar o farmacêutico
</td>
		</tr>
		<tr>
			<td>Medicamentos não possuem interação</br>
1. Dado que tenha dois medicamentos A e B</br>
2. Quando os medicamentos não possuem uma interação perigosa</br>
3. Então o sistema, não vai enviar notificação. 
</td>
		</tr>
		<tr>
			<td>US10 - Eu, como coordenador de Agendamento, quero agendar consultas com
especialistas em uma tela, para facilitar e agilizar o processo de marcação.
</td>
			<td>
1. Dado que desejo agendar consultas com um especialista</br>
2. Quando for necessário</br>
3. Então, o sistema deve permitir que esse agendamento ocorra sem sobreposição de horário e de forma ágil.</br>
</td>
		</tr>
		<tr>
			<td>US11 - Eu, como coordenador de Agendamento, quero receber alertas de conflitos de
horário, para evitar sobreposições e manter a agenda organizada.
</td>
			<td>Alertar conflito de horário</br>
1. Dado que o coordenador está realizando um agendamento</br>
2. Quando o horário já estiver ocupado</br>
3. Então, o sistema deve alertar especificamente e recomendar outro horário
</td>
		</tr>
		<tr>
			<td rowspan="2">US12 - Eu, como coordenador de Agendamento, quero enviar notificações de
agendamento para pacientes, para mantê-los informados e reduzir faltas nas
consultas.
</td>
			<td>Enviar notificação de agendamento</br>
1. Dado que está sendo realizado um agendamento</br>
2. Quando finalizado </br>
3. Então, o paciente deve receber uma notificação com consulta, data, hora e local do agendamento
</td>
		</tr>
		<tr>
			<td>Receber notificação de agendamento</br>
1. Dado que o paciente realizou um agendamento</br>
2. Quando for notificado</br>
3. Então, o paciente deve poder confirmar, reagendar ou cancelar o agendamento
</td>
		</tr>
		<tr>
			<td>US13 - Eu, como paciente, quero visualizar histórico médico e resultados de exames,
para ter acesso fácil a informações relevantes sobre meu tratamento.
</td>
			<td>Visualizar o meu histórico médico e resultado de exames</br>
1. Dado que o paciente deseja ver suas informações</br>
2. Quando acessar o portal </br>
3. Então, deverá visualizar seu histórico médico e resultado de exames.
</td>
		</tr>
		<tr>
			<td>US14 - Eu, como paciente, quero agendar consultas de maneira fácil, para garantir
atendimento quando necessário.
</td>
			<td>Paciente deseja agendar consultas </br>
1. Dado que o paciente deseja agendar consultas </br>
2. Quando for necessário</br>
3. Então, deverá ser possível agendar sem conflitos e com o especialista desejado. 
</td>
		</tr>
		<tr>
			<td rowspan="2">US15 - Eu, como paciente, quero receber lembretes de consultas, resultados e
medicações, para manter-me informado e organizado em relação aos cuidados com a
minha saúde.
</td>
			<td>Lembretes de consultas</br>
1. Dado que o sistema envia automaticamente lembretes de consulta</br>
2. Quando o paciente possuir uma consulta nos dias subsequentes</br>
3. Então, o sistema deverá mandar, com antecedência, um aviso ao paciente 
</td>
		</tr>
		<tr>
			<td>Lembretes de medicações</br>
1. Dado que o paciente recebeu prescrição médica para automedicação </br>
2. Quando o horário para tomar a medicação estiver próximo </br>
3. Então, o sistema deverá alertar o paciente para que tome sua medicação conforme a prescrição médica.
</td>
		</tr>
		<tr>
			<td>US16 - Eu, como Diretor de Tecnologia, quero uma solução escalável, segura e em
conformidade com todas as regulamentações, para garantir a integridade e a
proteção dos dados da "HealthNet".
</td>
			<td>REQUISITO NÃO-FUNCIONAL</td>
		</tr>
		<tr>
			<td>US17 - Eu, como Diretor de Tecnologia, quero ferramentas de monitoramento e
relatório, para assegurar o desempenho eficiente do sistema e identificar possíveis
áreas de melhoria.
</td>
			<td>Alertas de problemas ao usuário</br>
1. Dado que o sistema possui ferramentas de monitoramento em tempo real</br>
2. Quando possíveis problemas danosos ao usuário forem identificados</br>
3. Então, o sistema irá alertar a equipe de tecnologia 
</td>
		</tr>
		<tr>
			<td>US18 - Eu, como Diretor de Tecnologia, quero capacidade para realizar atualizações e
melhorias sem interrupções significativas, para manter a infraestrutura tecnológica
da "HealthNet" atualizada e eficiente.
</td>
			<td>Atualização do sistema</br>
1. Dado que o sistema está desatualizado </br>
2. Quando atualizações forem implementadas</br>
3. Então, um backup das informações anteriores deve ser realizado
</td>
		</tr>
	</tbody>
</table>

# Equipe: BabyHoney

## HealthNet PBB

O PBB é um método e um Canvas para a elaboração e a criação de um Product Backlog. O Canvas PBB é a ferramenta que facilita o método de Product Backlog Building. Tem como objetivo ajudar na construção e no refinamento do Product Backlog de forma colaborativa – construindo um entendimento compartilhado e levando todos os envolvidos à compreensão do produto – e na preparação do backlog para o time começar a trabalhar de modo ágil e eficaz. (Marsicano,2023)
### Validação

| Tópicos | OK? |
| ------- | --- |
| Os problemas foram identificados? | ✅ |
| Os objetivos de negócio ou do projeto estão claramente definidos no canvas? | ✅ |
| O PBB Canvas está alinhado com o problema a ser solucionado? | ✅ |
| As principais personas foram identificadas e suas necessidades foram consideradas? | ✅ |
| As features do produto estão identificadas? | ✅ |
| A estrutura do PBI está correta? | ✅ |

### Verificação

| Tópicos | OK? |
| ----------- | ------ |
| Os problemas identificados condizem com o cenário apresentado? | ✅ |
| O que cada persona faz e o que espera está descrito corretamente?| ✅ |
| As features descrevem corretamente quais problemas da persona que ela resolve e quais benefícios ela traz pra persona? | ❌ |
| Cada PBI está vinculado a uma feature e contribui para a resolução de um problema ou atendimento a uma expectativa. | ✅ |
| O backlog de produtos contém uma lista de itens devidamente priorizados? | ✅ |

## HealthNet BDD 

Essa atividade não foi realizada pela equipe, portanto não foi validada.