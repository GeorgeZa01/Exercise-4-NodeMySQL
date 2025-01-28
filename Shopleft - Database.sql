Create Database shopleft;

Use shopleft ;

Create Table users (
	ID INT Primary Key Auto_increment Not Null,
    Email VARCHAR(255) Not Null,
    First_Name Varchar(45) Not Null,
    Last_Name Varchar(45) Not Null,
    Password Varchar(255) Not Null
    );
	
Create Table products (
	Product_Code Varchar(40) Primary Key Not Null,
    Product_Name Varchar(255) Not Null,
    Product_Price Decimal(5,2) Not Null,
    Product_Quantity INT
);

Insert into users (Email, First_Name, Last_Name, Password)
Values 
	('matthew@lifechoices.co.za','Matthew','Brown','matthewbrown');
    
Insert Into products (Product_Code,Product_Name,Product_Price,Product_Quantity)
Values
	('baro1', 'Bar One',9.99,20),
    ('hand1','Handy Andy',19.99,5),
    ('pota1','Potatoes',38.99,10);
    
    Insert into users (Email, First_Name, Last_Name, Password)
Values 
	('jemaile@lifechoices.co.za','Jemaile','Mohamed','jemailemohamed');
    
    Insert Into products (Product_Code,Product_Name,Product_Price,Product_Quantity)
Values
	('usnw1', 'USN Whey',579.99,1),
    ('creat1','Creatine',199.99,3),
    ('prew1','Potatoes',89.99,5);