export class Unidades {
    private vidaMaxima: number;
    private valorPorcentajeVida1: number;
    private valorPorcentajeVida2: number;

    constructor(vidaMaxima: number, valorPorcentajeVida1: number, valorPorcentajeVida2: number) {
        this.vidaMaxima = vidaMaxima;
        this.valorPorcentajeVida1 = valorPorcentajeVida1;
        this.valorPorcentajeVida2 = valorPorcentajeVida2;
    }

    public get getVidaMaxima(): number {
        return this.vidaMaxima;
    }

    public set setVidaMaxima(vidaMaxima: number) {
        this.vidaMaxima = vidaMaxima;
    }

    calculoPorcentajeVidaUnidad(): number {
        return this.valorPorcentajeVida1 / this.valorPorcentajeVida2;
    }

    calculoVidaMaxima(): number {
        this.vidaMaxima = this.vidaMaxima * this.calculoPorcentajeVidaUnidad();
        return this.vidaMaxima;
    }
}
