"""Abra com Python 3; mantenha o terminal aberto durante a apresentação."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import webbrowser

class Pagina(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

def main():
    pasta = Path(__file__).resolve().parent / 'SiteEspro'
    try:
        servidor = ThreadingHTTPServer(('127.0.0.1', 8080), partial(Pagina, directory=str(pasta)))
    except OSError:
        print('Não foi possível abrir a porta 8080. Encerre a outra instância do servidor e tente novamente.')
        print('Se o jornal já está aberto, use http://127.0.0.1:8080 no navegador.')
        return 1
    print('Conexão Jovem: http://127.0.0.1:8080', flush=True)
    print('Mantenha esta janela aberta. Ctrl+C encerra o servidor.', flush=True)
    try:
        try:
            webbrowser.open('http://127.0.0.1:8080')
        except Exception:
            print('Abra o endereço acima no navegador.', flush=True)
        servidor.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        servidor.server_close()
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
