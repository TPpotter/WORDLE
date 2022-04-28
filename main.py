import os

from functions import app

port = int(os.environ.get("PORT", 8000))
app.run(host='localhost', port=port)
