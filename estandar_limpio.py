import re

patron = re.compile(r'Estándar “limpio” adoptado:\s*(\d+\,?\d*\sHH/..)')

with open("preprocesamiento.txt", "r") as archivo:
    data = archivo.read()

data = re.sub(r'(?m)^#', '%%%#', data)

bloques = re.split(r'\n%%%', data)
nuevo = ""

for bloque in bloques:
    if 'Estándar “limpio” adoptado:' in bloque:
        estandar = patron.search(bloque)
        if estandar:
            numero = estandar.group(1)
            resultado = re.sub(r'(#+\s*.*)', fr'\1 <Badge type="warning" text="{numero}" />', bloque)
            nuevo += "\n" + resultado
        else: nuevo += "\n" + bloque
    else: nuevo += "\n" + bloque
nuevo = re.sub(r'%%%','', nuevo)

with open("bloque.txt", "w") as archivo:
    archivo.write(nuevo)