import json

#initial class by tim ludwinski
class MyJSONEncoder(json.JSONEncoder):
    def __init__(self, *args, **kwargs):
        super(MyJSONEncoder, self).__init__(*args, **kwargs)
        self.current_indent = 0
        self.current_indent_str = ""

    def encode(self, o):
        #Special Processing for lists
        if isinstance(o, (list, tuple)):
            primitives_only = True
            for item in o:
                if isinstance(item, (list, tuple, dict)):
                    primitives_only = False
                    break
            output = []
            if primitives_only:
                for item in o:
                    output.append(json.dumps(item))
                return "[ " + ", ".join(output) + " ]"
            else:
                self.current_indent += self.indent
                self.current_indent_str = " " * self.current_indent
                for item in o:
                    output.append(self.current_indent_str + self.encode(item))
                self.current_indent -= self.indent
                self.current_indent_str = " " * self.current_indent
                return "[\n" + ",\n".join(output) + "\n" + self.current_indent_str + "]"
        elif isinstance(o, dict):
            output = []
            self.current_indent += self.indent
            self.current_indent_str = " " * self.current_indent
            for key, value in o.items():
                output.append(self.current_indent_str + json.dumps(key) + ": " + self.encode(value))
            self.current_indent -= self.indent
            self.current_indent_str = " " * self.current_indent
            return "{\n" + ",\n".join(output) + "\n" + self.current_indent_str + "}"
        else:
            return json.dumps(o)

def main():
    with open("Idola/CharacterswithLBDB.json") as file:
        cl = json.load(file)
    file.close()

    with open("Idola/UpdateTheseCharacters.json") as file:
        updateCharacters = json.load(file)
    file.close()

    for updateID in updateCharacters:
        if updateID in cl:
            for updates in updateCharacters[updateID]:
                cl[updateID][updates] = updateCharacters[updateID][updates]
        else:
            cl[updateID] ={}
            cl[updateID] |= updateCharacters[updateID]
    finishedList = json.dumps(cl, indent=4, cls=MyJSONEncoder)
    with open("Idola/CharacterswithLBDB.json", "w") as json_file:
        json_file.write(finishedList)
        json_file.write("\n")
    json_file.close()

    exec(open('Idola/UpdateJSFiles.py').read())

if __name__ == '__main__':
    main()
