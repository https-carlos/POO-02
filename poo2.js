class Contato {
    constructor(nome, telefone, email) {
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
    }

    get nome() {
        return this._nome;
    }

    get telefone() {
        return this._telefone;
    }

    get email() {
        return this._email;
    }

    exibirInfo() {
        return `Nome: ${this._nome}, Telefone: ${this._telefone}, Email: ${this._email}`;
    }
}

class Cliente extends Contato {
    constructor(nome, telefone, email, empresa) {
        super(nome, telefone, email);
        this._empresa = empresa;
    }

    get empresa() {
        return this._empresa;
    }

    exibirInfo() {
        return `${super.exibirInfo()}, Empresa: ${this._empresa}`;
    }
}

class Amigo extends Contato {
    constructor(nome, telefone, email, dataAniversario) {
        super(nome, telefone, email);
        this._dataAniversario = dataAniversario;
    }

    get dataAniversario() {
        return this._dataAniversario;
    }

    exibirInfo() {
        return `${super.exibirInfo()}, Data de Aniversário: ${this._dataAniversario}`;
    }
}

class ColegaDeTrabalho extends Contato {
    constructor(nome, telefone, email, departamento) {
        super(nome, telefone, email);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    exibirInfo() {
        return `${super.exibirInfo()}, Departamento: ${this._departamento}`;
    }
}

class Agenda {
    constructor() {
        this._contatos = [];
    }

    adicionarContato(contato) {
        this._contatos.push(contato);
    }

    editarContato(index, nome, telefone, email) {
        if (index >= 0 && index < this._contatos.length) {
            this._contatos[index]._nome = nome;
            this._contatos[index]._telefone = telefone;
            this._contatos[index]._email = email;
        }
    }

    excluirContato(index) {
        if (index >= 0 && index < this._contatos.length) {
            this._contatos.splice(index, 1);
        }
    }

    pesquisarContatos(termo) {
        return this._contatos.filter(contato => contato._nome.toLowerCase().includes(termo.toLowerCase()));
    }

    listarContatos() {
        return this._contatos.map(contato => contato.exibirInfo());
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

