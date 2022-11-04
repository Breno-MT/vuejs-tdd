import { subtraiNumeros } from "@/exercicios/exercicio-6";

describe("testes da função subtraiNumeros", () => {
    it("retorna entrada invalida se o x não for um numero", () => {
        expect(subtraiNumeros("não sei", 5)).toBe("entrada inválida");
    });

    it("retorna entrada invalida se o y não for um numero", () => {
        expect(subtraiNumeros(5, "teste")).toBe("entrada inválida");
    });
    
    it("passando 2 parametros invalidos", () => {
        expect(subtraiNumeros("teste", "teste")).toBe("entrada inválida");
    });

    it("passando 2 parametros validos", () => {
        expect(subtraiNumeros(5,5)).toBe(0);
    });

    it("passando numeros float no parametros", () => {
        expect(subtraiNumeros(5,4.5)).toBe(0.5);
    });

    it("passando 2 numeros negativos no parametro", () => {
        expect(subtraiNumeros(-1,-1)).toBe(0);
    });

    it("passando 1 numero negativo e outro positivo", () => {
        expect(subtraiNumeros(-10, 5)).toBe(-15);
    });

    it("passando nenhum parametro", () => {
        expect(subtraiNumeros()).toBe("entrada inválida");
    });
});