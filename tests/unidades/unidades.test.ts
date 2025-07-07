import { beforeEach, describe, expect, test } from "vitest";
import { Unidades } from "../../src/ts/unidades/Unidades";

describe("Unidades", () => {
    let unidades: Unidades;
    beforeEach(() => {
        unidades = new Unidades(3400, 500, 2, 10);
    });

    test("comprueba que la clase Unidades exista debe retornar que es tipo function", () => {
        expect(Unidades).toBeTypeOf("function");
    });

    test("comprueba que la instancia Unidades sea un objeto", () => {
        expect(unidades).toBeTypeOf("object");
    });

    test("comprobar que Unidades tenga como propiedad VidaMaxima", () => {
        expect(unidades).toHaveProperty("vidaMaxima");
    });

    test("comprobar que Unidades tenga como propiedad AtaqueMaximo", () => {
        expect(unidades).toHaveProperty("ataqueMaximo");
    });

    test("comprobar el calculo de vida maxima retorne un numero", () => {
        const calculo = unidades.calculoVidaMaxima();
        expect(calculo).toBeTypeOf("number");
    });

    /*test('debería [acción/resultado esperado] cuando [condición/contexto]', () => {});*/
    describe("calculo vida maxima", () => {
        test("deberia calcular la vida maxima de un soldado regular 2500", () => {
            let soldadosRegulares: Unidades;
            soldadosRegulares = new Unidades(2500, 500, 2, 12);

            const porcentaje = 2 / 12;
            const valorinicial = 2500;

            const respuesta: number = porcentaje * valorinicial;

            expect(soldadosRegulares.calculoVidaMaxima()).toBe(respuesta);
        });

        test("deberia calcular la vida maxima de un soldado profesional de 2500 con 3/12", () => {
            const soldadoProfesional: Unidades = new Unidades(2500, 500, 3, 12);
            const procentajeProfesionales = 3 / 12;
            const valorInicialProfesionales = 2500;

            const respuestaSoldadosProfesionales: number =
                procentajeProfesionales * valorInicialProfesionales;

            expect(soldadoProfesional.calculoVidaMaxima()).toBe(
                respuestaSoldadosProfesionales,
            );
        });

        test("deberia mostrar un error cuando se le ingresa numeros negativos en el valor de la vida maxima", () => {
            expect(() => new Unidades(-2500, 500, 3, 12)).toThrow(
                "La vida maxima debe ser positiva",
            );
        });
    });
    describe("calculo ataque maximo ", () => {
        test("deberia comprobar que calculoAtaqueMaximo() retorne un tipo number", () => {
            let calculo = unidades.calculoAtaqueMaximo(1, 2, 3);
            expect(calculo).toBeTypeOf("number");
        });

        test("deberia retornar error si ataqueBase es <0 cuando el numero es negativo ", () => {
            expect(() => unidades.calculoAtaqueMaximo(-1000, 2, 1)).toThrow();
        });

        test("validar el error si valorAtaque1 es negativo ", () => {
            expect(() => unidades.calculoAtaqueMaximo(1000, -2, 1)).toThrow();
        });

        test("validar el error si valorAtaque2 es negativo ", () => {
            expect(() => unidades.calculoAtaqueMaximo(1000, 2, -1)).toThrow();
        });

        test("deberia calcular calculoAtaqueMaximo() el ataque Maximo de un soldado regular que tiene como valor 1/14 de un submarino con valor 500", () => {
            let validarAtaque: Unidades = new Unidades(1, 1, 1, 1);
            const calculo: number = (1 / 14) * 500;

            expect(validarAtaque.calculoAtaqueMaximo(500, 1, 14)).toBe(calculo);
        });

        test("deberia calcular calculoAtaqueMaximo() el ataque Maximo de un soldado profesional que tiene como valor 2/14 de un submarino con valor 500", () => {
            let validarAtaque: Unidades = new Unidades(1, 500, 1, 1);
            const calculo: number = (2 / 14) * 500;

            expect(validarAtaque.calculoAtaqueMaximo(500, 2, 14)).toBe(calculo);
        });

        test("deberia calcular calculoAtaqueMaximo() el ataque Maximo de un soldado profesional que tiene como valor 2/14 como valor base aleatorio", () => {
            let validarAtaque: Unidades = new Unidades(1, 1, 1, 1); //inicialización
            let numeroBase: number = Math.random() * (500 - 1000) + 1000;
            const calculo: number = (2 / 14) * numeroBase; //operación

            expect(validarAtaque.calculoAtaqueMaximo(numeroBase, 2, 14)).toBe(
                calculo,
            );
        });
    });
});
