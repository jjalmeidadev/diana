<img src="../assets/logointeli.png">


# WAD - Web Application Document - 2nd Module - Inteli

<!-- **_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final_** -->

## Group name: CrownMates
## Project name: Diana

#### Group members' names:

- <a href="https://www.linkedin.com/in/anneestherlf/">Anne Esther Lins Figueirôa</a>
- <a href="https://www.linkedin.com/in/giacomo-zema-matizonkas-7ab9072b2/">Giacomo Zema Matizonkas</a>
- <a href="https://www.linkedin.com/in/jaime-andrade-de-almeida-0777ba2a5/">Jaime Andrade de Almeida</a> 
- <a href="https://www.linkedin.com/in/karolbarbosarocha/">Karol Rocha Barbosa</a> 
- <a href="https://www.linkedin.com/in/let%C3%ADcia-saravia-619b73345/">Leticia Fernandes do Espírito Santo Saravia</a>
- <a href="https://github.com/nicholasmillani">Nicholas Anantha Krishnan Millani</a> 
- <a href="https://www.linkedin.com/in/victor-garcia-dos-santos/">Víctor Garcia dos Santos</a>

## Summary

[1. Introduction](#c1)

[2. Overview of the Web Application](#c2)

[3. Web Application's Technical Project](#c3)

[4. Web Application Development](#c4)

[5. Web Application Tests](#c5)

[6. Market Research and Marketing Plan](#c6)

[7. Conclusions and future work](#c7)

[8. References](c#8)

[Appendices](#c9)

<br>


# <a name="c1"></a>1. Introduction (sprints 1 to 5)

St. Paul’s is a British school located in São Paulo, with nearly 100 years of history. The school identified a problem in the experience of its students’ parents: the official mobile app, used as the main communication channel, presents many limitations. Academic information such as homework, class schedules, number of absences, and announcements are not always available or are difficult to access via mobile phone, which causes disorganization in following their children's school life.

With the aim of solving this issue, St. Paul’s proposed a challenge to first-year students at Inteli: to develop a web portal aimed at parents. The proposal is to offer a platform accessible through a web browser, in a clear, organized, and easy-to-use format. The system will feature a simple and intuitive login screen, students’ personal information, class schedules, absence tracking, as well as a reports section to access information on child's academic performance in a visual way (dashboard).

The project considers the main concerns reported by parents regarding the structure that the school already has. The solution seeks to add value to the community, promoting more efficient communication and encouraging more active participation from parents in their children’s educational journey.

In this way, with more efficient access to information, parents will be able to follow their children’s academic performance more closely and with greater peace of mind.

# <a name="c2"></a>2. Overview of the Web Application (sprint 1)

## 2.1. Project Scope (sprints 1 & 4)

### 2.1.1. 5 forces of Porter's model (sprint 1)

1. Threat of New Entrants → LOW
Very high entry barriers: St. Paul’s has held official recognition from the British Crown since 2012, being the first school in South America to receive this endorsement. This grants the school a high level of exclusivity and institutional authority.


Its robust infrastructure and legacy since 1926 make it difficult for new schools to enter the market with the same prestige.


An internationally qualified teaching staff, bilingual curriculum, and IB programs require significant expertise and financial resources.


High parent and student loyalty: Families who choose St. Paul’s value tradition, bilingual education, and a global outlook — which reduces the likelihood of switching schools.



2. Threat of Substitutes → MODERATE
Indirect competition: Other bilingual or international schools without formal Crown recognition (such as Avenues, Chapel, Graded) may seem like alternatives but lack the same level of institutional legitimacy.


Online education and homeschooling have seen limited adoption in this premium segment.


The symbolic value of an official British diploma as a gateway to top global universities is hard to replace.




3.  Bargaining Power of Suppliers → MODERATE
Key suppliers: bilingual and internationally trained teachers, educational technology companies, and outsourced services.


The school attracts talent through its strong brand name and offers good contractual conditions, reducing dependence on specific suppliers. However, top-tier teachers retain bargaining power as they can move to other elite institutions.


In areas such as educational technology (e.g., platforms tailored to the British curriculum), there may be greater dependence. High-end platforms adapted to British or IB curricula have limited providers and thus stronger pricing power.


Imported educational materials (like British textbooks and IB-specific resources) may be subject to currency fluctuations and logistical issues, increasing dependency.



4. Bargaining Power of Customers (Parents and Students) → MODERATE
Demanding and selective clientele: High-income families focused on international education are vocal about their expectations and standards.


However, the prestige and authority of the official British seal make St. Paul’s an aspirational choice, which limits the direct negotiation power of families.


Institutional exclusivity:
 St. Paul’s is one of the few officially British schools in South America, which drastically limits direct substitute options.


Recognition by the British Crown provides both symbolic and practical prestige that is not easily replicated.


High demand, limited seats:
 The school keeps small class sizes and a limited number of admissions, which creates demand that exceeds supply.


This reverses the bargaining dynamic: the school selects its students — not the other way around.


Strong reputation for results:
 The school’s track record in preparing students for universities in the UK, the US, and elsewhere reinforces parental trust in its educational model.




5. Rivalry Among Existing Competitors → HIGH (but with strong competitive advantage)
Top competitors such as Graded, Chapel, St. Nicholas, and Avenues São Paulo target a similar internationally oriented student profile.


However, none of these schools hold formal British recognition, which places St. Paul’s in a category of its own — as a truly British school.


This unique historical and institutional distinction reduces direct comparability and reinforces the school’s brand leadership in the sector.




### 2.1.2. SWOT Analysis of the Partner Institution (sprint 1)

<!-- *Preencha com até 100 palavras – sem necessidade de fonte*

*Apresente uma visão geral da situação do parceiro com base na matriz SWOT (forças, fraquezas, oportunidades e ameaças). Foque na relação com os concorrentes e o posicionamento da instituição.* -->

St Paul's School boasts a strong academic reputation and a comprehensive international curriculum, propelling its students to prestigious universities globally. Its holistic education and diverse community are strengths. However, the high cost of tuition limits accessibility and can generate perceptions of elitism. The school also faces challenges with its current infrastructure, which prevents significant expansion. Despite this, there are opportunities to strengthen partnerships, adopt innovative educational trends and increase engagement with the local community. Competition from other international schools and economic instability pose constant threats. This concludes the definition of the institution's SWOT analysis.

<div align="center">
  <sub>SWOT Analysis Chart</sub><br>
  <img src="../assets/wad/Visual_Chart_SWOT_Analysis.png" width="100%" 
  alt="SWOT Analysis"><br>
  <sup>Source: authors (image) and partner's website (data)</sup>
</div>

### 2.1.3. Solution (sprints 1 to 5)

**1. Problem to be solved**

The software currently used to access student records at the school is not effectively addressing the problems, especially for parents, who need a well-structured system to better visualize and closely follow their children's daily lives — including grades, assignments, homework, field trips, and more.

**2. Available data (mention source and content; if none, indicate "not applicable")**

Student Age Range (Source: St. Paul's) / Number of Students (Source: St. Paul's).

**3. Proposed solution**

A new software solution that serves as a student history consultant, but in a simpler, more communicative, and direct way — truly making life easier for the parents and students who will use it.

**4. How the solution will be used**

A simple and easy-to-access website that would use an API system to retrieve school data. With a login, you would be able to access all the student's information.

**5. Expected benefits**

The expected benefits are greater pedagogical monitoring by parents, improved reputation of the school, less congestion in service, and the renewal of the school's infrastructure for its centennial, which will take place next year.

**6. Success criteria and how it will be evaluated**

The success criterion is the full functionality of the software, which will be evaluated through the approval of the general public of testers in this first restricted version of the software.

### 2.1.4. Value Proposition Canvas (sprint 1): 
*Sem limite de palavras – usar template do curso*

*Elaborar o Value Proposition Canvas com base na proposta de solução definida.*

<div align="center">
  <sub>Value Proposition Canvas</sub><br>
  <img src="../assets/wad/valuePropositionGraphic.png" width="100%" 
  alt="Value Proposition Canvas"><br>
  <sup>Fonte: Autoral</sup>
</div>


### 2.1.5. Project Risk Matrix (Sprint 1)

According to Tomaz, Gagliasso, and Malavota (2020), the risk matrix is a management tool that assists a project team in identifying the risks and threats that may negatively affect its execution. It is constructed by combining the likelihood of each event occurring with the impact it would have if it materializes. Furthermore, these authors emphasize that developing a risk matrix is an iterative process: it is revisited at each work cycle to ensure that the mapping remains aligned with project changes. In this work, we have chosen to review and update our matrix at the beginning of each sprint.

Before presenting the Risk Matrix itself, it is important to explain how the information is structured. In the table below, we categorize the main risks identified for this sprint based on four elements:
- **Risk Description**: a brief summary of the potential threat.
- **Probability**: the likelihood of the risk occurring (classified as Low, Medium, High, or Very High).
- **Impact**: the severity of the consequences if the risk materializes (also classified as Low, Medium, High, or Very High).
- **Action Plan**: the strategies that will be adopted to mitigate or eliminate the identified risk.

These classifications help the project team prioritize actions and allocate resources effectively throughout the sprint.

<div align="center">
  <sub>Risk Matrix</sub><br>
  <img src="../assets/wad/matrizderisco.jpeg" width="100%" 
  alt="Risk Matrix"><br>
  <sup> Fonte : Autoral(2025)</sup>
</div>

## 2.1.5.1. Risk Matrix

| Risk                                                         | Probability | Impact     | Action Plan                                                                                                                                                                                                                                                                                |
|--------------------------------------------------------------|------------:|-----------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Leakage of sensitive data belonging to parents or students** | High        | Very High  | To mitigate the risk of sensitive data leakage, we will implement end-to-end encryption across all communication channels and storage.                                                                                                                                                     |
| **Performance issues or report latency**                     | Medium      | Medium     | To prevent performance issues, we will optimize database queries and indexes, adopt a caching layer for static reports, and monitor response-time indicators using APM tools configured with alerts for early detection of bottlenecks.                                                      |
| **Responsiveness failures on browsers/devices**               | Medium      | High       | To ensure responsiveness across various devices, we will apply responsive design based on a design system, conduct both manual and automated tests on popular browsers, and review the interface at each sprint before releasing new versions.                                               |
| **Non-compliance with accessibility requirements**           | Low         | Medium     | To ensure compliance with accessibility standards, we will perform testing with users who have special needs.                                                                                                                                                                               |
| **Low parental adoption and engagement (non-intuitive UX)**  | Low         | Very High  | To increase parental adoption, we will conduct usability sessions with real users, iterate on prototypes based on feedback, and develop onboarding materials along with synchronous training sessions to facilitate platform use.                                                             |

## 2.1.5.2. Opportunity Matrix

Identifying opportunities is just as important as mapping risks, as it can significantly enhance the success and value generated by the project. In the Opportunity Matrix below, we categorize the main opportunities detected for this sprint based on four elements:
- **Opportunity Description**: a brief summary of the favorable scenario identified.
- **Probability**: the likelihood that the opportunity will materialize (classified as Low, Medium, High, or Very High).
- **Impact**: the potential positive effect on the project if the opportunity materializes (also classified as Low, Medium, High, or Very High).
- **Action Plan**: the steps that will be taken to capitalize on the opportunity and maximize its benefits.

By proactively addressing these opportunities, the project team aims not only to mitigate risks but also to strengthen user satisfaction, system functionality, and project visibility.

| Opportunity                                                  | Probability  | Impact    | Action Plan                                                                                                                                                                                                                                                        |
|--------------------------------------------------------------|-------------:|----------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Increase in parental engagement**                          | Very High    | Very High | To capitalize on this opportunity, we will introduce gamification elements such as badges and achievements, send personalized progress reports at regular intervals, and organize online events to strengthen the connection between school and family.           |
| **Analytical dashboard with academic performance insights** | High         | High      | To deliver analytical value, we will gather requirements from teachers and coordinators, develop interactive visualizations (charts, heatmaps), and integrate real-time engagement and learning metrics.                                                            |
| **Embedded video tutorials within the portal**               | High         | Medium    | To facilitate the adoption of advanced features, we will produce targeted scripts and integrate them seamlessly into the user interface.                                                                                                                           |
| **Future integration with external calendars**               | Medium       | Low       | To extend the system’s utility, we will evaluate the APIs of Google Calendar and Microsoft Outlook for potential integration.                                                                                                                                     |
| **Implementation of an integrated chat between parents and teachers** | Low | High | To improve communication, we will prototype a chat solution using Socket.io or Firebase Realtime Database, establish clear moderation and privacy policies, and conduct controlled pilot tests prior to full deployment. |

*This matrix will be reviewed at the beginning of each sprint, with probabilities, impacts, and action plans adjusted according to project progress.*

## 2.2. Personas (sprint 1)

*Posicione aqui suas Personas em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

## 2.3. User Stories (sprints 1 a 5)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a mesma referência USXX no roadmap de seu quadro Kanban. Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST das 5 User Stories prioritárias*

*ATUALIZE ESTA SEÇÃO SEMPRE QUE ALGUMA DEMANDA MUDAR EM SEU PROJETO*

*Template de User Story*
Identificação | USXX (troque XX por numeração ordenada das User Stories)
--- | ---
Persona | nome da Persona
User Story | "como (papel/perfil), posso (ação/meta), para (benefício/razão)"
Critério de aceite 1 | CR1: descrever cenário + testes de aceite
Critério de aceite 2 | CR2: descrever cenário + testes de aceite
Critério de aceite ... | CR...
Critérios INVEST | *(Por que é Independente? Por que é Negociável? Por que é Valorosa? Por que é Estimável? Por que é Pequena? Por que é Testável?)*

# <a name="c3"></a>3. Web Application's Technical Project (sprints 1 a 4)

## 3.1. Architecture (sprints 3 e 4)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário*

## 3.2. Wireframes (sprint 2)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)*

## 3.3. Style guide (sprint 3)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução*

### 3.3.1 Colors

*Apresente aqui a paleta de cores, com seus códigos de aplicação e suas respectivas funções*

### 3.3.2 Typography

*Apresente aqui a tipografia da solução, com famílias de fontes e suas respectivas funções*

### 3.3.3 Iconography and images

*(esta subseção é opcional, caso não existam ícones e imagens, apague esta subseção)*

*posicione aqui imagens e textos contendo exemplos padronizados de ícones e imagens, com seus respectivos atributos de aplicação, utilizadas na solução*

## 3.4 High-fidelity prototype (sprint 3)

*posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)*

## 3.5. Database modelling (sprints 2 e 4)

### 3.5.1. Relational model (sprints 2 e 4)

*posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário* 

### 3.5.2. SQL queries and propositional logic (sprint 2)

*posicione aqui uma lista de consultas SQL compostas, realizadas pelo back-end da aplicação web, com sua respectiva lógica proposicional, descrita conforme template abaixo. Lembre-se que para usar LaTeX em markdown, basta você colocar as expressões entre $ ou $$*

*Template de SQL + lógica proposicional*
#1 | ---
--- | ---
**Expressão SQL** | SELECT * FROM suppliers WHERE (state = 'California' AND supplier_id <> 900) OR (supplier_id = 100); 
**Proposições lógicas** | $A$: O estado é 'California' (state = 'California') <br> $B$: O ID do fornecedor não é 900 (supplier_id ≠ 900) <br> $C$: O ID do fornecedor é 100 (supplier_id = 100)
**Expressão lógica proposicional** | $(A \land B) \lor C$
**Tabela Verdade** | <table> <thead> <tr> <th>$A$</th> <th>$B$</th> <th>$C$</th> <th>$(A \land B)$</th> <th>$(A \land B) \lor C$</th> </tr> </thead> <tbody> <tr> <td>F</td> <td>F</td> <td>F</td> <td>F</td> <td>F</td> </tr> <tr> <td>F</td> <td>F</td> <td>V</td> <td>F</td> <td>V</td> </tr> <tr> <td>F</td> <td>V</td> <td>F</td> <td>F</td> <td>F</td> </tr> <tr> <td>F</td> <td>V</td> <td>V</td> <td>F</td> <td>V</td> </tr> <tr> <td>V</td> <td>F</td> <td>F</td> <td>F</td> <td>F</td> </tr> <tr> <td>V</td> <td>F</td> <td>V</td> <td>F</td> <td>V</td> </tr> <tr> <td>V</td> <td>V</td> <td>F</td> <td>V</td> <td>V</td> </tr> <tr> <td>V</td> <td>V</td> <td>V</td> <td>V</td> <td>V</td> </tr> </tbody> </table>

*Dica: edite a tabela verdade fora do markdown, para ter melhor controle*

## 3.6. WebAPI and endpoints (sprints 3 e 4)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.* 

*Cada endpoint deve conter endereço, método (GET, POST, PUT, PATCH, DELETE), header, body e formatos de response*

# <a name="c4"></a>4. Web Application Development

## 4.1. First version of the web application (sprint 3)

*Descreva e ilustre aqui o desenvolvimento da sua primeira versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.2. Second version of the web application (sprint 4)

*Descreva e ilustre aqui o desenvolvimento da sua segunda versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.3. Final version of the web application (sprint 5)

*Descreva e ilustre aqui o desenvolvimento da última versão do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

# <a name="c5"></a>5. Tests

## 5.1. Automated endpoint integration test report (sprint 4)

*Liste e descreva os testes unitários dos endpoints criados, automatizados e planejados para sua solução. Posicione aqui também o relatório de cobertura de testes Jest se houver (através de link ou transcrito para estrutura markdown)*

## 5.2. Usability tests (sprint 5)

*Posicione aqui as tabelas com enunciados de tarefas, etapas e resultados de testes de usabilidade. Ou utilize um link para seu relatório de testes (mantenha o link sempre público para visualização)*

# <a name="c6"></a>6. Market Research and Marketing Plan (sprint 4)

## 6.1 Executive Summary

*Preencher com até 300 palavras, sem necessidade de fonte*

*Apresente de forma clara e objetiva os principais destaques do projeto: oportunidades de mercado, diferenciais competitivos da aplicação web e os objetivos estratégicos pretendidos.*

## 6.2 Market Analysis

*a) Visão Geral do Setor (até 250 palavras)*
*Contextualize o setor no qual a aplicação está inserida, considerando aspectos econômicos, tecnológicos e regulatórios. Utilize fontes confiáveis.*

*b) Tamanho e Crescimento do Mercado (até 250 palavras)*
*Apresente dados quantitativos sobre o tamanho atual e projeções de crescimento do mercado. Utilize fontes confiáveis.*

*c) Tendências de Mercado (até 300 palavras)*
*Identifique e analise tendências relevantes (tecnológicas, comportamentais e mercadológicas) que influenciam o setor. Utilize fontes confiáveis.*

## 6.3 Competitor Analysis

*a) Principais Concorrentes (até 250 palavras)*
*Liste os concorrentes diretos e indiretos, destacando suas principais características e posicionamento no mercado.*

*b) Vantagens Competitivas da Aplicação Web (até 250 palavras)*
*Descreva os diferenciais da sua aplicação em relação aos concorrentes, sem necessidade de citação de fontes.*


## 6.4 Target audience

*a) Segmentação de Mercado (até 250 palavras)*
Descreva os principais segmentos de mercado a serem atendidos pela aplicação. Utilize bases de dados e fontes confiáveis.*

*b) Perfil do Público-Alvo (até 250 palavras)*
*Caracterize o público-alvo com dados demográficos, psicográficos e comportamentais, incluindo necessidades específicas. Utilize fontes obrigatórias.*


## 6.5 Positioning

*a) Proposta de Valor Única (até 250 palavras)*
*Defina de maneira clara o que torna a sua aplicação única e valiosa para o mercado.*

*b) Estratégia de Diferenciação (até 250 palavras)*
*Explique como sua aplicação se destacará da concorrência, evidenciando a lógica por trás do posicionamento.*

## 6.6 Marketing Strategy 

*a) Produto/Serviço (até 200 palavras)*
*Descreva as funcionalidades, benefícios e diferenciais da aplicação*

*6.2 Preço (até 200 palavras)*
*Explique o modelo de precificação adotado e justifique com base nas análises anteriores.*

*6.3 Praça (Distribuição) (até 200 palavras)*
*Apresente os canais digitais utilizados para distribuir e entregar a aplicação ao público.*

*6.4 Promoção (até 200 palavras)*
*Descreva as estratégias digitais planejadas, como SEO, redes sociais, marketing de conteúdo e campanhas pagas.*

# <a name="c7"></a>7. Conclusions and future work (sprint 5)

*Escreva de que formas a solução da aplicação web atingiu os objetivos descritos na seção 2 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral.*

*Relacione os pontos de melhorias evidenciados nos testes com planos de ações para serem implementadas. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para ações futuras*

*Relacione também quaisquer outras ideias que o grupo tenha para melhorias futuras*

# <a name="c8"></a>8. References (sprints 1 a 5)

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

LUCK, Heloisa. Liderança em gestão escolar. 4. ed. Petrópolis: Vozes, 2010. <br>
SOBRENOME, Nome. Título do livro: subtítulo do livro. Edição. Cidade de publicação: Nome da editora, Ano de publicação. <br>

INTELI. Adalove. Disponível em: https://adalove.inteli.edu.br/feed. Acesso em: 1 out. 2023 <br>
SOBRENOME, Nome. Título do site. Disponível em: link do site. Acesso em: Dia Mês Ano

# <a name="c9"></a>Appendices

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*
