const WS = new WebSocket('ws://localhost:3000');

WS.onmessage = (payload) => {
    console.log('payload', payload.data);
    displayMessages(payload.data);
}

WS.onopen = () => {
    displayTitle('WS Server Connected');
    console.log('connection open');
}

WS.onclose = () => {
    displayTitle('WS Server disConnected');

    console.log('connection close');
}

function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}
function displayMessages(msg){
    let h3 = document.createElement('h3');
    h3.innerText = msg
    document.querySelector('div.messages').appendChild(h3);
}

document.forms[0].onsubmit = () => {
    let input = document.getElementById('message');

    console.log(input.value);
    WS.send(input.value);
    input.value = ''
}
