| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 21/11/2023 | 1.0 | Adição das atividades | Luana Ribeiro |

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