import json

with open("csvjson.json") as archivo:
    datos = json.load(archivo)

    for orden in datos:
        del orden['']
        del orden['__1']
        del orden['__2']

with open("ordenes.json",'w') as arch_nuevo:
    json.dump(datos,arch_nuevo, indent=4)
