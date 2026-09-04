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
            return "True"
        except JSONDecodeError:
            return "False"
    def process_json(self):
        data = checkfile.read(config_root/"config"/"tempmem.json")
        if type(data) == list:
            self.perform_check(data)
        elif type(data) == dict:
            self.dict_check(data)
    def perform_check(self, structure):
        for element in structure:
            if type(element) == dict:
                self.dict_check(element)
            else:
                pass
    def dict_check(self,dict_structure):
        for value in dict_structure:
            if type(dict_structure[value]) == list:
                self.perform_check(dict_structure[value])
            elif type(dict_structure[value]) == dict:
                self.dict_check(dict_structure[value])
            else:
                pass
    

    

   



api = Api()

webview.create_window("JTREE_V",str(index_path), js_api=api)
webview.start(debug=True)

