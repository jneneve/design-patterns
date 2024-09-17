<h1 align="center">Design Patterns</h1>

<h2>Creational</h2>

<h3>Abstract Factory</h3>

<p>O padrão Abstract Factory oferece uma interface contratual para a criação de famílias de objetos inter-relacionados. A premissa é estabelecer um contrato para uma fábrica, permitindo a criação de múltiplas fábricas. Através dessas fábricas, é possível construir objetos relacionados em tempo de execução, permitindo a escolha da fábrica a ser utilizada.</p>

*Quando se trata de uma classe abstrata, a concepção é que ela não possua implementação completa, ou possua apenas parcialmente. A responsabilidade de implementar o corpo da classe, ou o restante dele, é delegada às subclasses.*

*DTO (Data Transfer Object) é a representação do comportamento de entrada ou saída de um use case.*

<h3>Factory Method</h3>

<p>O padrão Factory Method define uma interface para a criação de objetos, permitindo que a subclasse decida qual instância deve ser criada. Na superclasse, há apenas o método abstrato, delegando à subclasse a responsabilidade de decidir quais objetos ou famílias de objetos associados devem ser criados.</p>

*No processo de desenvolvimento com TDD (Test-Driven Development), é possível definir o design que será utilizado na aplicação.*

*A diferença entre Static Factory Method e Factory Method é que o Static Factory Method (construtores nomeados) oferece uma alternativa para a criação de objetos em vez de utilizar o construtor público, permitindo variações com base nos parâmetros passados ao método. Já o Factory Method permite que a subclasse defina qual subtipo deve ser instanciado.*

<h3>Singleton</h3>

<p>O padrão Singleton assegura que uma classe tenha apenas uma única instância, oferecendo um ponto de acesso global a essa instância.</p>

*As variáveis estáticas definem uma propriedade na classe, e há apenas uma referência para ela. Todas as instâncias da classe compartilham a mesma variável estática.*

*O padrão Singleton pode se tornar um anti-pattern em aplicações multithreaded quando há um contexto compartilhado de dados, pois não há um controle claro sobre quem acessa ou sobrescreve as informações.*

<h3>Prototype</h3>

<p>O padrão Prototype define objetos chamados protótipos que servem como base para a criação de cópias (referências), facilitando a geração de novos objetos por meio da duplicação de objetos já existentes.</p>

<strong>Exemplo:</strong>

<p>A criação de uma instância com "new Date()" faz com que todo objeto Date criado tenha uma referência para um objeto Date que contém suas operações. Essas operações não estão definidas diretamente no objeto criado, mas sim no protótipo desse objeto.</p>

<h3>Builder</h3>

<p>O padrão Builder separa a construção de um objeto complexo de sua representação, permitindo que o mesmo processo de construção possa gerar diferentes objetos ou representações. Esse padrão abstrai o processo passo a passo da construção de um objeto complexo com múltiplos parâmetros.</p>

<p>Além de separar a construção de um objeto complexo de sua representação, o mesmo processo de construção pode gerar diferentes representações.</p>

*A invariância é a condição em que o estado interno de um objeto deve sempre permanecer válido.*

<p>O Director é um objeto que define a ordem em que os métodos de construção de um objeto complexo devem ser chamados, permitindo o reuso de uma configuração específica.</p>
