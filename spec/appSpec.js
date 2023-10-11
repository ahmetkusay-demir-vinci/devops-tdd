import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function(){
    it("demo function should return 1", function() { 
        // Arrange (On prépare ce dont on a besoin pour exécuter le test)
        let main = new Main();

        // Act (On exécute la fonction qu'on veut tester)
        let result = main.demo();

        // Assert (On vérifie le résultat attendu)
        expect(result).toBe(1);
    });

    // Écrire un test
    it("fizzBuzz function return 1 when given 1", function() {
        let main = new Main();

        let result = main.fizzByzz(1);

        expect(result).toBe(1);
    })
});
