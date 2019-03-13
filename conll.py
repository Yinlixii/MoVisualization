import pandas as pd
df = pd.read_csv("file.csv",sep=",")
 
list1data = df["slng"].astype(np.string_)
list2data = df["slat"].astype(np.string_)
result = list1data+','+list2data
print type(result)
result.to_csv("file1.csv")