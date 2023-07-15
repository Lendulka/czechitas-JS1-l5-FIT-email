console.log('funguju!');

// FIT E-MAIL

const convertEmail = (e) => {
    e.preventDefault()

    const firstnameElm = document.querySelector('#firstname')
    const surnameElm = document.querySelector('#surname')

    let firstnameValue = firstnameElm.value
    let surnameValue = surnameElm.value

    const firstnameResult = firstnameValue
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .trim()
        .slice(0, 3)
        .toLowerCase()

    const surnameResult = surnameValue
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .trim()
        .slice(0, 5)
        .toLowerCase()

    const containElm = document.querySelector('.container')
    containElm.innerHTML += `
        <div class="email__result">
            <p class="paragraph">Výsledná emailová adresa je:</p>
            <p class="paragraph"><span>${surnameResult}${firstnameResult}@fit.cvut.cz</span></p>
        </div>
        `

    firstnameElm.value = ''
    surnameElm.value = ''
}

const convertElm = document.querySelector('#email__conversion')
convertElm.addEventListener('submit', convertEmail)

