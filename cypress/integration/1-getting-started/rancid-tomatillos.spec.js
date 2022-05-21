/// <reference types="cypress" />

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
    cy.contains('Rating: 6.88')
    cy.contains('Release Date: 2020-09-29')
    cy.contains('Genres: Action')
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

  it('Should be able to click on a different movie thumbnail to see its details', () => {
    cy.get('#337401').click()
    cy.contains('Mulan:')
    cy.contains("When the Emperor of China issues a decree")
    cy.contains('Rating: 5.10')
    cy.contains('Release Date: 2020-09-04')
    cy.contains('Genres: Action | Adventure | Drama | Fantasy')
    cy.contains('Budget: $200000000')
    cy.contains('Revenue: $57000000')
    cy.contains('Runtime: 115 min.')
  });

  it('Should be able to search for a movie by name', () => {
  cy.get('form').contains('Search by name:')
  cy.get('input[name="search"]')
    .type('ava')
    .should('have.value', 'ava')
  cy.get('.movie-thumbnail').should('have.length', 1)
  cy.get('.movie-thumbnail').first().should('have.text', 'AvaRating: 5.88')

  cy.get('input[name="search"]')
    .type('{selectall}{backspace}')
  cy.get('.movie-thumbnail').should('have.length', 40)
  cy.get('.movie-thumbnail').first().should('have.text', 'Money PlaneRating: 6.88')
  cy.get('.movie-thumbnail').last().should('have.text', 'I Still BelieveRating: 3.83')
});

it('Should be able to clear search by name input to view all thumbnails again', () => {
  cy.get('input[name="search"]')
    .type('ava')
    .should('have.value', 'ava')

  cy.get('input[name="search"]')
    .type('{selectall}{backspace}')
  cy.get('.movie-thumbnail').should('have.length', 40)
  cy.get('.movie-thumbnail').first().should('have.text', 'Money PlaneRating: 6.88')
  cy.get('.movie-thumbnail').last().should('have.text', 'I Still BelieveRating: 3.83')
});

it('Should display a message to the user if no movies match their search', () => {
  cy.get('input[name="search"]')
    .type('avv')
    .should('have.value', 'avv')

  cy.contains('No Movies Found!')
});
});
