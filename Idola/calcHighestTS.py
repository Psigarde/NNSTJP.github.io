import json
import types
def main():
    typestats = {
        "TypeATK":{"base":900,"max":1950}
        ,"TypeDEF":{"base":950,"max":2450}
        ,"TypeSPD":{"base":800,"max":1925}
        ,"TypeCRT":{"base":750,"max":1575,"specialMax":1000}
        ,"TypeRES":{"base":750,"max":1575,"specialMax":1250}
        ,"TypeWEA":{"base":700,"max":1650,"specialMax":375}
    }

    with open("Idola/testfile.json") as file:
        statdata = json.load(file)
    file.close()
    with open("Idola/CharacterswithLBDB.json") as file:
        characterData = json.load(file)

    teamscore = {}
    for entry in characterData:
        if entry == "100000":
            pass
        else:
            hp = statdata[entry]["HP"][-1]
            raw = statdata[entry]["ATK"][-1] + statdata[entry]["DEF"][-1] + statdata[entry]["SPD"][-1]
            baseTS = (hp/4)+(raw*5)
            baseType = characterData[entry]["Type"]["nonfd"]
            for fd in characterData[entry]["FD"]:
                calced = baseTS
                id = entry
                curType = characterData[entry]["Type"][fd]

                if fd == "nonfd":
                    id += " 0"+characterData[entry]["FD"][fd]
                elif fd == "law" or fd == "chaos":
                    id += " 1"+characterData[entry]["FD"][fd]
                calced -= typestats[baseType]["base"]
                calced += typestats[curType]["max"]

                if "specialMax" in typestats[curType]:
                    calced += (typestats[curType]["specialMax"])

                teamscore[id] = int(calced)

    sk = sorted(teamscore, key = teamscore.get, reverse=True)
    SortedTS = {}
    for id in sk:
        SortedTS[id] = teamscore[id]

    j = json.dumps(SortedTS,indent = 2)
    with open("Idola/teamscores.json", "w") as json_file:
        json_file.write(j)
        json_file.write("\n")
    json_file.close()

if __name__ == "__main__":
    main()
