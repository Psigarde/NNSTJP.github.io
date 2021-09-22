from PIL import Image
import numpy as np
import glob
import json

#grabs all images as lists with their raw data names
weaponImages = glob.glob('SymbolPrettification/Symbol_Weapon*')
soulImages = glob.glob('SymbolPrettification/Symbol_Soul*')
charImages = glob.glob('SymbolPrettification/ch_Icon*')
magImages = glob.glob('SymbolPrettification/mg_icon*')

addedIDs = {"Weapons":[],"Souls":[],"Chars":[],"Mags":[]}

background = Image.open("SymbolPrettification/6StarWep.png")
soulBase = Image.new('RGBA',(128,128),(0,0,0,0))
frame = Image.open("SymbolPrettification/FrameT.png").resize((128,128))

for entries in soulImages:
    soulBG = soulBase.copy()
    soulID = entries.split("_")[3][:-4]
    #opens image and trims 5 pixels off each side to properly crop
    img = Image.open(entries).resize((128,128))
    arr = np.array(img)
    arr_trim = arr[5:123, 5:123]
    img = Image.fromarray(arr_trim)
    #pastes art + frame onto soulBG at correct positions
    soulBG.paste(img,(5,5), img)
    soulBG.paste(frame,(0,0), frame)
    #saves the symbol as a new image with just the ID + png
    soulBG.save("SymbolPrettification/"+soulID+".png","PNG")
    addedIDs["Souls"].append(str(soulID))

for entries in weaponImages:
    currentImg = background.copy()
    weaponID = entries.split("_")[3][:-4]

    img = Image.open(entries).resize((128,128))

    currentImg.paste(img,(0,0), img)
    currentImg.paste(frame,(0,0), frame)
    currentImg.save("SymbolPrettification/"+weaponID+".png","PNG")
    addedIDs["Weapons"].append(str(weaponID))

for entries in magImages:
    splitText = entries.split("_")
    #pastes the mag art onto mag BG
    magBG = Image.open("SymbolPrettification/MagBG.png")
    img = Image.open(entries)
    magID = splitText[2]+" "+splitText[3][:-4]

    magBG.paste(img,(0,0),img)

    magBG.save("SymbolPrettification/"+magID+".png", "PNG")
    addedIDs["Mags"].append(str(magID))

for entries in charImages:
    splitText = entries.split("_")
    fd = splitText[2][1]
    fullID = splitText[1][4:] + " "+splitText[2][:-4]
    #opens the appropriate background and border for the character FD
    currentChar = Image.open("SymbolPrettification/BG"+fd+".png")
    currentBorder = Image.open("SymbolPrettification/Border"+fd+".png")
    #opens the character image
    img = Image.open(entries)

    currentChar.paste(img,(2,2), img)
    currentChar.paste(currentBorder, (0,0), currentBorder)

    currentChar.save("SymbolPrettification/"+fullID+".png", "PNG")
    addedIDs["Chars"].append(str(fullID))

#make a json file with all the IDs that were added in this run
with open("SymbolPrettification/addedIDs.json","w") as json_file:
    json_file.write(json.dumps(addedIDs,indent=2))
    json_file.write("\n")
json_file.close()
