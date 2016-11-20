# -*- coding: utf-8 -*-
""" 
Example of use singe layer perceptron(newp)
===========================================

Train with Delta rule

"""

import json
import neurolab as nl
from pprint import pprint


import json,urllib
import urllib.request
with urllib.request.urlopen("http://localhost:8000/impressions?dc=NA") as url:
    data = url.read()
output = json.loads(data)
print (output)

import json

data = []
with open('C:\Users\Michael\Documents\GitHub\sugoi-nation\other\jsonstuff.json') as f:
    for line in f:
        data.append(json.loads(line))

"""# Logical &
input = [[0, 0], [0, 1], [1, 0], [1, 1]]
target = [[0], [0], [0], [1]]

# Create net with 2 inputs and 1 neuron
net = nl.net.newp([[0, 1],[0, 1]], 1)

# train with delta rule
# see net.trainf
error = net.train(input, target, epochs=100, show=10, lr=0.1)

# Plot results
import pylab as pl
pl.plot(error)
pl.xlabel('Epoch number')
pl.ylabel('Train error')
pl.grid()
pl.show()"""