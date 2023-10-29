## Histórico de revisão

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 25/10/2023 | 0.1 | Criando backlog SAFe | Yasmim Rosa |
| 29/10/2023 | 0.2 | Mesclando células das tabelas | Júlia Yoshida |


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
			<td rowspan="4">[EP02] Gestão de disciplinas	</td>
			<td rowspan="4">[CA02] CRUD de disciplinas	</td>
			<td rowspan="2">[FE02] Crud de eletivas	</td>
			<td>[US03] Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.	</td>
			<td rowspan="4">Facilitar a escolha de disciplinas
</td>
		</tr>
		<tr>
			<td>[US04] Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.
</td>
		</tr>
		<tr>
			<td rowspan="2">[FE03] Crud de trilhas	</td>
			<td>[US05] Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.
</td>
		</tr>
		<tr>
			<td>[US06] Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.
</td>
		</tr>
		<tr>
			<td rowspan="7">[EP03] Gestão de matrículas	</td>
			<td rowspan="4">[CA03] Gestão do estudante com suas matrículas	</td>
			<td rowspan="2">[FE04] Solicitação de matrícula	</td>
			<td>[US07] Eu, como estudante, desejo poder solicitar a matrícula em uma trilha, para compor minha grade horária.	</td>
			<td rowspan="7">Apoiar a coordenação escolar
</td>
		</tr>
		<tr>
			<td>[US08] Eu, como estudante, desejo poder solicitar a matrícula em disciplinas eletivas disponíveis, para compor minha grade horária.
</td>
		</tr>
		<tr>
			<td>[FE05] Visualização de oferta de disciplinas	</td>
			<td>[US09] Eu, como estudante, desejo poder visualizar trilhas e as disciplinas eletivas recomendadas, para me orientar na escolha das disciplinas.
</td>
		</tr>
		<tr>
			<td>[FE06] Visualização do resultado da solicitação de matrícula</td>
			<td>[US10] Eu, como estudante, desejo poder visualizar o resultado da solicitação de matrícula, para saber se fui matriculado ou não.
</td>
		</tr>
		<tr>
			<td rowspan="3">[CA04] Gestão do administrador com as matrículas	</td>
			<td rowspan="3">[FE07] Relatórios de matrículas	</td>
			<td>[US11] Eu, como administrador, desejo ser capaz de abrir o período de matrícula, para que os alunos possam se matricular.
</td>
		</tr>
		<tr>
			<td>[US12] Eu, como administrador, desejo ser capaz de fechar o período de matrícula, para realizar o processamento de matrículas.
</td>
		</tr>
		<tr>
			<td>[US13] Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados
</td>
		</tr>
		<tr>
			<td>[EP04] Gestão de dados	</td>
			<td>[CA05] Tratamento de dados importados	</td>
			<td>[FE08] Importação de dados	</td>
			<td>[US14] Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema.	</td>
			<td>Promover a eficiência da escola</td>
		</tr>
	</tbody>
</table>


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
| **[EP02]** Gestão de disciplinas|4|5|4,5|
| **[EP03]** Gestão de matrículas |4|5|4,5|
| **[EP04]** Gestão de dados |4|4|4|


## Valoração das User Stories
Organização das US por Épicos por ordem de média do VN (valor de negócio) e complexidade técnica.

<table>
	<tbody>
		<tr>
			<td>Épico</td>
			<td>US</td>
			<td>Complexidade Técnica	</td>
			<td>Valor de Negócio	</td>
			<td>Média</td>
		</tr>
		<tr>
			<td rowspan="4">[EP02] Gestão de disciplinas	</td>
			<td>[US03] Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.	</td>
			<td>2</td>
			<td>5</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US04] Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.	</td>
			<td>2</td>
			<td>5</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US05] Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.	</td>
			<td>3</td>
			<td>5</td>
			<td>4</td>
		</tr>
		<tr>
			<td>[US06] Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.	</td>
			<td>2</td>
			<td>5</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td rowspan="7">[EP03] Gestão de matrículas	</td>
			<td>[US07] Eu, como estudante, desejo poder solicitar a matricula em uma trilha, para compor minha grade horária.	</td>
			<td>3</td>
			<td>5</td>
			<td>4</td>
		</tr>
		<tr>
			<td>[US08] Eu, como estudante, desejo poder solicitar a matricula em disciplinas eletivas disponíveis, para compor minha grade horária.	</td>
			<td>3</td>
			<td>5</td>
			<td>4</td>
		</tr>
		<tr>
			<td>[US09] Eu, como estudante, desejo poder visualizar trilhas e as disciplinas eletivas recomendadas, para me orientar na escolha das disciplinas.	</td>
			<td>2</td>
			<td>4</td>
			<td>3</td>
		</tr>
		<tr>
			<td>[US10] Eu, como estudante, desejo poder viualizar o resultado das minhas solicitaçoes de matricula, para saber se fui matriculado ou não.	</td>
			<td>3</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US11] Eu, como administrador, desejo ser capaz de abrir o período de matrícula, para que os alunos possam se matricular.	</td>
			<td>4</td>
			<td>5</td>
			<td>4,5</td>
		</tr>
		<tr>
			<td>[US12] Eu, como administrador, desejo ser capaz de fechar o período de matrícula, para realizar o processamento de matrículas.	</td>
			<td>4</td>
			<td>5</td>
			<td>4,5</td>
		</tr>
		<tr>
			<td>[US13] Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados	</td>
			<td>4</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td rowspan="2">[EP01] Gestão de usuários da plataforma	</td>
			<td>[US01] Eu, como usuário, desejo poder inserir minhas credenciais (nome de usuário e senha) para acessar o sistema e utilizar os recursos disponíveis.	</td>
			<td>3</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[US02] Eu, como usuário, desejo poder realizar logout do sistema, para garantir a segurança da minha conta e dos meus dados pessoais.	</td>
			<td>3</td>
			<td>4</td>
			<td>3,5</td>
		</tr>
		<tr>
			<td>[EP04] Gestão de dados	</td>
			<td>[US14] Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema.	</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
		</tr>
	</tbody>
</table>

# MVPs
## MVP 1
| Épico    | Capability     | Feature     | User Story  |
|----------|----------------|-------------|-----|
| **[EP01]** Gestão de usuários da plataforma   | **[CA01]** Gestão de acesso   | **[FE01]** Acesso a plataforma  | **[US01]** Eu, como usuário, desejo poder inserir minhas credenciais (nome de usuário e senha) para acessar o sistema e utilizar os recursos disponíveis. |
| **[EP01]** Gestão de usuários da plataforma   | **[CA01]** Gestão de acesso  | **[FE01]** Acesso a plataforma  | **[US02]** Eu, como usuário, desejo poder realizar logout do sistema, para garantir a segurança da minha conta e dos meus dados pessoais.  |
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas  | **[FE02]** Crud de eletivas  | **[US03]** Eu, como administrador, desejo poder adicionar uma nova matéria eletiva ao catálogo do sistema, para manter o catálogo atualizado.  |
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas   | **[FE02]** Crud de eletivas  | **[US04]** Eu, como administrador, desejo poder remover uma matéria eletiva do catálogo do sistema, para manter o catálogo atualizado.  |
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas   | **[FE03]** Crud de trilhas  | **[US05]** Eu, como administrador, desejo poder criar uma nova trilha, para manter o catálogo atualizado.  |Facilitar a escolha de disciplinas|
| **[EP02]** Gestão de disciplinas  | **[CA02]** CRUD de disciplinas   | **[FE03]** Crud de trilhas  | **[US06]** Eu, como administrador, desejo poder excluir uma trilha, para manter o catálogo atualizado.  |Facilitar a escolha de disciplinas|

## MVP 2
| Épico    | Capability     | Feature     | User Story  |
|----------|----------------|-------------|-----|
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas   | **[FE04]** Solicitação de matrícula  | **[US07]** Eu, como estudante, desejo poder solicitar a matricula em uma trilha, para compor minha grade horária.|
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas   | **[FE04]** Solicitação de matrícula  | **[US08]** Eu, como estudante, desejo poder solicitar a matricula em disciplinas eletivas disponíveis, para compor minha grade horária.|
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas   | **[FE05]** Visualização de oferta de disciplinas  | **[US09]** Eu, como estudante, desejo poder visualizar trilhas e as disciplinas eletivas recomendadas, para me orientar na escolha das disciplinas.|
| **[EP03]** Gestão de matrículas  | **[CA03]** Gestão do estudante com suas matrículas| **[FE06]** Visualização do resultado da solicitação de matrícula  | **[US10]** Eu, como estudante, desejo poder viualizar o resultado das minhas solicitacoes de matricula, para saber se fui matriculado ou não.|
| **[EP03]** Gestão de matrículas  | **[CA04]** Gestão do administrador com as matrículas | **[FE07]** Relatórios de matrículas  | **[US11]** Eu, como administrador, desejo ser capaz de abrir o período de matrícula, para que os alunos possam se matricular.
| **[EP03]** Gestão de matrículas  | **[CA04]** Gestão do administrador com as matrículas | **[FE07]** Relatórios de matrículas  | **[US12]** Eu, como administrador, desejo ser capaz de fechar o período de matrícula, para realizar o processamento de matrículas.|
| **[EP03]** Gestão de matrículas  | **[CA04]** Gestão do administrador com as matrículas | **[FE07]** Relatórios de matrículas  | **[US13]** Eu, como administrador, devo ser capaz de gerar uma lista de estudantes matriculados em uma trilha ou disciplina eletiva, para visualizar todos os estudantes matriculados|
| **[EP04]** Gestão de dados  | **[CA05]** Tratamento de dados importados  | **[FE08]** Importação de dados | **[US14]** Eu, como administrador, desejo poder importar dados básicos dos estudantes (nome, ano escolar e matrícula) de uma fonte externa para o sistema, para realizar as matrículas no sistema. |