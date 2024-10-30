describe('Nueva Tarea', () => {

    // Ejercicio 1

    it('Agregar una tarea a la lista', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/'); // Enlace para conectar con la página 

        cy.get('.new-todo').type('Tarea 1').type('{enter}'); // Rellena el campo de tarea

        cy.get('.todo-list').contains('Tarea 1'); // Comprobar que la tarea a sido añadida
    })

    // Ejercicio 2

    it('Agregar una tarea a la lista y marcarla como completada', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/'); // Enlace para conectar con la página 

        cy.get('.new-todo').type('Tarea 1').type('{enter}'); // Rellena el campo de tarea

        cy.get('.todo-list').contains('Tarea 1'); // Comprobar que la tarea a sido añadida

        cy.get('.todo-list').contains('Tarea 1').parents('li').find('input[type="checkbox"]').check({ force: true }); // Busca dentro la lista y la marca como completada

    })

    // Ejercicio 3

    it('Agregar una tarea a la lista, marcarla como completada y desmarcarla', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/'); // Enlace para conectar con la página 

        cy.get('.new-todo').type('Tarea 1').type('{enter}'); // Rellena el campo de tarea

        cy.get('.todo-list').contains('Tarea 1'); // Comprobar que la tarea a sido añadida

        cy.get('.todo-list').contains('Tarea 1').parents('li').find('input[type="checkbox"]').check({ force: true }); // Busca dentro la lista y la marca como completada
        cy.get('.todo-list').contains('Tarea 1').parents('li').find('input[type="checkbox"]').uncheck({ force: true }); // Desmarca como completada
    })

    // Ejercicio 4

    it('Editar la tarea', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/'); // Enlace para conectar con la página 

        cy.get('.new-todo').type('Tarea 1').type('{enter}'); // Rellena el campo de tarea

        cy.get('.todo-list').contains('Tarea 1'); // Comprobar que la tarea a sido añadida

        cy.get('.todo-list').dblclick(); // simula un doble click

        cy.get('.edit').clear().type('Tarea 1.1{enter}'); // se cambia el nombre de la tarea
    })
})