import csv
import json

csvfile = open('file.csv', 'r')
jsonfile = open('file.json', 'w')

fieldnames = ('name','x','y')
jsonfile.write('[\n')
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
	json.dump(row,jsonfile)
	jsonfile.write(',\n')
jsonfile.write(']')