from collections import defaultdict
import json
from typing import DefaultDict, Dict, Any

with open('Idola/CharacterswithLBDB.json') as f:
    CharData = json.load(f)

with open('Idola/SymbolAndIdomagIDs.json') as f2:
    SymbolAndMagIDs = json.load(f2)

Characters = []
CharactersType = {"1" : [], "2" : [], "3" : [], "4" : [],"5" : [],"6" : []}
CharactersDBNA = []
CharactersELE = {"0" :[], "1" : [], "2" : [], "3" : [], "4" : []}
CharactersNeutral = []
CharacterStat = {}
for x in CharData:
    currentCharacterStat = {}
    prefix = "0"
    curCharEle = CharData[x]["Element"]
    CharactersELE[str(curCharEle)].append(x)
    indexStat = 0
    for stat in CharData[x]["Base_Stat"]:
        statText = stat.upper()
        currentCharacterStat |= {statText:[]}
        indexLB = 0
        currentStatValue = CharData[x]["Base_Stat"][stat]
        statWithLBDB = 0
        while indexLB < 5:
            indexDB = 0
            while indexDB < 10:
                if indexLB == 0:
                    if indexDB == 0:
                        statWithLBDB = currentStatValue
                    else:
                        statWithLBDB = CharData[x]["DB"][indexDB-1][indexStat] + currentStatValue
                else:
                    if indexDB == 0:
                        statWithLBDB = CharData[x]["LB"][indexLB-1][indexStat] + currentStatValue
                    else:
                        statWithLBDB = CharData[x]["LB"][indexLB-1][indexStat] + CharData[x]["DB"][indexDB-1][indexStat] + currentStatValue
                currentCharacterStat[statText].append(statWithLBDB)
                indexDB += 1
            indexLB += 1
        indexStat += 1
    CharacterStat |= {x:currentCharacterStat}
    for fdcount in CharData[x]["FD"]:
        Trueid = x + " "+prefix+CharData[x]["FD"][fdcount]
        if prefix == "0":
            prefix = "1"
        Characters.append(Trueid)
        if "AlwaysNeutralFlag" in CharData[x]:
            CharactersNeutral.append(Trueid)
        if len(CharData[x]["FD"]) == 1:
            CharactersDBNA.append(Trueid)
        curFDType = CharData[x]["Type"][fdcount]
        if curFDType == "TypeATK":
            CharactersType["1"].append(Trueid)
        if curFDType == "TypeDEF":
            CharactersType["2"].append(Trueid)
        if curFDType == "TypeSPD":
            CharactersType["3"].append(Trueid)
        if curFDType == "TypeCRT":
            CharactersType["4"].append(Trueid)
        if curFDType == "TypeRES":
            CharactersType["5"].append(Trueid)
        if curFDType == "TypeWEA":
            CharactersType["6"].append(Trueid)

Characters.sort()
with open("Idola/DataID.js", "w") as output:
    #CharacterIDs
    output.write("var Characters =\n[")
    for entry in Characters:
        output.write("\""+entry+"\",")
    output.write("];\n\n")
    #neutral chars
    output.write("var CharactersNeutral =\n[")
    for entry in CharactersNeutral:
        output.write("\""+entry+"\",")
    output.write("];\n\n")
    #Elements
    output.write("var CharactersELE =\n    {\n")
    for element in CharactersELE:
        output.write("        \""+str(element)+"\":\n            [")
        for entry in CharactersELE[element]:
            output.write("\""+str(entry)+"\",")
        output.write("],\n")
    output.write("    };\n\n")
    #DBNA
    output.write("var CharactersDBNA =\n[")
    for entry in CharactersDBNA:
        output.write("\""+entry+"\",")
    output.write("];\n\n")
    #types
    output.write("var CharactersType =\n    {\n")
    for type in CharactersType:
        output.write("        \""+str(type)+"\":\n            [")
        for entry in CharactersType[type]:
            output.write("\""+entry+"\",")
        output.write("],\n")
    output.write("    };\n\n")
    #Weapon IDs
    output.write("var Weapons =\n[")
    for entry in SymbolAndMagIDs["Weapons"]:
        output.write("\""+entry+"\",")
    output.write("];\n\n")
    #soul IDs
    output.write("var Souls =\n[")
    for entry in SymbolAndMagIDs["Souls"]:
        output.write("\""+entry+"\",")
    output.write("];\n\n")
    #Mag IDs
    output.write("var IdoMags =\n[")
    for entry in SymbolAndMagIDs["IdoMags"]:
        output.write("\""+entry+"\",")
    output.write("];\n")
output.close()

with open("Idola/DataCharacterStat.js", "w") as output:
    output.write("var CharacterStat =\n    {\n")
    for x in CharacterStat:
        output.write("        \""+x+"\":\n            {\n")
        for stat in CharacterStat[x]:
            output.write("                \""+stat+"\": [")
            for value in CharacterStat[x][stat]:
                output.write(str(value)+",")
            output.write("],\n")
        output.write("            },\n")
    output.write("    };\n")
output.close()
