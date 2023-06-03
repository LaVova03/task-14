const divEl = document.createElement('div');
divEl.classList.add("check");


const buy = document.getElementById('buy');
const error = document.getElementById('error');
const body = document.getElementById('body')


form.style.display = 'none';
error.style.display = 'none';

buy.addEventListener('click', () => {
    form.style.display = 'block';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const obj = Object.values(values);

    for (let key of obj) {
        if (key === '') {
            error.style.display = 'block';
            break;
        } else {
            console.log(values);
            body.insertBefore(divEl, error);
            document.querySelector('.check').innerHTML = 
            `Ваше замовлення: \n
            П.І.П.: ${values.full_name}<br/>
            Місто: ${values.Місто}<br/>
            Відділення НП: ${values.Відділення_НП}<br/>
            Форма оплати: ${values.pay}<br/>
            Кількість: ${values.quantity} шт.`
            break;
        };
    };
});






