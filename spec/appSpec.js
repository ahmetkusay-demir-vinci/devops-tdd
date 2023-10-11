import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function(){
    // Écrire un test
    it("fizzBuzz function should return 1 when given 1", function() {
        // Arrange (On prépare ce dont on a besoin pour exécuter le test)
        let main = new Main();

        // Act (On exécute la fonction qu'on veut tester)
        let result = main.fizzByzz(1);

        // Assert (On vérifie le résultat attendu)
        expect(result).toBe(1);
    })
    it("fizzBuzz function should return 2 when given 2", function() {
        let main = new Main();

        let result = main.fizzByzz(2);

        expect(result).toBe(2);
    })
    it("fizzBuzz function should return fizz when given 3", function() {
        let main = new Main();

        let result = main.fizzByzz(3);

        expect(result).toBe("fizz");
    })
});
