import queue as @
from RMP import dict_gn
start = 'Arad’
goal = "Bucharest"
result = ""
def BFS(city,cityq,visitedq):
global result
if city==start:
result = result + " " +city
for eachcity in dict_gnlcity].keys():
if eachcity == goal:
result = result+ " " + eachcity
return
if eachcity not in cityq.queue and eachcity not in visitedq.queue:
cityq.put (eachcity)
result = result + " " + eachcity
visitedg.put (city)
BFS (cityqg.get(),cityq, visitedq)
def main():
cityg = Q.Queue ()
visitedg = Q.Queue ()
BFS (start, cityq, visitedq)
print ("BFS Traversal from ",start," to ", goal," is : ")
print(result)
main ()
