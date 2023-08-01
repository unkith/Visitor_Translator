const button = document.querySelector('.submit');
let output = document.querySelector('.output')

// p tags that contain the common words used while visiting a new place
const hello = document.querySelector('.hello-translation');
const hru = document.querySelector('.hru-translation');
const exc = document.querySelector('.excme-translation');
const dys = document.querySelector('.dys-translation');
const ilf = document.querySelector('.ilf-translation');
const ty = document.querySelector('.ty-translation');
const bye = document.querySelector('.bye-translation');
const yn = document.querySelector('.yn-translation');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b0bcfd5e0mshe19000df7722cf7p14a605jsn9ef9df1a659c',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};

button.addEventListener('click', () => {
	const inp = document.querySelector('.input');
	let orig = document.querySelector('.orig').value
	let end = document.querySelector('.end').value;

	let text = inp.value;

	if (text === '') {
		output.innerHTML = 'Nothing to translate'
	}
	else {

		// shows the translations of the inputted text and the translations of the common words used

		let apiUrl = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiUrl, options)
			.then(response => response.json())
			.then(response => {
				output.innerHTML = response.responseData.translatedText;
			})
			.catch(err => console.error(err));

		text = 'Hello'
		let apiHello = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiHello, options)
			.then(response => response.json())
			.then(response => {
				hello.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

		text = 'How are you?'
		let apiHRU = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiHRU, options)
			.then(response => response.json())
			.then(response => {
				hru.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

		text = 'Excuse me'
		let apiExc = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiExc, options)
			.then(response => response.json())
			.then(response => {
				exc.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

		text = 'Do you speak...?'
		let apiDYS = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiDYS, options)
			.then(response => response.json())
			.then(response => {
				dys.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

		text = "I'm looking for..."
		let apiILF = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiILF, options)
			.then(response => response.json())
			.then(response => {
				ilf.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

		text = 'Thank you'
		let apiTy = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiTy, options)
			.then(response => response.json())
			.then(response => {
				ty.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

		text = 'Bye'
		let apiBye = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiBye, options)
			.then(response => response.json())
			.then(response => {
				bye.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

		text = 'Yes/ No'
		let apiYN = `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${orig}%7C${end}&q=${text}`
		fetch(apiYN, options)
			.then(response => response.json())
			.then(response => {
				yn.innerHTML = response.responseData.translatedText
			})
			.catch(err => console.error(err));

	}

})
