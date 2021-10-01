#small thing to calc from array data to increments per LB

import json
from jsonencoder import MyJSONEncoder

input = {
    "Gene":[
        [24089, 619, 699, 551],
        [24899, 635, 711, 567],
        [25709, 651, 723, 583],
        [26714, 671, 738, 603],
        [28139, 701, 759, 633]
        ],
    "Popona":[
        [22489, 549, 687, 624],
        [23389, 564, 702, 639],
        [24289, 579, 717, 654],
        [25414, 597, 735, 672],
        [26989, 624, 762, 699]
        ],
    "XmasGerda":[
        [21089, 622, 669, 611],
        [21989, 637, 684, 626],
        [22889, 652, 699, 641],
        [24014, 670, 717, 659],
        [25589, 697, 744, 686]
    ]
    }
output = {}

for entry in input:
    #extract data
    basestats = [input[entry][0][0], input[entry][0][1], input[entry][0][2],input[entry][0][3]]
    #shove lb0 into basestat dict
    output[entry] = {"Base_Stat":{"hp": basestats[0], "atk": basestats[1], "def": basestats[2], "spd": basestats[3]}}
    #calc LB increments and shove into LB dict
    i = 1
    output[entry]["LB"] = []
    while i < 5:
        temp = []
        n = 0
        for arrays in input[entry][i]:
            temp.append(input[entry][i][n]-basestats[n])
            n += 1
        output[entry]["LB"].append(temp)
        i += 1

processed = json.dumps(output, indent = 4, cls=MyJSONEncoder)
with open("Idola/charstatdump.json", 'w') as json_file:
    json_file.write(processed)
    json_file.write("\n")
json_file.close()
