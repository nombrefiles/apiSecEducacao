class Aluno {

    private _nome: string;
    private _idade: number;
    private _escola: string;
    private _altura: number;
    private _peso: number;
    private _envergadura: number;
    private _perimetroDaCintura: number;
    
    // TESTES
    private _testeDeFlexibilidade: number;
    private _testeAbdominal: number;
    private _testeDeVelocidade: number;
    private _testeDeAgilidade: number;
    private _testeMedicineBall: number;
    private _teste6Minutos: number;
    private _testeDeSalto: number;

    public getIMC(altura: number, peso: number): number {
        return peso / (altura * altura);
    }

    public getRCE(perimetroDaCintura: number, altura: number): number {
        return (perimetroDaCintura / altura);
    }


    constructor(nome: string, idade: number, escola: string, altura: number, peso: number, envergadura: number, perimetroDaCintura: number, testeDeFlexibilidade: number, testeAbdominal: number, testeDeVelocidade: number, testeDeAgilidade: number, testeMedicineBall: number, teste6Minutos: number, testeDeSalto: number) {
        this._nome = nome;
        this._idade = idade;
        this._escola = escola;
        this._altura = altura;
        this._peso = peso;
        this._envergadura = envergadura;
        this._perimetroDaCintura = perimetroDaCintura;
        this._testeDeFlexibilidade = testeDeFlexibilidade;
        this._testeAbdominal = testeAbdominal;
        this._testeDeVelocidade = testeDeVelocidade;
        this._testeDeAgilidade = testeDeAgilidade;
        this._testeMedicineBall = testeMedicineBall;
        this._teste6Minutos = teste6Minutos;
        this._testeDeSalto = testeDeSalto;
    }


    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(value: number) {
        this._idade = value;
    }

    get escola(): string {
        return this._escola;
    }

    set escola(value: string) {
        this._escola = value;
    }

    get altura(): number {
        return this._altura;
    }

    set altura(value: number) {
        this._altura = value;
    }

    get peso(): number {
        return this._peso;
    }

    set peso(value: number) {
        this._peso = value;
    }

    get envergadura(): number {
        return this._envergadura;
    }

    set envergadura(value: number) {
        this._envergadura = value;
    }

    get perimetroDaCintura(): number {
        return this._perimetroDaCintura;
    }

    set perimetroDaCintura(value: number) {
        this._perimetroDaCintura = value;
    }

    get testeDeFlexibilidade(): number {
        return this._testeDeFlexibilidade;
    }

    set testeDeFlexibilidade(value: number) {
        this._testeDeFlexibilidade = value;
    }

    get testeAbdominal(): number {
        return this._testeAbdominal;
    }

    set testeAbdominal(value: number) {
        this._testeAbdominal = value;
    }

    get testeDeVelocidade(): number {
        return this._testeDeVelocidade;
    }

    set testeDeVelocidade(value: number) {
        this._testeDeVelocidade = value;
    }

    get testeDeAgilidade(): number {
        return this._testeDeAgilidade;
    }

    set testeDeAgilidade(value: number) {
        this._testeDeAgilidade = value;
    }

    get testeMedicineBall(): number {
        return this._testeMedicineBall;
    }

    set testeMedicineBall(value: number) {
        this._testeMedicineBall = value;
    }

    get teste6Minutos(): number {
        return this._teste6Minutos;
    }

    set teste6Minutos(value: number) {
        this._teste6Minutos = value;
    }

    get testeDeSalto(): number {
        return this._testeDeSalto;
    }

    set testeDeSalto(value: number) {
        this._testeDeSalto = value;
    }
}