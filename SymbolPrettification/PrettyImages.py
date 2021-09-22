from PIL import Image
import numpy as np
import glob

#grabs all images as lists with their raw data names
weaponImages = glob.glob('SymbolPrettification/Symbol_Weapon*')
soulImages = glob.glob('SymbolPrettification/Symbol_Soul*')

background = Image.open("SymbolPrettification/6StarWep.png")
soulBase = Image.new('RGBA',(128,128),(0,0,0,0))
frame = Image.open("SymbolPrettification/FrameT.png").resize((128,128))

for entries in soulImages:
    soulBG = soulBase.copy()
    SoulID = entries.split("_")[3]
    #opens image and trims 5 pixels off each side to properly crop
    img = Image.open(entries).resize((128,128))
    arr = np.array(img)
    arr_trim = arr[5:123, 5:123]
    img = Image.fromarray(arr_trim)
    #pastes art + frame onto soulBG at correct positions
    soulBG.paste(img,(5,5), img)
    soulBG.paste(frame,(0,0), frame)
    #saves the symbol as a new image with just the ID + png
    soulBG.save("SymbolPrettification/"+SoulID,"PNG")

for entries in weaponImages:
    currentImg = background.copy()
    weaponID = entries.split("_")[3]

    img = Image.open(entries).resize((128,128))

    currentImg.paste(img,(0,0), img)
    currentImg.paste(frame,(0,0), frame)
    currentImg.save("SymbolPrettification/"+weaponID,"PNG")

