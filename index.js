
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const OpenAI = require('openai');
require("dotenv").config();

const client = new Client();

// Function to handle OpenAI completions
// Function to handle OpenAI completions
async function runCompletion(userMessage) {
    const openai = new OpenAI({ apiKey: process.env['OPEN_AI_KEY'] });
    const initialContent = "You are a helpful assistant. "; // Predefined content

    try {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: 'system', content: initialContent },
                { role: 'user', content: userMessage }
            ],
            max_tokens: 200,
        });

        if (
            chatCompletion &&
            chatCompletion.choices &&
            chatCompletion.choices.length > 0 &&
            chatCompletion.choices[0].message &&
            chatCompletion.choices[0].message.content
        ) {
            return chatCompletion.choices[0].message.content;
        } else {
            console.error("Invalid response structure from OpenAI API:", chatCompletion);
            throw new Error("Invalid response structure from OpenAI API");
        }
    } catch (error) {
        throw new Error(`Error processing message: ${error.message}`);
    }
}

// Event listener for incoming messages
client.on('message', async (message) => {
    console.log(message.body);
    try {
        const result = await runCompletion(message.body);
        await message.reply(result); // Using reply to respond to the same chat
    } catch (error) {
        console.error('Error processing message:', error.message);
        // Handle the error as needed
    }
});

// Event for QR code generation
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Initialize the client
client.initialize().then(() => {
    console.log("Client initialized");
}).catch((err) => {
    console.error("Error initializing client:", err);
});
