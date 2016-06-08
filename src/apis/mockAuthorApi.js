/**
 * Created by albertwchang on 6/7/16.
 */
import delay from './delay';

/*
This file mocks a web API by working with the hard-coded data below.
It uses setTimeout to simulate the dealy of an AJAX call.
All API calls return promises!
 */

const authors = [
	{
		id: 'cory-house',
		name: {
			first: 'Cory',
			last: 'House'
		}
	}, {
		id: 'stephen-grider',
		name: {
			first: 'Stephen',
			last: 'Grider'
		}
	}, {
		id: 'john-linquist',
		name: {
			first: 'John',
			last: 'Linquist'
		}
	},
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
	let { first, last } = author.name;
	return `${first.toLowerCase()} - ${last.toLowerCase()}`;
};

class AuthorApi {
	static getAllAuthors() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], authors));
			}, delay);
		});
	}

	static saveAuthor(author) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minNameLength = 3;
				if (author.name.first.length < minNameLength) {
					reject(`First Name must be at least ${minNameLength} characters.`);
				}

				if (author.name.last.length < minNameLength) {
					reject(`Last Name must be at least ${minNameLength} characters.`);
				}

				if (author.id) {
					const authorIndex = authors.findIndex(a => a.id == author.id);
					authors.splice(authorIndex, 1, author);
				} else {
					/* Just simulating creation here. The server would generate ids for new
						authors in a real app. Cloning so copy returned is passed by value
						rather than by reference.
					*/
					author.id = generateId(author);
					authors.push(author);
				}

				resolve(Object.assign({}, author));
			}, delay);
		});
	}

	static deleteAuthor(authorId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const authorIndex = authors.findIndex(author => author.authorId === authorId);

				if (authorIndex < 0) {
					reject("Author not found");
				} else {
					authors.splice(authorIndex, 1);
					resolve();
				}
			}, delay);
		});
	}
}

export default AuthorApi;

