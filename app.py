from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

# Sample data for demonstration
knowledge_base = {
    "who is navu?": "Moksh ki pyari si cute si bhwani 🥰🥰",
    "what is the capital of france?": "The capital of France is Paris.",
    "tell me a fact about dogs.": "Dogs have an excellent sense of smell, with 220 million scent receptors in their noses.",
    # Add more questions and answers as needed
}

@app.route('/')
def home():
    return 'Chatbot API is running'

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message').lower()  # Convert to lowercase for case insensitivity
    response_message = knowledge_base.get(user_message, "Sorry, I don't understand that question.")
    return jsonify({"response": response_message})

if __name__ == '__main__':
    app.run(debug=True)
