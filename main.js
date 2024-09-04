import './style.css'

import OpenAI from 'openai';

const client = new OpenAI({
	apiKey: import.meta.env.VITE_OPENAI_KEY,
	dangerouslyAllowBrowser: true
});

async function justeAskSomething(message) {
	const stream = await client.chat.completions.create({
		model: 'gpt-4o',
		messages: [{ role: 'user', content: message }],
		stream: true,
	});

	let messageELement = document.createElement("div");
	messageELement.classList.add("message");
	document.getElementById("messages-container").appendChild(messageELement);
	
	for await (const chunk of stream) {
		messageELement.innerHTML += chunk.choices[0]?.delta?.content || '';
	}
}

// justeAskSomething("Dis-moi que je suis beau s'il te plaît !")

// cette fonction sera déclencher à chaque fois que l'utilisateur cliquera sur l'élément avec l'id "send-message-button"
document.getElementById("send-message-button").addEventListener("click", () => { 
	let inputText = document.getElementById("text-input-to-gpt").value; // récupère l'input textuelle contenue dans le html 
	document.getElementById("text-input-to-gpt").value = ""; // vide l'input
	justeAskSomething(inputText); // envoie la demande à chatgpt dans la fonction précédemment faite
})