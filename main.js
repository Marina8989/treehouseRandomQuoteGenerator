const data = [
    {
        quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        author: '- Winston S. Churchill',
        place: 'Google'
    },
    {
        quote: 'It is better to fail in originality than to succeed in imitation.',
        author: '- Herman Melville',
        place: 'Google'
    },
    {
        quote: 'The road to success and the road to failer are almost exactly the same.',
        author: '- Colin R. Davis',
        place: 'Google'
    },
    {
        quote: 'Opportunities don\'t happen. You create them.',
        author: '- Chris Grosser',
        place: 'Google'
    },
    {
        quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        author: '- Winston S. Churchill',
        place: 'Google'
    },
    {
        quote: 'Try not to become a man of success. Rather become a man of value.',
        author: '- Albert Einstein',
        place: 'Google'
    },
    {
        quote: 'Stop chasing the money and start chasing the passion.',
        author: '- Tony Hsieh',
        place: 'Google'
    },
    {
        quote: 'I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.',
        author: '- G.K. Chesterton',
        place: 'Google'
    },
]

const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const h3 = document.createElement('h3');
const h4 = document.createElement('h4');
const h5 = document.createElement('h5');

btn.addEventListener('click', getQuote);

function randomNumber() {
    let num = Math.floor(Math.random() * data.length);
    return num;
}

function getQuote() {
    let randNum = randomNumber();
    console.log(randNum);
    h3.innerText = data[randNum].quote;
    h4.innerText = data[randNum].author;
    h5.innerText = data[randNum].place;
    container.prepend(h5);
    container.prepend(h4);
    container.prepend(h3);
}