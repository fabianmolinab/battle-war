export class Unidades {
    private vidaMaxima: number;
    private ataqueMaximo: number;
    private valorPorcentajeVida1: number;
    private valorPorcentajeVida2: number;

    constructor(
        vidaMaxima: number,
        ataqueMaximo: number,
        valorPorcentajeVida1: number,
        valorPorcentajeVida2: number,
    ) {
        if (vidaMaxima <= 0)
            throw new Error("La vida maxima debe ser positiva");
        if (ataqueMaximo <= 0)
            throw new Error("El ataque maximo deber ser positivo");
        if (valorPorcentajeVida1 <= 0)
            throw new Error("valorPorcentajeVida debe ser positivo");
        if (valorPorcentajeVida2 <= 0)
            throw new Error("valorPorcentajeVida2 debe ser positivo");

        this.vidaMaxima = vidaMaxima;
        this.ataqueMaximo = ataqueMaximo;
        this.valorPorcentajeVida1 = valorPorcentajeVida1;
        this.valorPorcentajeVida2 = valorPorcentajeVida2;
    }

    public get getVidaMaxima(): number {
        return this.vidaMaxima;
    }

    public set setVidaMaxima(vidaMaxima: number) {
        this.vidaMaxima = vidaMaxima;
    }

    protected calculoPorcentajeVidaUnidad(): number {
        return this.valorPorcentajeVida1 / this.valorPorcentajeVida2;
    }

    calculoVidaMaxima(): number {
        this.vidaMaxima = this.vidaMaxima * this.calculoPorcentajeVidaUnidad();
        return this.vidaMaxima;
    }

    calculoAtaqueMaximo(
        ataqueBase: number,
        valorAtaque1: number,
        valorAtaque2: number,
    ): number {
        if (ataqueBase < 0) {
            throw new Error("los parametros no pueden ser negativos");
        }
        if (valorAtaque1 < 0) {
            throw new Error("valorAtaque1 no pueden ser negativos");
        }
        if (valorAtaque2 < 0) {
            throw new Error("valorAtaque2 no pueden ser negativos");
        }
        this.ataqueMaximo = (valorAtaque1 / valorAtaque2) * ataqueBase;

        return this.ataqueMaximo;
    }
}
