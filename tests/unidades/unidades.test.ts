import { describe, test, beforeEach, expect } from "vitest";
import { Unidades } from "../../src/ts/unidades/Unidades";

describe("Unidades", () => {
    let unidades: Unidades;
    beforeEach(() => {
        unidades = new Unidades(3400, 2, 10);
    });

    test("comprueba que la clase Unidades sea un function", () => {
        expect(Unidades).toBeTypeOf("function");
    });

    test("comprueba que la instancia Unidades sea un objeto", () => {
        expect(unidades).toBeTypeOf("object");
    });

    test("comprobar que Unidades tenga como atributo VidaMaxima", () => {
        expect(unidades).toHaveProperty("vidaMaxima");
    });

    test("comprobar el calculo de vida maxima retorne un numero", () => {
        const calculo = unidades.calculoVidaMaxima();
        expect(calculo).toBeTypeOf("number");
    });

    test("comprobar el calculo de vida maxima tome el valor inicial por el porcentaje", () => {
        //Soldados Regulares
        let soldadosRegulares: Unidades;
        soldadosRegulares = new Unidades(2500, 2, 12);

        const porcentaje = 2 / 12;
        const valorinicial = 2500;

        const respuesta: number = porcentaje * valorinicial;

        expect(soldadosRegulares.calculoVidaMaxima()).toBe(respuesta);

        //Soldados Profesionales
        let soldadoProfesional: Unidades = new Unidades(2500, 3, 12);
        const procentajeProfesionales = 3 / 12;
        let valorInicialProfesionales = 2500;

        const respuestaSoldadosProfesionales: number =
            procentajeProfesionales * valorInicialProfesionales;

        expect(soldadoProfesional.calculoVidaMaxima()).toBe(
            respuestaSoldadosProfesionales,
        );
    });
});
