from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy location data for demonstration
location_data = {
    "latitude": 30.3753,
    "longitude": 69.3451
}

@app.route('/track_location', methods=['POST'])
def track_location():
    mobile_number = request.form.get('mobile_number')
    if mobile_number and mobile_number.startswith('92') and len(mobile_number) == 12:
        # In a real scenario, you would fetch location data from a database or external API
        # Here, we're just returning dummy location data
        return jsonify(location_data)
    else:
        return jsonify({'error': 'Invalid Pakistani mobile number'}), 400

if __name__ == '__main__':
    app.run(debug=True)
