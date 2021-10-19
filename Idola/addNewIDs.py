import json

#REQUIRES RUNNING PrettyImages.py FIRST!
#This script automatically adds the new IDs of mags and symbols after PrettyImages.py generates the json of added IDs
def main():
    with open("SymbolPrettification/output/addedIDs.json") as file:
        newIDs = json.load(file)
    file.close()
    with open("Idola/SymbolAndIdomagIDs.json") as file:
        oldIDs = json.load(file)
    file.close()

    for category in oldIDs:
        for entry in newIDs[category]:
            if entry in oldIDs[category]:
                pass
            else:
                oldIDs[category].append(entry)
        oldIDs[category].sort()

    updatedIDs = json.dumps(oldIDs, indent=2)
    with open("Idola/SymbolAndIdomagIDs.json", "w") as json_file:
        json_file.write(updatedIDs)
        json_file.write("\n")
    json_file.close()

if __name__ == '__main__':
    main()
