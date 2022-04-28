describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const usernameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const tosBox = () => cy.get(`input[id='tos']`)
    const submitBtn = () => cy.get(`button[id='submit-button']`);

    it('sanity check', () => {
        expect(1 + 2).to.equal(3)
    })

    it('testing input fields are showing', () => {
        usernameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist');
        tosBox().should('exist');
        submitBtn().should('exist');
        cy.contains('Submit').should('exist');
    })

    describe('filling out inputs and submitting', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can type in the input fields', () => {
            usernameInput()
            .should('have.value', '')
            .type('lorem ipsum')
            .should('have.value', 'lorem ipsum');
            emailInput()
            .should('have.value', '')
            .type('a@c.c')
            .should('have.value', 'a@c.c');
            passInput()
            .should('have.value', '')
            .type('password')
            .should('have.value', 'password');
        })

        it('submit button enables when all 4 fields are finished', () => {
            usernameInput()
            .should('have.value', '')
            .type('lorem ipsum')
            .should('have.value', 'lorem ipsum');
            emailInput()
            .should('have.value', '')
            .type('a@c.c')
            .should('have.value', 'a@c.c');
            passInput()
            .should('have.value', '')
            .type('password')
            .should('have.value', 'password');
            tosBox()
            .click();
            submitBtn()
            .click();
            
            
        })
    })

})