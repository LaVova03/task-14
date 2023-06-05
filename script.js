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
            error.style.display = 'none';
            console.log(values);
            body.insertBefore(divEl, error);
            document.querySelector('.check').textContent =
                `Ваше замовлення: 
            П.І.П.: ${values.full_name}
            , Місто: ${values.Місто}
            , Відділення НП: ${values.Відділення_НП}
            , Форма оплати: ${values.pay}
            , Кількість: ${values.quantity} шт.`
            break;
        };
    };
});






