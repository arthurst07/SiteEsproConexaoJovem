"""Inicie com python iniciar.py. Ctrl+C encerra o servidor local."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import webbrowser

if __name__ == '__main__':
    pasta = Path(__file__).resolve().parent / 'SiteEspro'
    servidor = ThreadingHTTPServer(('127.0.0.1', 8080), partial(SimpleHTTPRequestHandler, directory=str(pasta)))
    print('Conexão Jovem: http://127.0.0.1:8080 — Ctrl+C para encerrar')
    webbrowser.open('http://127.0.0.1:8080')
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        servidor.server_close()
