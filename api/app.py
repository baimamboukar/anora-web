"""ANORA API BACKEND"""

from flask import Flask, render_template, request, send_from_directory

app = Flask(__name__)


@app.route('/')
def intellibra():
    """--Returns index.html--"""
    return render_template('invitation.html')


@app.route('/.well-known/<path:filename>')
def well_known(filename):
    return send_from_directory('static/.well-known', filename)


@app.route('/invitation')
def invitation():
    """--Returns invitation.html with parsed invitation data--"""
    # Get the query parameters from the URL and parse them into a dictionary
    invitation_params = request.args.to_dict()

    # Convert the dictionary to a JSON string if needed (for example, for easy debugging)
    # You can also use `json.dumps(invitation_params)` if you need a JSON string
    invitation = str(invitation_params)

    return render_template('invitation.html', invite=invitation)


if __name__ == "__main__":
    app.run(debug=True)
