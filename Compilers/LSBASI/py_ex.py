print "Hello, World!"

def hello(what):
    text = "Hello, %s!" % what
    print text

hello("World")

str = "foo"; lst = ["abra", 2038, "cadabra"]
for char in str:
    print char

for elem in lst:
    print elem

def iterquad ():
    for i in range(5):
        yield (i*i)

for j in iterquad():
    print j
