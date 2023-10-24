import string
import re

archivo = open("general.txt","r")

data = archivo.read()

data = re.sub(r'Form\. FGE-SG-001 - Rev\.0 \(26/07/2016\) –','',data)
data = re.sub(r'Página \d{2,3} de 219', '',data)
data = re.sub(r'Los archivos maestros están almacenados electrónicamente y disponibles para todos los empleados\.', '',data)
data = re.sub(r'Las copias impresas son únicamente para referencia\.', '',data)
data = re.sub(r'Manual de detalle','', data)
data = re.sub(r'ESTANDARES DE CONSTRUCCIÓJN','',data)
data = re.sub(r'- Revisión A','',data)

data = re.sub(r'>','\\>', data)

data = re.sub("\n\-\s*","\n> - ", data)
data = re.sub(r'\n\s*([a-z])', r' \1', data)
data = re.sub(r':\n', r':\n\n', data)

data = re.sub(r'\n\s*[A-Z]\d{6}\.\s*',"\n#### ", data)
data = re.sub(r'\n\s*[A-Z]\d{4}\.\s*',"\n### ", data)
data = re.sub(r'\n\s*[A-Z]\d{2}\.\s*',"\n## ", data)
data = re.sub(r'\n\s*[A-Z]\.\s*',"\n# ", data)
data = re.sub(r'\n\s*[0-9]\.\s*[A-Z]',"\n# ", data)
data = re.sub(r'\n#', '\n\n#', data)

data = re.sub(r'\n([A-Z])', r'\n\n\1', data)

data = re.sub(r'(\n\s*){2,}', '\n\n', data)


with open('docs/resultado.md', 'w', encoding='utf-8') as file:
    file.write(data)