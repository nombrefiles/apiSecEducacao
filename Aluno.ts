declare function require(path:string): any;

type Gender = "M" | "F"
type profile = {
    name: string;
    age: number;
    gender: Gender;
    school: string;
    height: number;
    weight: number;
    spread: number;
    waist: number;
    flexibility: number;
    abdominal: number;
    speed: number;
    agility: number;
    strength: number;
    sixMin: number;
    jump: number;
    imc: number;
    rce: number;
    results: {
        imc: boolean,
        rce: boolean,
        flexibility: boolean;
        abdominal: boolean;
        speed: boolean;
        agility: boolean;
        strength: boolean;
        sixMin: boolean;
        jump: boolean;
    }
};

class Aluno {

    private _nome: string;
    private _idade: number;
    private _genero: Gender;
    private _escola: string;
    private _altura: number;
    private _peso: number;
    private _envergadura: number;
    private _perimetroDaCintura: number;

    private _testeDeFlexibilidade: number;
    private _testeAbdominal: number;
    private _testeDeVelocidade: number;
    private _testeDeAgilidade: number;
    private _testeMedicineBall: number;
    private _teste6Minutos: number;
    private _testeDeSalto: number;

    get IMC(): number {
        return this._peso / (this._altura * this._altura);
    }

    get RCE(): number {
        return (this._perimetroDaCintura / this._altura);
    }

    constructor(nome: string, idade: number, genero: Gender, escola: string, altura: number, peso: number, envergadura: number, perimetroDaCintura: number, testeDeFlexibilidade: number, testeAbdominal: number, testeDeVelocidade: number, testeDeAgilidade: number, testeMedicineBall: number, teste6Minutos: number, testeDeSalto: number) {
        this._nome = nome;
        this._idade = idade;
        this._genero = genero;
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

        if (idade < 6 || idade > 17){
            throw new Error("Idade deve estar entre 6 e 17 anos!");
        }

        if (altura <= 0 || peso <= 0){
            throw new Error("Peso e altura devem ser positivos e não nulos!");
        }
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

    get genero(): Gender {
        return this._genero;
    }

    set genero(value: Gender) {
        this._genero = value;
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

    public analyse(): profile{
        try{
            const parameters = require('parameters.json')
            const values = parameters[this.genero][this.idade]

            let data: profile = {
                name: this._nome,
                age: this._idade,
                gender: this._genero,
                school: this._escola,
                height: this._altura,
                weight: this._peso,
                spread: this._envergadura,
                waist: this._perimetroDaCintura,
                flexibility: this._testeDeFlexibilidade,
                abdominal: this._testeAbdominal,
                speed: this._testeDeVelocidade,
                agility: this._testeDeAgilidade,
                strength: this._testeMedicineBall,
                sixMin: this._teste6Minutos,
                jump: this._testeDeSalto,
                imc: this.IMC,
                rce: this.RCE,
                results: {
                    imc: this.IMC < values.imc,
                    rce: this.RCE < 0.5,
                    flexibility: this.testeDeFlexibilidade > values.flexibility,
                    abdominal: this.testeAbdominal > values.abdominal,
                    speed: this.testeDeVelocidade > values.speed,
                    agility: this.testeDeAgilidade > values.agility,
                    strength: this.testeMedicineBall > values.strength,
                    sixMin: this.teste6Minutos > values.sixMin,
                    jump: this.testeDeSalto > values.jump
                }
            }

            return data
        } catch (e) {
            throw new Error('Erro na requisição dos dados' + e.message);
        }

    }



}