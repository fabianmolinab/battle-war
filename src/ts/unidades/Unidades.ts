export class Unidades {
    private vidaMaxima: number;
    private valor1: number;
    private valor2: number;

    constructor(vidaMaxima: number, valor1: number, valor2: number) {
        this.vidaMaxima = vidaMaxima;
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    public get getVidaMaxima(): number {
        return this.vidaMaxima;
    }

    public set setVidaMaxima(vidaMaxima: number) {
        this.vidaMaxima = vidaMaxima;
    }

    calculoPorcentajeVidaUnidad(): number {
        return this.valor1 / this.valor2;
    }

    calculoVidaMaxima(): number {
        this.vidaMaxima = this.vidaMaxima * this.calculoPorcentajeVidaUnidad();
        return this.vidaMaxima;
    }
}
