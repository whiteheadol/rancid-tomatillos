/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      fixture: 'movieList'
    });

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      fixture: 'individualMovie'
    });
  });

  it('displays homepage by default', () => {
    cy.contains('Rancid Tomatillos')
    cy.get('.movie-thumbnail').should('have.length', 40)
    cy.get('.movie-thumbnail').first().should('have.text', 'Money PlaneRating: 6.88')
    cy.get('.movie-thumbnail').last().should('have.text', 'I Still BelieveRating: 3.83')
  });

  it('Should be able to click on a movie thumbnail to see its details', () => {
    cy.get('#694919').click()
    cy.contains('Money Plane:')
    cy.contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    cy.contains('Rating: 6.875')
    cy.contains('Release Date: 2020-09-29')
    cy.contains('Genres: Action')
    cy.contains('Budget: 0')
    cy.contains('Revenue: 0')
    cy.contains('Runtime: 82 min.')
  });

  it('Should be able to go back to main', () => {
    cy.visit('http://localhost:3000/694919')
    cy.get('.back-to-homepage').click()
    cy.contains('Rancid Tomatillos')
    cy.get('.movie-thumbnail').should('have.length', 40)
    cy.get('.movie-thumbnail').first().should('have.text', 'Money PlaneRating: 6.88')
    cy.get('.movie-thumbnail').last().should('have.text', 'I Still BelieveRating: 3.83')

  });

  it('Should be able to search for a movie by name', () => {
  cy.get('form').contains('Search by name:')
  cy.get('input[name="search"]')
    .type('ava')
    .should('have.value', 'ava')
  cy.get('.movie-thumbnail').should('have.length', 1)
});
});
