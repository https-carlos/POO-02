class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    exibirInfo() {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}`;
    }
}

class Cliente extends Contato {
    constructor(nome, telefone, email, empresa) {
        super(nome, telefone, email);
        this.empresa = empresa;
    }

    exibirInfo() {
        return `${super.exibirInfo()}, Empresa: ${this.empresa}`;
    }
}

class Amigo extends Contato {
    constructor(nome, telefone, email, dataAniversario) {
        super(nome, telefone, email);
        this.dataAniversario = dataAniversario;
    }

    exibirInfo() {
        return `${super.exibirInfo()}, Data de Aniversário: ${this.dataAniversario}`;
    }
}

class ColegaDeTrabalho extends Contato {
    constructor(nome, telefone, email, departamento) {
        super(nome, telefone, email);
        this.departamento = departamento;
    }

    exibirInfo() {
        return `${super.exibirInfo()}, Departamento: ${this.departamento}`;
    }
}

class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    editarContato(index, nome, telefone, email) {
        if (index >= 0 && index < this.contatos.length) {
            this.contatos[index].nome = nome;
            this.contatos[index].telefone = telefone;
            this.contatos[index].email = email;
        }
    }

    excluirContato(index) {
        if (index >= 0 && index < this.contatos.length) {
            this.contatos.splice(index, 1);
        }
    }

    pesquisarContatos(termo) {
        return this.contatos.filter(contato => contato.nome.toLowerCase().includes(termo.toLowerCase()));
    }

    listarContatos() {
        return this.contatos.map(contato => contato.exibirInfo());
    }
}

const agenda = new Agenda();

function mostrarMenu() {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar Contato");
    console.log("2. Listar Contatos");
    console.log("3. Pesquisar Contatos");
    console.log("4. Excluir Contato");
    console.log("5. Modificar Contato");
    console.log("6. Sair");

    const opcao = prompt("Digite o número da opção desejada (1/2/3/4/5/6):");

    switch (opcao) {
        case "1":
            adicionarContato();
            break;
        case "2":
            listarContatos();
            break;
        case "3":
            pesquisarContatos();
            break;
        case "4":
            excluirContato();
            break;
        case "5":
            modificarContato();
            break;
        case "6":
            console.log("Saindo da aplicação.");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            mostrarMenu();
    }
}

function adicionarContato() {
    const tipoContato = prompt("Escolha o tipo de contato (Cliente, Amigo, ColegaDeTrabalho):");

    const nome = prompt("Nome:");
    const telefone = prompt("Telefone:");
    const email = prompt("Email:");

    if (tipoContato === "Cliente") {
        const empresa = prompt("Empresa:");
        const novoContato = new Cliente(nome, telefone, email, empresa);
        agenda.adicionarContato(novoContato);
    } else if (tipoContato === "Amigo") {
        const dataAniversario = prompt("Data de Aniversário:");
        const novoContato = new Amigo(nome, telefone, email, dataAniversario);
        agenda.adicionarContato(novoContato);
    } else if (tipoContato === "ColegaDeTrabalho") {
        const departamento = prompt("Departamento:");
        const novoContato = new ColegaDeTrabalho(nome, telefone, email, departamento);
        agenda.adicionarContato(novoContato);
    } else {
        console.log("Tipo de contato inválido.");
    }

    mostrarMenu();
}

function listarContatos() {
    const contatos = agenda.listarContatos();
    if (contatos.length === 0) {
        console.log("Nenhum contato cadastrado.");
    } else {
        console.log("Lista de Contatos:");
        console.log(contatos.join("\n"));
    }
    mostrarMenu();
}

function pesquisarContatos() {
    const termo = prompt("Digite o termo de pesquisa:");
    const resultados = agenda.pesquisarContatos(termo);
    if (resultados.length === 0) {
        console.log("Nenhum contato encontrado.");
    } else {
        console.log("Contatos encontrados:");
        resultados.forEach((contato, index) => {
            console.log(`Índice: ${index}, ${contato.exibirInfo()}`);
        });
    }
    mostrarMenu();
}

function excluirContato() {
    const index = prompt("Digite o índice do contato que deseja excluir:");
    agenda.excluirContato(index);
    console.log("Contato excluído com sucesso.");
    mostrarMenu();
}

function modificarContato() {
    const index = prompt("Digite o índice do contato que deseja modificar:");
    const nome = prompt("Novo nome:");
    const telefone = prompt("Novo telefone:");
    const email = prompt("Novo email:");
    agenda.editarContato(index, nome, telefone, email);
    console.log("Contato modificado com sucesso.");
    mostrarMenu();
}

mostrarMenu();

