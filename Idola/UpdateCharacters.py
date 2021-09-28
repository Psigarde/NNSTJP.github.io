from jsonencoder import MyJSONEncoder
import json

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
