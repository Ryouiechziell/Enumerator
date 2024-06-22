#!/usr/bin/python3
class Operator:
    
    def __init__(self):
        self.input = input('Enter Operator * /  - + % : ')
        self.process()
    def process(self):
        try:
            Inputnumber1 = int(input('Enter Number : '))
            Inputnumber2 = int(input('Enter Number : '))
        except :
            print('Only Number Sir')
        self.number1 = Inputnumber1
        self.number2 = Inputnumber2    
            
        if self.input == '*':
            print(f'\nHasil : {self.kali()}')
        elif self.input == '/':
            print(f'\nHasil : {self.bagi()}')
        elif self.input == '+':
            print(f'\nHasil : {self.tambah()}')
        elif self.input == '-':
            print(f'\nHasil : {self.kurang()}')
        elif self.input == '%':
            print(f'\nHasil : {self.modulus()}')
        
    def kali(self):
        result = self.number1 * self.number2
        return result
    def bagi(self):
        result = self.number1 / self.number2
        return result
    def tambah(self):
        result = self.number1 + self.number2
        return result    
    def kurang(self):
        result = self.number1 - self.number2
        return result    
    def modulus(self):
        result = self.number1 % self.number2
        return result    

Operator()            
 
    
    
    