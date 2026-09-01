import webview
import checkfile
import json
import rewrite as re
from json import JSONDecodeError
from pathlib import Path

root = Path(__file__).resolve().parent.parent
config_root = Path(__file__).resolve().parent.parent



index_path = root/"app"/"index.html"
class Api():
    def verify_input(self, inputSub):
        try:
            json.loads(inputSub)
            re.write(config_root/"config"/"tempmem.json", json.loads(inputSub))
            print(inputSub)
            
            return "True"
        except JSONDecodeError:
            return "False"





api = Api()

webview.create_window("SonView",str(index_path), js_api=api)
webview.start()