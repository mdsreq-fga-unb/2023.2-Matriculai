# Arquitetura

## Histórico de revisão

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 16/11/2023 | 0.1 | Adicionando tipo de arquitetura e estilo arquitetural | Júlia Yoshida |

## Tipo: Em camadas

- Usado em projetos de médio a grande porte que exigem uma separação clara de responsabilidades;
- Aplicação é dividida em camadas lógicas separadas (apresentação,lógica de negócios, acesso de dados);
- Cada camada tem responsabilidades específicas e se comunica com as camadas adjacentes.

        
<p style="text-indent: 50px;text-align: justify;"> Entre os motivos para a seleção desse tipo de arquitetura estão: </p>
        
- Modularidade e reutilização de código: cada camada promove pode ser testada e desenvolvida de forma independente;
- Separação de responsabilidades: ajuda a organizar o código de forma clara e a manter a lógica de negócios isolada da interface do usuário e do acesso a dados;
- Facilita a manutenção e escalabilidade.

## Estilo: MVC

<p style="text-indent: 50px;text-align: justify;"> O MVC foi o estilo arquitetural escolhido pela familiaridade dos membros do grupo com o mesmo, além de casar bem com a arquitetura em camadas, por também ser dividido em camadas. Separa a apresentação e interação dos dados do sistema. O sistema está estruturado em três componentes lógicos que interagem entre si: </p>

- Model: gerencia os dados do sistema e as operações associadas a esses dados;
- View: define e gerencia como os dados são apresentados ao usuário;
- Controller: gerencia  a interação do usuário (por exemplo, pressionamentos de tecla, cliques do mouse, etc.) e passa essas interações para a view e o model.

