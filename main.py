from glob import glob
import gevent.monkey
gevent.monkey.patch_all()

import eel
import serial.tools.list_ports as port_list
import serial
from serial.tools.list_ports_windows import NULL

def close_callback(route, websockets):
    if not websockets:
        print('Close program')
        if (serial_port!=NULL):
            serial_port.close()
        exit()

serial_port = NULL

print ("Start program")
ports = list(port_list.comports())


line = [] # line of COM port

def parsingThread():
    while True:        
        if (serial_port!=NULL):
            print('CICLE')
            for c in serial_port.read():
                line.append(c)
                if c == '\n':
                    print("Serial COM port recive date: " + ''.join(line))
                    line = []
                    break
        eel.sleep(1.0)                  # Use eel.sleep(), not time.sleep()

eel.spawn(parsingThread)


@eel.expose
def sendSerial(data):
    print('Serial COM port send date:',data)
    #serial_port.write(date)

@eel.expose
def connectSerial(name):
    global serial_port
    print('Connect to Serial COM port:', name)
    #serial_port = serial.Serial(port=name, baudrate=9600,parity=serial.PARITY_NONE,stopbits=serial.STOPBITS_ONE,bytesize=serial.EIGHTBITS,timeout=0)


eel.init('web')
eel.start('index.html', close_callback=close_callback)