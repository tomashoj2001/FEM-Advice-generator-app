const d = document,
  $number = d.querySelector('h1'),
  $advice = d.querySelector('p');

async function generateAdvice() {
  try {
    let res = await fetch('https://api.adviceslip.com/advice'),
      json = await res.json();

    console.log(res)
    console.log(json)

    if(!res.ok) throw { status:res.status, statusText: res.statusText }

    $number.innerText = `Advice #${json.slip.id}`;
    $advice.innerText = `"${json.slip.advice}"`;
  } catch (err) {
    let message = err.statusText || 'Ups... something went wrong!'
    $advice.innerText = `${message}`;
  }
}

d.addEventListener('DOMContentLoaded', generateAdvice);
d.addEventListener('click', e => {
  if (e.target.matches('picture > *')) generateAdvice()
});