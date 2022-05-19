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
    })
      // it('should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
      //   cy.intercept('POST', 'http://localhost:3001/api/v1/login', {
      //       statusCode: 201,
      //       body: {
      //         id: 2,
      //         image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
      //         name: "Leta Keane"
      //       }
      //     })
      //     .get('input[type="email"]').type('leta@turing.io')
      //     .get('input[type="password"]').type('keane20')
      //     .get('button').click()
      //     .url().should('include', '/dashboard')
      // });
  })

  it('displays homepage by default', () => {
    cy.contains('Rancid Tomatillos')
    cy.get('.movie-thumbnail').should('have.length', 40)
    cy.get('.movie-thumbnail').first().should('have.text', 'Money PlaneRating: 6.88')
    cy.get('.movie-thumbnail').last().should('have.text', 'I Still BelieveRating: 3.83')
  })

  it('Should be able to click on a movie thumbnail to see its details', () => {
    // We'll store our item text in a variable so we can reuse it
    cy.get('#694919').click()
    cy.contains('Money Plane:')
    cy.contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    cy.contains('Rating: 6.875')
    cy.contains('Release Date: 2020-09-29')
    cy.contains('Genres: Action')
    cy.contains('Budget: 0')
    cy.contains('Revenue: 0')
    cy.contains('Runtime: 82 min.')
  })

  it('Should be able to go back to main', () => {
    cy.visit('http://localhost:3000/694919')
    cy.get('.back-to-homepage').click()
    cy.contains('Rancid Tomatillos')
    cy.get('.movie-thumbnail').should('have.length', 40)
    cy.get('.movie-thumbnail').first().should('have.text', 'Money PlaneRating: 6.88')
    cy.get('.movie-thumbnail').last().should('have.text', 'I Still BelieveRating: 3.83')

  })



})
