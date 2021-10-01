import json
def main():

    #ultra basic table generation to make it easier to see rankings
    f = open('Idola/TSrank.html', 'w')
    with open('Idola/teamscores.json') as j:
        characters = json.load(j)
    j.close()
    message = """<!DOCTYPE html>
    <html>
    <head>
        <style>
            body {background-color: black;}
            table {background-color: gray;font-size: 200%;border-collapse:collapse;}
            td {text-align: center; font-size: 150%;}
            img {display:block;}
        </style>
    </head>
    <body>
        <table border = "1" bordercolor ="black" align="center">
            <tr>
                <th>Rank</th>
                <th>Character</th>
                <th>Teamscore</th>
            </tr>"""
    i = 1
    for entry in characters:
        message += "\n\t\t\t<tr>\n\t\t\t\t<td><b>"+str(i)+"</b></td>\n\t\t\t\t<td><img src=\"PNG/Character Icon/"+entry+".png\" load = \"lazy\"></img></td>\n\t\t\t\t<td><b>"+str(characters[entry])+"</b></td>\n\t\t\t</tr>"
        i += 1
    message +="""</table>
    </body>
    </html>"""

    f.write(message)
    f.close()

if __name__ == "__main__":
    main()
