## Histórico de revisão

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 25/10/2023 | 0.1 | Criando backlog SAFe | Yasmim Rosa |

## Requisitos Não Funcionais
| Tipo | Descrição |
|------|-------------------------|
|Interface|**[RNF01]** A interface deve conter modo de alto contraste e texto alternativo, com o propósito de deixar a aplicação mais acessível.|
|Interface|**[RNF02]** A aplicação deve conter estilização das páginas com cores, fontes e ícones padronizados.|
|Usabilidade|**[RNF03]** A aplicação deve ser responsiva, podendo ser acessada por diferentes tamanhos de telas.|
|Confiabilidade| **[RNF04]** A aplicação deve proporcionar um ambiente suficientemente seguro para garantir que apenas aqueles registrados no sistema tenham acesso a ele.|
|Suportabilidade| **[RNF05]** O sistema deve ser modular e seguir as melhores práticas de programação, facilitando a manutenção futura e permitindo que novas funcionalidades sejam adicionadas sem causar impacto negativo em outras partes do sistema.|
|Implementação| **[RNF06]** A aplicação deve seguir regras para garantir que os dados inseridos no banco de dados estejam corretos e válidos. Isso pode envolver restrições de tipo de dados, validação de formato, faixas de valores aceitáveis e verificação de integridade referencial.|




## Requisitos Funcionais - Backlog SAFe

| Épico    | Capability     | Feature     | User Story  |
|----------|----------------|-------------|----|
| **[EP01]** Gestão de usuários da plataforma   | **[CA01]** Gestão de acesso   | **[FE01]** Acesso a plataforma  | **[US01]** Eu, como usuário, desejo poder inserir minhas credenciais (nome de usuário e senha) para acessar o sistema e utilizar os recursos disponíveis.  |
| **[EP01]** Gestão de usuários da plataforma   | **[CA01]** Gestão de acesso  | **[FE01]** Acesso a plataforma  | **[US02]** Eu, como usuário, desejo poder realizar logout do sistema, para garantir a segurança da minha conta e dos meus dados pessoais.  |
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas  | **[FE02]** Crud de eletivas  | **[US03]** Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.  |
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas   | **[FE02]** Crud de eletivas  | **[US04]** Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.  |
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas   | **[FE03]** Crud de trilhas  | **[US05]** Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.  |
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas   | **[FE03]** Crud de trilhas  | **[US06]** Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.  |
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas   | **[FE04]** Solicitação de matrícula  | **[US07]** Eu, como estudante, desejo poder solicitar a matricula em uma trilha, para compor minha grade horária.|
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas   | **[FE04]** Solicitação de matrícula  | **[US08]** Eu, como estudante, desejo poder solicitar a matricula em disciplinas eletivas disponíveis, para compor minha grade horária.|
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas   | **[FE05]** Visualização de oferta de disciplinas  | **[US09]** Eu, como estudante, desejo poder visualizar trilhas e as disciplinas eletivas recomendadas, para me orientar na escolha das disciplinas.|
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas| **[FE06]** Visualização do resultado da solicitação de matrícula  | **[US10]** Eu, como estudante, desejo poder viualizar o resultado das minhas solicitacoes de matricula, para saber se fui matriculado ou não.|
| **[EP03]** Gestão de matrículas  | **[CA04]** Gestão do administrador com as matrículas | **[FE07]** Relatórios de matrículas  | **[US11]** Eu, como administrador, desejo ser capaz de abrir o período de matrícula, para que os alunos possam se matricular.|
| **[EP03]** Gestão de matrículas  | **[CA04]** Gestão do administrador com as matrículas | **[FE07]** Relatórios de matrículas  | **[US12]** Eu, como administrador, desejo ser capaz de fechar o período de matrícula, para realizar o processamento de matrículas.|
| **[EP03]** Gestão de matrículas  | **[CA04]** Gestão do administrador com as matrículas | **[FE07]** Relatórios de matrículas  | **[US13]** Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados|
| **[EP04]** Gestão de dados  | **[CA05]** Tratamento de dados importados  | **[FE08]** Importação de dados | **[US14]** Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema. |

## Valoração dos Épicos
| Épico              | Complexidade Técnica | Valor de Negócio | Média |
|--------------------|------------------|--------------|----------|
| **[EP01]** Gestão de usuários da plataforma |3|4|3,5|
| **[EP02]** Gestão de disciplinas|4|5|4,5|
| **[EP03]** Gestão de matrículas |4|5|4,5|
| **[EP04]** Gestão de dados |4|4|4|


## Valoração das User Stories
Organização das US por Épicos por ordem de média do VN (valor de negócio) e complexidade técnica.



