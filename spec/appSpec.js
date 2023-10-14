import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function(){
    let main = new Main();
    
    // Écrire un test
    it("fizzBuzz function should return 1 when given 1", function() {
        // Act (On exécute la fonction qu'on veut tester)
        let result = main.fizzByzz(1);

        // Assert (On vérifie le résultat attendu)
        expect(result).toBe(1);
    })
    it("fizzBuzz function should return 2 when given 2", function() {
        let result = main.fizzByzz(2);

        expect(result).toBe(2);
    })
    it("fizzBuzz function should return fizz when given 3", function() {
        let result = main.fizzByzz(3);

        expect(result).toBe("fizz");
    })
    // Pas Obligatoire car si c'est pas 3 on return un number
    it("fizzBuzz function should return 4 when given 4", function() {
        let result = main.fizzByzz(4);

        expect(result).toBe(4);
    })
    it("fizzBuzz function should return buzz when given 5", function() {
        let result = main.fizzByzz(5);

        expect(result).toBe("buzz");
    })
    it("fizzBuzz function should return fizz when given 6", function() {
        let result = main.fizzByzz(6);

        expect(result).toBe("fizz");
    })
});
